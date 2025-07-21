using Backend.Data;
using Backend.Models;
namespace Backend.Services
{
    public class UserServices
    {
        private readonly SupabaseClientFactory _clientFactory;
        public UserServices(SupabaseClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }
        public async Task SaveClientAsync(User user)
        {
            // Hash the password before saving to the database
            user.password = BCrypt.Net.BCrypt.HashPassword(user.password);

            var client = await _clientFactory.GetClientAsync();
            var result = await client.From<User>().Insert(user);

            if (result.Models.Count == 0)
            {
                throw new Exception("Failed to save user");
            }
        }
        //Fetches and returns all submited forms from the database
        public async Task<List<User>> GetAllAsync()
        {
            var client = await _clientFactory.GetClientAsync();
            var result = await client.From<User>().Get();
            return result.Models;
        }
    }
}
