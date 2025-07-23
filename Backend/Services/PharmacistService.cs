using Backend.Data;
using Backend.Models;

namespace Backend.Services
{
    public class PharmacistService
    {
        private readonly SupabaseClientFactory _clientFactory;

        public PharmacistService(SupabaseClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        public async Task<List<Pharmacist>> GetAllAsync()
        {
            var client = await _clientFactory.GetClientAsync();
            var result = await client.From<Pharmacist>().Get();
            return result.Models;
        }

        public async Task SaveClientAsync(Pharmacist pharmacist)
        {
            // Hash the password before saving to the database
            pharmacist.Password = BCrypt.Net.BCrypt.HashPassword(pharmacist.Password);

            var client = await _clientFactory.GetClientAsync();
            var result = await client.From<Pharmacist>().Insert(pharmacist);

            if (result.Models.Count == 0)
            {
                throw new Exception("Failed To Create Pharmacist Account");
            }
        }

        public async Task<Pharmacist?> GetByEmailAsync(string email)
        {
            var client = await _clientFactory.GetClientAsync();
            var result = await client
                .From<Pharmacist>()
                .Where(p => p.Email == email)
                .Single();

            return result;
        }
    }
}
