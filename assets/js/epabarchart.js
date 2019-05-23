var data = [
  {
    "year": 1960,
    "paper_paperboard": 29990000,
    "glass": 6720000,
    "metals": 10820000,
    "plastic": 390000,
    "wood": 3030000
  },
  {
    "year": 1970,
    "paper_paperboard": 44310000,
    "glass": 12740000,
    "metals": 13830000,
    "plastic": 2900000,
    "wood": 3720000
  },
  {
    "year": 1980,
    "paper_paperboard": 55160000,
    "glass": 15130000,
    "metals": 15510000,
    "plastic": 6830000,
    "wood": 7010000
  },
  {
    "year": 1990,
    "paper_paperboard": 72730000,
    "glass": 13100000,
    "metals": 16550000,
    "plastic": 17130000,
    "wood": 12210000
  },
  {
    "year": 2000,
    "paper_paperboard": 87740000,
    "glass": 12770000,
    "metals": 18940000,
    "plastic": 25550000,
    "wood": 13570000
  },
  {
    "year": 2005,
    "paper_paperboard": 84840000,
    "glass": 12540000,
    "metals": 20400000,
    "plastic": 29380000,
    "wood": 14790000
  },
  {
    "year": 2010,
    "paper_paperboard": 71310000,
    "glass": 11520000,
    "metals": 22450000,
    "plastic": 31400000,
    "wood": 15710000
  },
  {
    "year": 2011,
    "paper_paperboard": 69950000,
    "glass": 11490000,
    "metals": 22190000,
    "plastic": 32100000,
    "wood": 15780000
  },
  {
    "year": 2012,
    "paper_paperboard": 68620000,
    "glass": 11590000,
    "metals": 22430000,
    "plastic": 32070000,
    "wood": 15820000
  },
  {
    "year": 2013,
    "paper_paperboard": 68550000,
    "glass": 11540000,
    "metals": 23420000,
    "plastic": 32750000,
    "wood": 15770000
  },
  {
    "year": 2014,
    "paper_paperboard": 68610000,
    "glass": 11480000,
    "metals": 23640000,
    "plastic": 33390000,
    "wood": 16120000
  },
  {
    "year": 2015,
    "paper_paperboard": 68050000,
    "glass": 11470000,
    "metals": 24000000,
    "plastic": 34500000,
    "wood": 16300000
  }
];


    var xData = ["paper_paperboard", "glass","metals","plastic","wood"];

    // Define SVG area dimensions
    var svgWidth = window.innerWidth * .6;
    var svgHeight = window.innerHeight * .8;

    // Define margins
    var margin = { top: 100, right: 100, bottom: 200, left: 100 };
    var width = svgWidth - margin.left - margin.right;
    var height = svgHeight - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
            .rangeRoundBands([0, width], .35);

    var y = d3.scale.linear()
            .rangeRound([height, 0]);

    var color = d3.scale.category20();

    var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

    var svg = d3.select("#chart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    var dataIntermediate = xData.map(function (c) {
        return data.map(function (d) {
            return {x: d.year, y: d[c]};
        });
    });

    var dataStackLayout = d3.layout.stack()(dataIntermediate);

    x.domain(dataStackLayout[0].map(function (d) {
        return d.x;
    }));

    y.domain([0,
        d3.max(dataStackLayout[dataStackLayout.length - 1],
                function (d) { return d.y0 + d.y;})
        ])
      .nice();

    var layer = svg.selectAll(".stack")
            .data(dataStackLayout)
            .enter().append("g")
            .attr("class", "stack")
            .style("fill", function (d, i) {
                return color(i);
            });

    layer.selectAll("rect")
            .data(function (d) {
                return d;
            })
            .enter().append("rect")
            .attr("x", function (d) {
                return x(d.x);
            })
            .attr("y", function (d) {
                return y(d.y + d.y0);
            })
            .attr("height", function (d) {
                return y(d.y0) - y(d.y + d.y0);
            })
            .attr("width", x.rangeBand());

    svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
