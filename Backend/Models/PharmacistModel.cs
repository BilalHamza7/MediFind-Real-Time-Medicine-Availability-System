using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

namespace Backend.Models
{
    [Table("pharmacist")] 
    public class PharmacistModel : BaseModel
    {
        [PrimaryKey("id", false)]
        public int Id { get; set; }

        [Column("full_name")]
        public string FullName { get; set; }

        [Column("email")]
        public string Email { get; set; }

        [Column("business_name")]
        public string BusinessName { get; set; }

        [Column("password")]
        public string Password { get; set; }
    }
}