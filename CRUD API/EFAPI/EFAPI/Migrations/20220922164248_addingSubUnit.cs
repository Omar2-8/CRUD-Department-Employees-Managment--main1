using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EFAPI.Migrations
{
    public partial class addingSubUnit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.DropIndex(
            //    name: "IX_Emoloyees_DepartmentEmployeeId",
            //    table: "Emoloyees");

            //migrationBuilder.AddColumn<int>(
            //    name: "SubUnitId",
            //    table: "Emoloyees",
            //    type: "int",
            //    nullable: false,
            //    defaultValue: 0);

            //migrationBuilder.CreateTable(
            //    name: "SubUnits",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        DepartmentSubUnitId = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_SubUnits", x => x.Id);
            //        table.ForeignKey(
            //            name: "FK_SubUnits_Departments_DepartmentSubUnitId",
            //            column: x => x.DepartmentSubUnitId,
            //            principalTable: "Departments",
            //            principalColumn: "ID",
            //            onDelete: ReferentialAction.Cascade);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Tasks",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Action = table.Column<string>(type: "nvarchar(max)", nullable: false),
            //        Comments = table.Column<string>(type: "nvarchar(max)", nullable: false),
            //        Status = table.Column<int>(type: "int", nullable: false),
            //        TaskEmployeeId = table.Column<int>(type: "int", nullable: false),
            //        EmployeeID = table.Column<int>(type: "int", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Tasks", x => x.Id);
            //        table.ForeignKey(
            //            name: "FK_Tasks_Emoloyees_EmployeeID",
            //            column: x => x.EmployeeID,
            //            principalTable: "Emoloyees",
            //            principalColumn: "ID");
            //    });

            //migrationBuilder.CreateIndex(
            //    name: "IX_Emoloyees_DepartmentEmployeeId",
            //    table: "Emoloyees",
            //    column: "DepartmentEmployeeId",
            //    unique: true);

            //migrationBuilder.CreateIndex(
            //    name: "IX_Emoloyees_SubUnitId",
            //    table: "Emoloyees",
            //    column: "SubUnitId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_SubUnits_DepartmentSubUnitId",
            //    table: "SubUnits",
            //    column: "DepartmentSubUnitId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Tasks_EmployeeID",
            //    table: "Tasks",
            //    column: "EmployeeID");

            //migrationBuilder.AddForeignKey(
            //    name: "FK_Emoloyees_SubUnits_SubUnitId",
            //    table: "Emoloyees",
            //    column: "SubUnitId",
            //    principalTable: "SubUnits",
            //    principalColumn: "Id",
            //    onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Emoloyees_SubUnits_SubUnitId",
                table: "Emoloyees");

            migrationBuilder.DropTable(
                name: "SubUnits");

            migrationBuilder.DropTable(
                name: "Tasks");

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
