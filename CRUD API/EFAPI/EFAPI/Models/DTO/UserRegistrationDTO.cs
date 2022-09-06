using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EFAPI.Models.DTO
{
    public class UserRegistrationDTO
    {
        [Required]
        public String UserName { get; set; }
        
        [Required]
        [EmailAddress]
        public String Email { get; set; }
        
        [Required]
        
        public int PhoneNumber { get; set; }
        
        [Required]
        [DataType(DataType.Password)]
        public String Password { get; set; }
        
        [Required]
        [DataType(DataType.Password)]
        [Compare("Password",ErrorMessage="Password and Confirm Password do not match")]
        public String ConfirmPassword { get; set; }
    }
}
