
// i could do by || material type |&by| treatement 
// The point of this viz is to connect that even though plastic isnt the largest contributing
// source to the materials we trash, it ends up being the least biodegrabable & leads to to our oceans
// is there data that says plastic is the higest contributor to general pollution????


// is the viz material result in the cumulative time???

// TRACEPLASTIC
var tracePlastic = {
    x: epa.map(item => item.year),
    y: epa.map(item => item.plastic),
    text: epa.map(item => item.waste_type),
    name: "Plastic",
    type: "bar",
    marker: {
      color: 'rgb(255, 89, 0)'
      // neon orange
    }
  };
  // TRACEPAPER
var tracePaper = {
    x: epa.map(item => item.year),
    y: epa.map(item => item.paper_paperboard),
    text: epa.map(item => item.waste_type),
    name: "Paper",
    type: "bar",
    marker: {
      color: 'rgb(219, 255, 15)'
      // slime green
    }
  };
  // TRACEGLASS
var traceGlass = {
    x: epa.map(item => item.year),
    y: epa.map(item => item.glass),
    text: epa.map(item => item.waste_type),
    name: "Glass",
    type: "bar",
    marker: {
      color: 'rgb(0, 237, 154)'
      // teal
    }
};
// TRACEMETAL
var traceMetal = {
    x: epa.map(item => item.year),
    y: epa.map(item => item.metals),
    text: epa.map(item => item.waste_type),
    name: "Metal",
    type: "bar",
    marker: {
      color: 'rgb(255, 15, 93)'
      // hot pink
    }
};
  // TRACEWOOD
  var traceWood = {
    x: epa.map(item => item.year),
    y: epa.map(item => item.wood),
    text: epa.map(item => item.waste_type),
    name: "Wood",
    type: "bar",
    marker: {
      color: 'rgb(15, 71, 255)'
      // blue
    }
  };
  
  // The data array consists of both traces
  var tada = [tracePlastic, tracePaper, traceGlass, traceMetal, traceWood];
  
  var layout = {
    title: {
      text:'United States Material Waste Treatments By Years',
      font: {
        family: 'Courier New, monospace',
        size: 24
      },
      xref: 'paper',
      x: 0.05,
    },
    xaxis: {
      title: {
        text: 'Materials Generated & Treatments Per Year ',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      },
    },
    yaxis: {
      title: {
        text: 'Materials in Tonnes',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      }
    }
  };

  // Note that we omitted the layout object this time
  // This will use default parameters for the layout
  Plotly.newPlot("plot", tada, layout);