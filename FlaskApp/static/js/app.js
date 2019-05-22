var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 80,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append an SVG group
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Initial Params
var chosenXAxis = "plastic_waste_generation_kg_day7";

// function used for updating x-scale var upon click on axis label
function xScale(plasticData, chosenXAxis) {
  // create scales
  var xLinearScale = d3.scaleLinear()
    .domain([d3.min(plasticData, d => d[chosenXAxis]) * 0.8,
      d3.max(plasticData, d => d[chosenXAxis]) * 1.2
    ])
    .range([0, width]);

  return xLinearScale;

}

// function used for updating xAxis var upon click on axis label
function renderAxes(newXScale, xAxis) {
  var bottomAxis = d3.axisBottom(newXScale);

  xAxis.transition()
    .duration(1000)
    .call(bottomAxis);

  return xAxis;
}

// function used for updating circles group with a transition to
// new circles
function renderCircles(circlesGroup, newXScale, chosenXaxis) {

  circlesGroup.transition()
    .duration(1000)
    .attr("x", d => newXScale(d[chosenXAxis]));

  return circlesGroup;
}

// function used for updating circles group with new tooltip
function updateToolTip(chosenXAxis, circlesGroup) {

  if (chosenXAxis === "plastic_waste_generation_kg_day7") {
    var label = "Plastic Waste Generation Per Day (kg):";
  }
//   else {
//     var label = "# of Albums:";
//   }

  var toolTip = d3.tip()
    .attr("class", "tooltip")
    .offset([80, -60])
    .html(function(d) {
      return (`${d.country}<br>${label} ${d[chosenXAxis]}`);
    });

  circlesGroup.call(toolTip);

  circlesGroup.on("mouseover", function(dataTip) {
    toolTip.show(dataTip);
  })
    // onmouseout event
    .on("mouseout", function(dataTip, index) {
      toolTip.hide(dataTip);
    });

  return circlesGroup;
}
// Read CSV
d3.csv("assets/data/data.csv", function(err, data) {
    console.log(data);
    // if (err) throw err;
    // parse data
    data.forEach(function(pollutionData) {
      pollutionData.plastic_waste_generation_kg_day7 = +pollutionData.plastic_waste_generation_kg_day7;
      pollutionData.mismanaged_plastic_waste_2010_tonnes7 = +pollutionData.mismanaged_plastic_waste_2010_tonnes7;
      pollutionData.waste_generation_rate_kg_per_person3 = +pollutionData.waste_generation_rate_kg_per_person3;
    });

    // xLinearScale function above csv import
    var xLinearScale = xScale(data, chosenXAxis);

    // Create y scale function
    var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.mismanaged_plastic_waste_2010_tonnes7)])
        .range([height, 0]);

    // Create initial axis functions
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // append x axis
    var xAxis = chartGroup.append("g")
        .classed("x-axis", true)
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);

    // append y axis
    chartGroup.append("g")
        .call(leftAxis);

    // append initial circles
    var circlesGroup = chartGroup.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", d => xLinearScale(d[chosenXAxis]))
        .attr("y", d => yLinearScale(d.mismanaged_plastic_waste_2010_tonnes7))
        .attr("width", xScale.bandwidth())
        .attr("height", d => height - yScale(d))
        .attr("fill", "yellowgreen")
        .attr("opacity", ".5");

    // Create group for  2 x- axis labels
    var labelsGroup = chartGroup.append("g")
        .attr("transform", `translate(${width / 2}, ${height + 20})`);

    var plasticDayLengthLabel = labelsGroup.append("text")
        .attr("x", 0)
        .attr("y", 20)
        .attr("value", "plastic_waste_generation_kg_day7") // value to grab for event listener
        .classed("active", true)
        .text("Average Daily Plastic Waste Generation Per Country (kg)");

    var personWasteLabel = labelsGroup.append("text")
        .attr("x", 0)
        .attr("y", 40)
        .attr("value", "waste_generation_rate_kg_per_person3") // value to grab for event listener
        .classed("inactive", true)
        .text("Average Waste Generation Per Person Per Country (kg)");

    // append y axis
    chartGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (height))
        .attr("dy", "1em")
        .classed("axis-text", true)
        .text("Mismanaged Plastic Waste 2010 in Tonnes");

    // updateToolTip function above csv import
    var circlesGroup = updateToolTip(chosenXAxis, circlesGroup);

    // x axis labels event listener
    labelsGroup.selectAll("text")
        .on("click", function() {
        // get value of selection
        var value = d3.select(this).attr("value");
        if (value !== chosenXAxis) {

            // replaces chosenXAxis with value
            chosenXAxis = value;

            // console.log(chosenXAxis)

            // functions here found above csv import
            // updates x scale for new data
            xLinearScale = xScale(data, chosenXAxis);

            // updates x axis with transition
            xAxis = renderAxes(xLinearScale, xAxis);

            // updates circles with new x values
            circlesGroup = renderCircles(circlesGroup, xLinearScale, chosenXAxis);

            // updates tooltips with new info
            circlesGroup = updateToolTip(chosenXAxis, circlesGroup);

            // changes classes to change bold text
            if (chosenXAxis === "waste_generation_rate_kg_per_person3") {
            personWasteLabel
                .classed("active", true)
                .classed("inactive", false);
            plasticDayLengthLabel
                .classed("active", false)
                .classed("inactive", true);
            }
            else {
            personWasteLabel
                .classed("active", false)
                .classed("inactive", true);
            plasticDayLengthLabel
                .classed("active", true)
                .classed("inactive", false);
            }
        }
        });
    });
