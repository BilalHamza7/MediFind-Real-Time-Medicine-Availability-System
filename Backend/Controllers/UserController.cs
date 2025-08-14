using Backend.Data;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
namespace Backend.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController : ControllerBase
    {
        private SupabaseClientFactory _clientFactory;
        
        public UserController(SupabaseClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        [HttpPost("register")]
        public async Task<IActionResult> SaveClientAsync([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest("User data is required.");
            }
            try
            {
                var userService = new UserServices(_clientFactory);
                await userService.SaveClientAsync(user);
                return Ok("User saved successfully.");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Registration failed: " + ex);  // full exception
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] User loginData)
        {
            if (loginData == null || string.IsNullOrWhiteSpace(loginData.email) || string.IsNullOrWhiteSpace(loginData.password))
                return BadRequest("Email and Password are required.");

            try
            {
                var userService = new UserServices(_clientFactory);
                var users = await userService.GetAllAsync();
                var user = users.FirstOrDefault(u => u.email == loginData.email);

                if (user == null || !BCrypt.Net.BCrypt.Verify(loginData.password, user.password))
                    return Unauthorized("Invalid email or password.");
                
                var jwtService = new JwtService(HttpContext.RequestServices.GetRequiredService<IConfiguration>());
                var token = jwtService.GenerateToken(user);

                return Ok(new { token });
            }
            catch (Exception ex)
            {
                Console.WriteLine("Login error: " + ex);
                return StatusCode(500, "Internal server error");
            }
        }

        [Authorize]
        [HttpGet("me")]
        public async Task<IActionResult> GetMyProfile()
        {
            var email = User.FindFirst("email")?.Value;
            if (string.IsNullOrEmpty(email)) return Unauthorized();

            var userService = new UserServices(_clientFactory);
            var user = await userService.GetByEmailAsync(email);

            if (user == null) return NotFound();
            return Ok(user);
        }

    }
}
