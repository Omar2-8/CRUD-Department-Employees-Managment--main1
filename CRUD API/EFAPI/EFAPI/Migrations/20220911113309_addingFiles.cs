using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EFAPI.Migrations
{
    public partial class addingFiles : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "employeeCV",
                table: "Emoloyees",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "employeePhoto",
                table: "Emoloyees",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "employeeCV",
                table: "Emoloyees");

            migrationBuilder.DropColumn(
                name: "employeePhoto",
                table: "Emoloyees");
        }
    }
}
