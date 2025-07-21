using Backend.Data;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/pharmacist")]
    public class PharmacistController : ControllerBase
    {
        private readonly SupabaseClientFactory _clientFactory;

        public PharmacistController(SupabaseClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        [HttpGet("getAllPharmacists")]
        public async Task<IActionResult> GetPharmacists()
        {
            var client = await _clientFactory.GetClientAsync();

            var result = await client.From<PharmacistModel>().Get();

            var data = result.Models.Select(x => new
            {
                x.Id,
                x.FullName
            });

            return Ok(data);
        }

        [HttpPost("createPharmacist")]
        public async Task<IActionResult> SaveClientAsync([FromBody] PharmacistModel pharmacist)
        {
            if (pharmacist == null)
            {
                return BadRequest("Pharmacist data is required.");
            }
            try
            {
                var pharmacistService = new PharmacistService(_clientFactory);
                await pharmacistService.SaveClientAsync(pharmacist);
                return Ok("Pharmacist Account Created Successfully.");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Registration failed: " + ex);  // full exception
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }
    }
}
