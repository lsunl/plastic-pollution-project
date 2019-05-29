// EPA WASTE TREATMENT VISUALIZATION
var epa_url = "/api/epa-waste";


d3.json(epa_url).then(function(data) {
  console.log(data);
});

// TRACEPAPER
// var tracePaper = {
//     x: [epa.map(item => item.year), epa.map(item => item.waste_type)],
//     y: [epa.map(item => item.paper_paperboard), epa.map(item => item.glass),  epa.map(item => item.metals), epa.map(item => item.wood),epa.map(item => item.plastic)],
//     text: [epa.map(item => item.paper_paperboard), epa.map(item => item.glass),  epa.map(item => item.metals), epa.map(item => item.wood),epa.map(item => item.plastic)],
//     name: "Paper",
//     type: "bar",
//     marker: {
//       // dark purple
//       color: 'rgb(70, 165, 206)'
//     }
//   };
//   // TRACEGLASS
// var traceGlass = {
//     x: [epa.map(item => item.year), epa.map(item => item.waste_type)],
//     y: [epa.map(item => item.paper_paperboard), epa.map(item => item.glass),  epa.map(item => item.metals), epa.map(item => item.wood),epa.map(item => item.plastic)],
//     text: [epa.map(item => item.paper_paperboard), epa.map(item => item.glass),  epa.map(item => item.metals), epa.map(item => item.wood),epa.map(item => item.plastic)],
//     name: "Glass",
//     type: "bar",
//     marker: {
//       // bright green
//       color: 'rgb(0, 255, 144)'
//     }
// };
// // TRACEMETAL
// var traceMetal = {
//     x: [epa.map(item => item.year), epa.map(item => item.waste_type)],
//     y: [epa.map(item => item.paper_paperboard), epa.map(item => item.glass),  epa.map(item => item.metals), epa.map(item => item.wood),epa.map(item => item.plastic)],
//     text: [epa.map(item => item.paper_paperboard), epa.map(item => item.glass),  epa.map(item => item.metals), epa.map(item => item.wood),epa.map(item => item.plastic)],
//     name: "Metal",
//     type: "bar",
//     marker: {
//       // light green yellow
//       color: 'rgb(210, 255, 114)'
//     }
// };
//   // TRACEWOOD
//   var traceWood = {
//     // x: [epa.map(item => item.year), epa.map(item => item.waste_type)],
//     x: epa.filter(d => +d.year === 2000),
//     y: [epa.map(item => item.paper_paperboard), epa.map(item => item.glass), epa.map(item => item.metals), epa.map(item => item.wood),epa.map(item => item.plastic)],
//     text: [epa.map(item => item.paper_paperboard), epa.map(item => item.glass), epa.map(item => item.metals), epa.map(item => item.wood),epa.map(item => item.plastic)],
//     name: "Wood",
//     type: "bar",
//     marker: {
//       // purple
//       color: 'rgb(145, 17, 83)'
//       // in case we like blue instead > rgb(15, 71, 255)
//     }
// };
//   // TRACEPLASTIC
//   var tracePlastic = {
//     x: [epa.map(item => item.year)],

//     // x: [epa.map(item => item.year), epa.map(item => item.waste_type)],
//     y: [epa.map(item => item.paper_paperboard), epa.map(item => item.glass),  epa.map(item => item.metals), epa.map(item => item.wood),epa.map(item => item.plastic)],
//     text: [epa.map(item => item.paper_paperboard), epa.map(item => item.glass),  epa.map(item => item.metals), epa.map(item => item.wood),epa.map(item => item.plastic)],
//     name: "Plastic",
//     type: "bar",
//     marker: {
//       // neon orange
//       color: 'rgb(255, 80, 0)'
//     }
//   };
  
//   // The data array consists of both traces
//   var tada = [tracePaper, traceGlass, traceMetal, traceWood, tracePlastic];
  
//   var layout = {
//     barmode: 'stack',
//     paper_bgcolor: '#000000',
//     plot_bgcolor: '#000000',
//     title: {
//       text:'United States Material Waste Treatments Per Year',
//       font: {
//         family: 'Courier New, monospace',
//         size: 22,
//         color: '#7f7f7f'
//       },
//       xref: 'paper',
//       x: 0.05,
//     },
//     xaxis: {
//       title: {
//         text: 'Material Types & Treatments Per Year ',
//         font: {
//           family: 'Courier New, monospace',
//           size: 18,
//           color: '#7f7f7f'
//         }
//       },
//     },
//     yaxis: {
//       title: {
//         text: 'Materials Generation in Tonnes',
//         font: {
//           family: 'Courier New, monospace',
//           size: 18,
//           color: '#7f7f7f'
//         }
//       }
//     }
//   };

//   Plotly.newPlot('plot', tada, layout);