# plastic-pollution-project

## Project Goals:

Illustrate how frequently consumers use plastic
Identify the toxic chemicals used to create plastic products
Look at plastic production, distribution, waste, recycled waste, mismanaged waste
Visualize the plastic industry’s fiscal value, manufacturing locations, and distribution 
Visualize countries that demand high frequency of single-use plastic products
Visualize where plastic waste accumulates by size and weight

## Value:
Gain insight on the movement of plastic to bring awareness on the issue

## Desired Vizes:
• How Much Plastic Constitutes to Overall Waste Per Country? – basic sunburst chart<br>
https://plot.ly/javascript/horizontal-bar-charts/ <br>

• Imports & Exports of Plastics – colored horizontal bar chart<br>
https://plot.ly/javascript/horizontal-bar-charts/ <br>

• What products make up "plastic waste" – bubble chart 

• 

## Questions we want to answer: 
Which countries make, buy, and import plastic?
Where is new plastic sold to?
Which products are made with plastic?
How much does global waste contribute to climate change?

How are plastics being used?
What is the lifespan of plastic?
Where does plastic waste go?

Which countries buy the most plastic?
How much of it gets recycled?
How is plastic waste disrupting the environment?


## Reference for Data on Plastic Waste

**Economic Status** <br>
low income country (LIC)<br>
lower middle income country (LMC)<br>
upper middle income country (UMC)<br>
high income country (HIC))<br>

**Coastal Population**

**Waste Generation – All Waste**
Solid waste generation rates estimate the amount of waste created by residences or businesses over a certain amount of time (day, year, etc.). Waste generation includes all materials discarded, whether or not they are later recycled or disposed in a landfill.

**Plastic in Waste Stream**
Plastic portion of entire waste stream. A waste stream is the complete flow of waste from domestic or industrial areas through to final disposal

**Inadequately Managed Waste – All Waste**
Inadequately disposed waste is not formally managed and includes disposal in dumps or open, uncontrolled landfills, where it is not fully contained. Inadequately managed waste has high risk of polluting rivers and oceans. 

**Waste management (or waste disposal)** are the activities and actions required to manage waste from its inception to its final disposal.[1]This includes the collection, transport, treatment and disposal of waste, together with monitoring and regulation of the waste management process.  This does not include 'littered' plastic waste, which is approximately 2% of total waste (including high-income
countries).

**Littered Waste – All Waste**
Litter consists of waste products that have been disposed of improperly, without consent, at an undesirable location

**Plastic Waste Generation – Only Plastic**
Same as above but only plastic

**Inadequately Managed Plastic Waste – Only Plastic**
Same as above but only plastic 

**Plastic waste littered – Only Plastic**
Same as above but only plastic 

**Mismanaged Plastic Waste 2010 – Only Plastic**
Mismanaged waste is material which is at high risk of entering the ocean via wind or tidal transport, or carried to coastlines from inland waterways. Mismanaged waste is the sum of material which is either littered or inadequately disposed. Inadequately disposed and littered waste are different, and are defined in the sections below.

**Mismanaged Plastic Waste in 2025 – Only Plastic** 
Mismanaged waste is material which is at high risk of entering the ocean via wind or tidal transport, or carried to coastlines from inland waterways. Mismanaged waste is the sum of material which is either littered or inadequately disposed. Inadequately disposed and littered waste are different, and are defined in the sections below.


## Inspiration:
https://ourworldindata.org/plastic-pollution#empirical-view
Pretty in depth overview of plastic pollution at a global level
https://www.dw.com/en/six-data-visualizations-that-explain-the-plastic-problem/a-36861883
https://www.inc.com/magazine/20060701/coolest-startup.html
http://plastic-pollution.org/
https://onlinelibrary.wiley.com/doi/book/10.1002/0471721557
http://ec.europa.eu/environment/consultations/pdf/marine_litter.pdf

## Datasets:
PRIMARY RESOURCE
www.sciencemag.org/content/347/6223/768/suppl/DC1

## OTHER SOURCES
https://ourworldindata.org/plastic-pollution#plastic-waste-per-person
https://ec.europa.eu/search/?queryText=plastic&query_source=europa_default&page=&filter=&swlang=en&filterSource=europa_default&more_options_date=*&more_options_language=en&more_options_f_formats=xls
https://advances.sciencemag.org/content/3/7/e1700782.full
https://www.statslife.org.uk/news/4026-statistics-of-the-year-2018-winners-announced
https://news.nationalgeographic.com/2017/07/plastic-produced-recycling-waste-ocean-trash-debris-environment/
•https://hub.arcgis.com/datasets/uneplive::estimate-of-plastic-pollution-in-the-worlds-oceans
https://ourworldindata.org/plastic-pollution#data-sources
https://catalog.data.gov/dataset/materials-discarded-in-the-u-s-municipal-waste-stream-1960-to-2009-in-tons


## Project requirements:
Your visualization must include a Python Flask–powered RESTful API, HTML/CSS, JavaScript, and at least one database (SQL, MongoDB, SQLite, etc.). 
Your project should fall into one of the below four tracks:
A custom “creative” D3.js project (i.e., a nonstandard graph or chart)
A combination of web scraping and Leaflet or Plotly
A dashboard page with multiple charts that update from the same data
A “thick” server that performs multiple manipulations on data in a database prior to visualization (must be approved)
Your project should include at least one JS library that we did not cover.
Your project must be powered by a data set with at least 100 records.
Your project must include some level of user-driven interaction
(e.g., menus, dropdowns, textboxes)
Your final visualization should ideally include at least three views.




### POTENTIAL VISUALIZATIONS (upon first assumption)
(relevant once we find our data sources)
1. User Prompt: “Which single-use plastic do you use the most on a weekly basis?”
https://www.waterdocs.ca/water-talk/2017/12/19/8-single-use-plastic-items-you-can-quit-right-now
plastic straws • plastic water bottles • coffee cups with lids • plastic bags • take-out containers • plastic wrap • plastic cutlery • plastic party cups • six pack rings

Visualize the most commonly used plastics
Dendrogram + Grouped Horizontal Bar Chart? https://bl.ocks.org/dahis39/f28369f0b17b456ac2f1fa9b937c5002

Comparing top 10 plastics by volume of consumption versus production per day/year
Multi-series line chart https://observablehq.com/@d3/multi-line-chart

Comparing plastic volume that actually gets recycled vs volume dumped into the environment 
Bar chart

Most waste producing countries and most polluted countries 
Heatmap

