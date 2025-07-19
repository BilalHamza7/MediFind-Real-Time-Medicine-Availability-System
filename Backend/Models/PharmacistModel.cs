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
    }
}