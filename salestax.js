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
  var report = {};

  //loop thru sales and sum up
  function forLoop(salesD){
    var summ = 0;
    for (var j = 0; j < salesD.sales.length; j++){
        summ += salesD.sales[j];
    }
    return summ;
  }

  //create report's keys and add values
  function totalAdd(reportT, salesD, taxR, check){
    if (check){
      reportT.totalSales = forLoop(salesD);
      reportT.totalTaxes = forLoop(salesD) * taxR;
    } else {
      reportT.totalSales += forLoop(salesD);
      reportT.totalTaxes += forLoop(salesD) * taxR;
    }

  }

  //iterate thru salesData
  for (var i = 0; i < salesData.length; i++){
    //check for duplicate company name
    if (!report[salesData[i].name]){
      report[salesData[i].name] = {};
      totalAdd(report[salesData[i].name], salesData[i], taxRates[salesData[i].province], true);
    }
    else {
      totalAdd(report[salesData[i].name], salesData[i], taxRates[salesData[i].province], false);
    }
  }
  return report;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);

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



