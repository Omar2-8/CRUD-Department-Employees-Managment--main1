using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EFAPI.Migrations
{
    public partial class deleteDir : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Emoloyees_DepartmentEmployeeId",
                table: "Emoloyees");

            migrationBuilder.CreateIndex(
                name: "IX_Emoloyees_DepartmentEmployeeId",
                table: "Emoloyees",
                column: "DepartmentEmployeeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Emoloyees_DepartmentEmployeeId",
                table: "Emoloyees");

            migrationBuilder.CreateIndex(
                name: "IX_Emoloyees_DepartmentEmployeeId",
                table: "Emoloyees",
                column: "DepartmentEmployeeId",
                unique: true);
        }
    }
}
