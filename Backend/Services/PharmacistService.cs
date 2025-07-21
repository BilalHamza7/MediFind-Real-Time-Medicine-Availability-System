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
    }
}
