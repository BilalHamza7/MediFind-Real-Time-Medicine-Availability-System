using System.Text.Json;
using Backend.Data;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{

    // for login purpose only, avoids required field errors
    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    [ApiController]
    [Route("api/pharmacist")]
    public class PharmacistController : ControllerBase
    {
        private readonly SupabaseClientFactory _clientFactory;
        private readonly PharmacistService _pharmacistService;

        public PharmacistController(SupabaseClientFactory clientFactory, PharmacistService pharmacistService)
        {
            _clientFactory = clientFactory;
            _pharmacistService = pharmacistService;
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
                Console.WriteLine($"Pharmacist: FullName={pharmacist.FullName}, Email={pharmacist.Email}, Address={pharmacist.Address}");
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
        public async Task<IActionResult> Login([FromBody] LoginRequest loginData)
        {
            Console.WriteLine(loginData);
            if (loginData == null || string.IsNullOrWhiteSpace(loginData.Email) || string.IsNullOrWhiteSpace(loginData.Password))
                return BadRequest("Email and Password are required.");

            try
            {
                var pharmacist = await _pharmacistService.GetByEmailAsync(loginData.Email);
                Console.WriteLine(pharmacist);

                if (pharmacist == null)
                {
                    return Unauthorized(new { status = "NotFound", message = "No account found" });
                }
                else if (!BCrypt.Net.BCrypt.Verify(loginData.Password, pharmacist.Password))
                {
                    return Unauthorized(new { status = "Invalid", message = "Invalid password" });
                }
                else
                {
                    var jwtService = new JwtService(HttpContext.RequestServices.GetRequiredService<IConfiguration>());
                    var token = jwtService.GeneratePharmacistToken(pharmacist);

                    return Ok(new
                    {
                        status = "success",
                        message = "Login successful.",
                        token
                    });
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Login error: " + ex);
                return StatusCode(500, new { status = "error", message = "Internal server error. Please try again later." });
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
