using Microsoft.AspNetCore.Mvc;
using Backend.Data;
using Backend.Models;
using Backend.Services;
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
    }
}
