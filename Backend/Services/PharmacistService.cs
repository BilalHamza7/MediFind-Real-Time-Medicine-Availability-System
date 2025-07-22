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

        public async Task<List<PharmacistModel>> GetAllAsync()
        {
            var client = await _clientFactory.GetClientAsync();
            var result = await client.From<PharmacistModel>().Get();
            return result.Models;
        }

        public async Task SaveClientAsync(PharmacistModel pharmacist)
        {
            // Hash the password before saving to the database
            pharmacist.Password = BCrypt.Net.BCrypt.HashPassword(pharmacist.Password);

            var client = await _clientFactory.GetClientAsync();
            var result = await client.From<PharmacistModel>().Insert(pharmacist);

            if (result.Models.Count == 0)
            {
                throw new Exception("Failed To Create Pharmacist Account");
            }
        }
    }
}
