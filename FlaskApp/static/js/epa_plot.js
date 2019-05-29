// EPA WASTE TREATMENT VISUALIZATION
console.log("EPA PLOTS.js");
var epa_url = "/api/epa-waste";


d3.json(epa_url).then(function(epa) {
  console.log(epa);
// x: year & waste type
// y: materials
// text: materials

// TRACEPAPER

var years = ['1960', '1970', '1980', '1990', '2000'];
var wastes = ['paper_paperboard', 'metals', 'plastic', 'wood', 'glass'];
var colorDict = {'paper_paperboard1990': 'rgb(70, 165, 206)',
                }
var traces = [];
var nameDict = {paper_paperboard: 'Paper',
                metals: 'Metal',
                glass: 'Glass',
                plastic: 'Plastic',
                wood: 'Wood'};
years.forEach(function (y) {
    wastes.forEach(function (w) {
        var newTrace = {
            x: epa.filter(d => d.year === y && d.waste_material === w).map(d => d.treatment_type),
            y: epa.filter(d => d.year === y && d.waste_material === w).map(d => +d.tons),
            text: epa.filter(d => d.year === y && d.waste_material === w).map(d => `${d.year}${d.waste_material}`),
            name: nameDict[w],
            xaxis: `x${y}`,
            type: "bar",
            marker: {
              // dark purple
              color: colorDict[`${w}${y}`]
            }
          };
        console.log('----------------');
        console.log(`${w}${y}`);
        console.log(newTrace.xaxis);
        traces.push(newTrace)
    })
}
);
console.log("These are my traces:");
console.log(traces);
// This is the older version of my code when i was using the data.js file

// var tracePaper1990 = {
//     x: epa.filter(d => +d.year === 1990 && d.waste_material === "paper_paperboard").map(d => d.treatment_type),
//     y: epa.filter(d => +d.year === 1990 && d.waste_material === "paper_paperboard").map(d => +d.tons),
//     text: epa.filter(d => +d.treatment_type === "generated"),
//     name: "Paper",
//     xaxis: '1990',
//     type: "bar",
//     marker: {
//       // dark purple
//       color: 'rgb(70, 165, 206)'
//     }
//   };

//   console.log('tracepaper1990');
//   console.log(tracePaper1990.x);
//   console.log(tracePaper1990.y);
//   var tracePaper2000 = {
//     x: epa.filter(d => +d.year === 2000).map(d => d.treatment_type),
//     y: epa.filter(d => +d.waste_material === "paper_paperboard").map(d => +d.tons),
//     text: epa.filter(d => +d.treatment_type === "generated"),
//     name: "Paper",
//     xaxis: '1990',
//     type: "bar",
//     marker: {
//       // dark purple
//       color: 'rgb(70, 165, 206)'
//     }
//   };
  // TRACEGLASS
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
//   var tada = [traces];

  var layout = {
    barmode: 'stack',
    paper_bgcolor: '#000000',
    plot_bgcolor: '#000000',
    title: {
      text:'United States Material Waste Treatments Per Year',
      font: {
        family: 'Courier New, monospace',
        size: 22,
        color: '#7f7f7f'
      },
      xref: 'paper',
      x: 0.05,
    },
    xaxis: {
        domain: [0, 0.2],
        anchor: 'x1960', 
        title: '1960'
      },
    xaxis2: {
        domain: [0.2, 0.4],
        anchor: 'x1970', title: '1970'
      },
      xaxis3: {
        domain: [0.4, 0.6],
        anchor: 'x1980', title: '1980'
      },
      xaxis4: {
        domain: [0.6, 0.8],
        anchor: 'x1990', title: '1990'
      },
      xaxis5: {
        domain: [0.8, 1.0],
        anchor: 'x2000', title: '2000'
      },
    yaxis: {
      title: {
        text: 'Materials Generation in Tonnes',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      }
    }
  };

  console.log("Traces now...");
  console.log(traces);
//   traces.forEach((t) => {
//       Plotly.newPlot('plot', t, layout);
//   }
//   );
  Plotly.newPlot('plot', traces, layout);
});