using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/pharmacist")]
    public class PharmacistController : ControllerBase
    {
        private readonly SupabaseClientService _supabaseService;

        public PharmacistController(SupabaseClientService supabaseService)
        {
            _supabaseService = supabaseService;
        }

        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            var client = _supabaseService.GetClient();
            var result = await client.From<PharmacistModel>().Get();
            // This avoids serializing Postgrest metadata like [PrimaryKey]
            var data = result.Models.Select(x => new
            {
                x.Id,
                x.FullName
            });

            return Ok(data);
        }
    }
}