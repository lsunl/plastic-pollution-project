// // Generate le data
function wasteDataset() {
  var wasteURL = "https://api.myjson.com/bins/a5ot4";
  d3.json(wasteURL).then(function(waste) {
    var waste = [waste];
  });
}


  var chart = d3.ez.chart.barChartCircular().colors(d3.ez.palette.categorical(1));
  var legend = d3.ez.component.legend().title("Waste Types");
  var title = d3.ez.component.title().mainText("Waste Treatments").subText("of Post-Waste Lifecycle Treatments");

// Create chart base
var myChart = d3.ez()
  .width(750)
  .height(400)
  .chart(chart)
  .legend(legend)
  .title(title)
  .on("customValueMouseOver", function(d, i) {
    d3.select("#message").text(d.year);
  });

// Add to page
function update() {
  var data = wasteDataset();
  d3.select("#chartholder")
    .datum(data)
    .call(myChart);
}

update();
setInterval(update, 2000);