using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Supabase;

namespace Backend.Data
{
    public class SupabaseClientFactory
    {
        private readonly IConfiguration _configuration;
        private readonly Lazy<Task<Client>> _lazyClient;

        public SupabaseClientFactory(IConfiguration configuration)
        {
            _configuration = configuration;

            _lazyClient = new Lazy<Task<Client>>(async () =>
            {
                var url = _configuration["Supabase:Url"];
                var key = _configuration["Supabase:ApiKey"];

                var options = new SupabaseOptions
                {
                    AutoConnectRealtime = true
                };

                var client = new Client(url, key, options);
                await client.InitializeAsync();
                return client;
            });
        }

        public async Task<Client> GetClientAsync() => await _lazyClient.Value;
    }
}
