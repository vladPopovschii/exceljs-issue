const exceljs = require("exceljs");

const workbook = new exceljs.Workbook();

workbook.xlsx.readFile("excelfile.xlsx").then(async (wb) => {
  const model = wb.getWorksheet(1).model;

  for (let index = 0; index < 3; index++) {
    const worksheet = wb.addWorksheet();

    // Making copy
    worksheet.model = {
      ...model,
    };

    worksheet.name = `test${index}`
  }

  await workbook.xlsx.writeFile("newfile.xlsx");
});
