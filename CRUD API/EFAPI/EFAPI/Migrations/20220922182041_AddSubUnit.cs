using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EFAPI.Migrations
{
    public partial class AddSubUnit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Emoloyees_DepartmentEmployeeId",
                table: "Emoloyees");

            migrationBuilder.AddColumn<int>(
                name: "SubUnitId",
                table: "Emoloyees",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "SubUnit",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DepartmentSubUnitId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubUnit", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SubUnit_Departments_DepartmentSubUnitId",
                        column: x => x.DepartmentSubUnitId,
                        principalTable: "Departments",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Emoloyees_DepartmentEmployeeId",
                table: "Emoloyees",
                column: "DepartmentEmployeeId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Emoloyees_SubUnitId",
                table: "Emoloyees",
                column: "SubUnitId");

            migrationBuilder.CreateIndex(
                name: "IX_SubUnit_DepartmentSubUnitId",
                table: "SubUnit",
                column: "DepartmentSubUnitId");

            migrationBuilder.AddForeignKey(
                name: "FK_Emoloyees_SubUnit_SubUnitId",
                table: "Emoloyees",
                column: "SubUnitId",
                principalTable: "SubUnit",
                principalColumn: "Id");
            //, onDelete: ReferentialAction.Cascade
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Emoloyees_SubUnit_SubUnitId",
                table: "Emoloyees");

            migrationBuilder.DropTable(
                name: "SubUnit");

            migrationBuilder.DropIndex(
                name: "IX_Emoloyees_DepartmentEmployeeId",
                table: "Emoloyees");

            migrationBuilder.DropIndex(
                name: "IX_Emoloyees_SubUnitId",
                table: "Emoloyees");

            migrationBuilder.DropColumn(
                name: "SubUnitId",
                table: "Emoloyees");

            migrationBuilder.CreateIndex(
                name: "IX_Emoloyees_DepartmentEmployeeId",
                table: "Emoloyees",
                column: "DepartmentEmployeeId");
        }
    }
}
