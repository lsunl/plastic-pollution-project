# PLASTIC PLANET
#################################################
# Imports
#################################################
import os
import pandas as pd
import numpy as np
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)


import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///resources/plastichorror.sqlite", echo=False)
conn = engine.connect()



# Reflect Database into ORM classes
Base = automap_base()
Base.prepare(engine, reflect=True)


# Reference to EPA route
epa_waste = Base.classes.epa_waste
# country_geocode=Base.classes.country_geocode

# Reference to GLOBAL WASTE route
country_plastic_waste=Base.classes.country_plastic_waste
# country_waste_info=Base.classes.country_waste_info
# plastic_waste_percentage=Base.classes.plastic_waste_percentage
# pperson_plastic_waste=Base.classes.pperson_plastic_waste

# Reference to PREDICTIONS route
mismanaged_prediction=Base.classes.mismanaged_prediction

session = Session(bind=engine)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Routes
#################################################
@app.route("/")
def index():
    """ landing page """
    return render_template("index.html")


@app.route("/api/epa-waste")
def example():
    results = session.query(epa_waste).all()
    #unravel_string = list(np.ravel(results))
    all = []
    for x in results:
        x_dict = {}
        # x_dict["epa_id"] = x.epa_id
        x_dict["year"] = x.year
        x_dict["paper_paperboard"] = x.paper_paperboard
        x_dict["glass"] = x.glass
        x_dict["metals"] = x.metals
        x_dict["plastic"] = x.plastic
        x_dict["wood"] = x.wood
        x_dict["type_id"] = x.type_id
        x_dict["waste_type"] = x.waste_type
        all.append(x_dict)

    return jsonify(all)

@app.route("/api/global-waste")
def global_waste():
    results = session.query(country_plastic_waste).all()
    all = []
    for x in results:
        x_dict = {}
        x_dict["country_id"] = x.country_id
        x_dict["Country"] = x.Country
        x_dict["Plastic_waste_generation_kg_day"] = x.Plastic_waste_generation_kg_day
        x_dict["Managed_plastic_waste_kg_day"] = x.Managed_plastic_waste_kg_day
        x_dict["Mismanaged_plastic_waste_kg_day"] = x.Mismanaged_plastic_waste_kg_day
        all.append(x_dict)

    return jsonify(all)

@app.route("/api/projections")
def projections():
    results = session.query(mismanaged_prediction).all()
    all = []
    for x in results:
        x_dict = {}
        x_dict["country_id"] = x.country_id
        x_dict["Country"] = x.Country
        x_dict["Mismanaged_plastic_waste_in_2010_tonnes"] = x.Mismanaged_plastic_waste_in_2010_tonnes
        x_dict["Mismanaged_plastic_waste_in_2025_tonnes"] = x.Mismanaged_plastic_waste_in_2025_tonnes
        x_dict["Per_Change_2010_to_2025"] = x.Per_Change_2010_to_2025
        all.append(x_dict)

    return jsonify(all)




# 4. Define main behavior
if __name__ == "__main__":
    app.run(debug=True)
