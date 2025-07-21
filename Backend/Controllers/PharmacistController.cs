using Backend.Data;
using Backend.Models;
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

        [HttpGet]
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
    }
}
