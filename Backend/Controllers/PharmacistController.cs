using Backend.Data;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/pharmacist")]
    public class PharmacistController : ControllerBase
    {
        private readonly SupabaseClientFactory _clientFactory;
        private readonly PharmacistService _pharmacistService;

        public PharmacistController(SupabaseClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        [HttpGet("getAllPharmacists")]
        public async Task<IActionResult> GetPharmacists()
        {
            var pharmacists = await _pharmacistService.GetAllAsync();

            var data = pharmacists.Select(x => new
            {
                x.Id,
                x.FullName
            });

            return Ok(data);
        }

        [HttpPost("createPharmacist")]
        public async Task<IActionResult> SaveClientAsync([FromBody] Pharmacist pharmacist)
        {
            if (pharmacist == null)
            {
                return BadRequest("Pharmacist data is required.");
            }
            try
            {
                await _pharmacistService.SaveClientAsync(pharmacist);
                return Ok("Pharmacist Account Created Successfully.");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Registration failed: " + ex);  // full exception
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] Pharmacist loginData)
        {
            if (loginData == null || string.IsNullOrWhiteSpace(loginData.Email) || string.IsNullOrWhiteSpace(loginData.Password))
                return BadRequest("Email and Password are required.");

            try
            {
                var pharmacists = await _pharmacistService.GetAllAsync();
                var pharmacist = pharmacists.FirstOrDefault(u => u.Email == loginData.Email);

                if (pharmacist == null || !BCrypt.Net.BCrypt.Verify(loginData.Password, pharmacist.Password))
                    return Unauthorized("Invalid email or password.");

                var jwtService = new JwtService(HttpContext.RequestServices.GetRequiredService<IConfiguration>());
                var token = jwtService.GeneratePharmacistToken(pharmacist);

                return Ok(new { token });
            }
            catch (Exception ex)
            {
                Console.WriteLine("Login error: " + ex);
                return StatusCode(500, "Internal server error");
            }
        }

        // [Authorize]
        // [HttpGet("me")]
        // public async Task<IActionResult> GetMyProfile()
        // {
        //     var email = User.FindFirst("email")?.Value;
        //     if (string.IsNullOrEmpty(email)) return Unauthorized();

        //     var pharmacyService = new PharmacistService(_clientFactory);
        //     var pharmacist = await pharmacyService.GetByEmailAsync(email);

        //     if (pharmacist == null) return NotFound();
        //     return Ok(pharmacist);
        // }
    }
}
