using System.ComponentModel.DataAnnotations;

namespace EFAPI.Models.DTO
{
    public class UserLoginDTO
    {
        [Required]
        public String Email { get; set; }

        [Required]
        public string Password { get; set; }

     
    }
}
