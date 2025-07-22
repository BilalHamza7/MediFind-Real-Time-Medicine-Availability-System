using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

[Table("Users")]
public class User : BaseModel
{
    [PrimaryKey("id", false)]
    public int Id { get; set; }

    [Column("fullname")]
    public string fullname { get; set; } = string.Empty;

    [Column("email")]
    public string email { get; set; } = string.Empty;

    [Column("age")]
    public int? age { get; set; }

    [Column("gender")]
    public string gender { get; set; } = string.Empty;

    [Column("password")]
    public string password { get; set; } = string.Empty;
}
