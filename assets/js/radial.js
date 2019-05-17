// // sample circle bar
//
//
// var margin = {top: 10, right: 10, bottom: 10, left: 10},
//     width = 460 - margin.left - margin.right,
//     height = 460 - margin.top - margin.bottom,
//     innerRadius = 80,
//     outerRadius = Math.min(width, height) / 2;   // the outerRadius goes from the middle of the SVG area to the border
//
// // append the svg object to the body of the page
// var svg = d3.select("#scatter")
//   .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform", "translate(" + width / 2 + "," + ( height/2+100 )+ ")"); // Add 100 on Y translation, cause upper bars are longer
//
//
// d3.csv("assets/data/mismanagement_countries.csv").then(data => {
//     data.forEach(d => {
//       d.waste_generation_rate_kg_per_person3 =+ d.waste_generation_rate_kg_per_person3;
//       console.log(d);
//     });
//
//
//   // X scale
//   var x = d3.scaleBand()
//       .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
//       .align(0)                  // This does nothing ?
//       .domain(data.map(function(d) { return d.country; }) ); // The domain of the X axis is the list of states.
//
//   // Y scale
//   var y = d3.scaleRadial()
//       .range([innerRadius, outerRadius])   // Domain will be define later.
//       .domain([0, 10000]); // Domain of Y is from 0 to the max seen in the data
//
//   // Add bars
//   svg.append("g")
//     .selectAll("path")
//     .data(data)
//     .enter()
//     .append("path")
//       // .attr("fill", "#69b3a2")
//       .attr("d", d3.arc()     // imagine your doing a part of a donut plot
//           .innerRadius(innerRadius)
//           .outerRadius(function(d) { return y(d.waste_generation_rate_kg_per_person3); })
//           .startAngle(function(d) { return x(d.country); })
//           .endAngle(function(d) { return x(d.country) + x.bandwidth(); })
//           .padAngle(0.01)
//           .padRadius(innerRadius))
//
// });
//
// //







//
// //
// // // Define SVG area dimensions
// // var svgWidth = window.innerWidth * .6;
// // var svgHeight = window.innerHeight * .8;
// //
// // // Define margins
// // var margin = { top: 100, right: 100, bottom: 200, left: 100 };
// // var width = svgWidth - margin.left - margin.right;
// // var height = svgHeight - margin.top - margin.bottom;
// //
// // // Create an svg and connect it to html element
// // var svg = d3.select("#scatter")
// //   .append("svg")
// //   .attr("width", svgWidth)
// //   .attr("height", svgHeight);
//
//
//
//
//

var width = 975
var height = 975
var outerRadius = Math.min(width, height) / 2
var innerRadius = 180



var chart = {
  var svg = d3.select("#scatter")
      .attr("viewBox", `${-width / 2} ${-height / 2} ${width} ${height}`)
      .style("width", "100%")
      .style("height", "auto")
      .style("font", "10px sans-serif");

  svg.append("g")
    .selectAll("g")
    // .data(d3.stack().keys(data.columns.slice(1))(data))
    .data(data)
    .enter().append("g")
      .attr("fill", d => z(d.waste_generation_rate_kg_per_person3))
    .selectAll("path")
    .data(d => d)
    .enter().append("path")
      .attr("d", arc);

  svg.append("g")
      .call(xAxis);

  svg.append("g")
      .call(yAxis);

  svg.append("g")
      .call(legend);

  return svg.node();
}


var data = d3.csv("assets/data/mismanagement_countries.csv", (d, _, columns) => {
  let total = 0;
  for (let i = 1; i < columns.length; ++i) total += d[columns[i]] = +d[columns[i]];
  d.waste_generation_rate_kg_per_person3 =+ d.waste_generation_rate_kg_per_person3;
  d.percentage_plastic_in_waste_stream4 =+ d.percentage_plastic_in_waste_stream4;
  return d;
})

// d3.csv("assets/data/mismanagement_countries.csv").then(data => {
//   data.forEach(d => {
//     d.waste_generation_rate_kg_per_person3 =+ d.waste_generation_rate_kg_per_person3;
//     d.percentage_plastic_in_waste_stream4 =+ d.percentage_plastic_in_waste_stream4;
//
//   });



// arc = ƒ()

arc = d3.arc()
    .innerRadius(d => y(d[0]))
    .outerRadius(d => y(d[1]))
    .startAngle(d => x(d.country))
    .endAngle(d => x(d.country) + x.bandwidth())
    .padAngle(0.01)
    .padRadius(innerRadius)

// x = ƒ(i)

x = d3.scaleBand()
    .domain(data.map(d => d.country))
    .range([0, 2 * Math.PI])
    .align(0)


// y = ƒ(d)

y = {
  // This scale maintains area proportionality of radial bars!
  var y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.waste_generation_rate_kg_per_person3)])
      .range([innerRadius * innerRadius, outerRadius * outerRadius]);
  return Object.assign(d => Math.sqrt(y(d)), y);
}



// z = ƒ(i)

z = d3.scaleOrdinal()
    .domain(data.columns.slice(1))
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"])


// xAxis = ƒ(g)

xAxis = g => g
    .attr("text-anchor", "middle")
    .call(g => g.selectAll("g")
      .data(data)
      .enter().append("g")
        .attr("transform", d => `
          rotate(${((x(d.country) + x.bandwidth() / 2) * 180 / Math.PI - 90)})
          translate(${innerRadius},0)
        `)
        .call(g => g.append("line")
            .attr("x2", -5)
            .attr("stroke", "#000"))
        .call(g => g.append("text")
            .attr("transform", d => (x(d.country) + x.bandwidth() / 2 + Math.PI / 2) % (2 * Math.PI) < Math.PI
                ? "rotate(90)translate(0,16)"
                : "rotate(-90)translate(0,-9)")
            .text(d => d.country)))


// yAxis = ƒ(g)

yAxis = g => g
    .attr("text-anchor", "middle")
    .call(g => g.append("text")
        .attr("y", d => -y(y.ticks(5).pop()))
        .attr("dy", "-1em")
        .text("Sample factor"))
    .call(g => g.selectAll("g")
      .data(y.ticks(5).slice(1))
      .enter().append("g")
        .attr("fill", "none")
        .call(g => g.append("circle")
            .attr("stroke", "#000")
            .attr("stroke-opacity", 0.5)
            .attr("r", y))
        .call(g => g.append("text")
            .attr("y", d => -y(d))
            .attr("dy", "0.35em")
            .attr("stroke", "#fff")
            .attr("stroke-width", 5)
            .text(y.tickFormat(5, "s"))
         .clone(true)
            .attr("fill", "#000")
            .attr("stroke", "none")))



d3 = require("d3@5")
