using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    [Table("Users")] 
    public class User : BaseModel
    {
        
        [PrimaryKey("id", false)]
        public int Id { get; set; }

        [Column("fullname")]
        public string fullname { get; set; }

        [Column("email")]
        public string email { get; set; }

        [Column("age")]
        public int? age { get; set; }

        [Column("gender")]
        public string gender { get; set; }

        [Column("password")]
        public string password { get; set; }
    }
}
