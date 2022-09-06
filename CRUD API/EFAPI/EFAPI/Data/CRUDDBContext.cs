using EFAPI.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace EFAPI.Data
{
    public class CRUDDBContext : IdentityDbContext
    {
        public CRUDDBContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Employee> Emoloyees { get; set; }
        public DbSet<Department> Departments { get; set; }

       
    }
}
