var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};
var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var report = {};
  var sumSales = 0;
  //iterate thru salesData
  for (var i = 0; i < salesData.length; i++){
    //check for duplicate company name
    if (!report[salesData[i].name]){
      report[salesData[i].name] = {};
      //loop thru sales and sum
      for (var j = 0; j < salesData[i].sales.length; j++){
        sumSales += salesData[i].sales[j];
      }
      report[salesData[i].name].totalSales = sumSales;
      var province = salesData[i].province;
      report[salesData[i].name].totalTaxes = sumSales * taxRates[province];
      sumSales = 0;
    }
    else {
      for (var j = 0; j < salesData[i].sales.length; j++){
        sumSales += salesData[i].sales[j];
      }
      report[salesData[i].name].totalSales += sumSales;
      var province = salesData[i].province;
      report[salesData[i].name].totalTaxes += sumSales * taxRates[province];
      sumSales = 0;
    }
  }
  console.log(report);
}
var results = calculateSalesTax(companySalesData, salesTaxRates);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/



