using System;
using System.Threading.Tasks;
using Supabase;

namespace Backend.Services
{
    public class SupabaseClientService
    {
        private readonly Client _client;

        public SupabaseClientService()
        {
            var url = "https://somkmtuxtvhjkbvoivpr.supabase.co";
            var key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvbWttdHV4dHZoamtidm9pdnByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5MjMzNzAsImV4cCI6MjA2ODQ5OTM3MH0.vHs9iGbVivCKc-CcYJNqEB-3xXMcaLBHufAJBeCnYc4";

            var options = new SupabaseOptions
            {
                AutoConnectRealtime = true
            };

            _client = new Client(url, key, options);

            _client.InitializeAsync().Wait();
        }

        public Client GetClient()
        {
            return _client;
        }
    }
}
