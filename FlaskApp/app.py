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
engine = create_engine("sqlite:///resources/plasticWaste.sqlite", echo=False)
conn = engine.connect()



# Reflect Database into ORM classes
Base = automap_base()
Base.prepare(engine, reflect=True)


# # Save references to each table
epa_waste = Base.classes.epa_waste
country_geocode=Base.classes.country_geocode
country_plastic_waste=Base.classes.country_plastic_waste
country_waste_info=Base.classes.country_waste_info
mismanaged_plastic_pperson=Base.classes.mismanaged_plastic_pperson
mismanaged_pwaste_2010_to_2025=Base.classes.mismanaged_pwaste_2010_to_2025
plastic_waste_percentage=Base.classes.plastic_waste_percentage
pperson_plastic_waste=Base.classes.pperson_plastic_waste

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


@app.route("/api/epa_waste")
def example():
    results = session.query(epa_waste).all()
    #unravel_string = list(np.ravel(results))
    all = []
    for x in results:
        x_dict = {}
        x_dict["epa_id"] = x.epa_id
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



# @app.route("/api")
# def api_list():
#     """list all API routes"""
#     print (
#         f"Plastic Planet Navigation<br/>"
#         f"Available Routes:<br/>"
#         f"/global-waste<br/>"
#         f"/population-vs-waste-management<br/>"
#         f"/countries-mismatched-waste"
#     )


# 4. Define main behavior
if __name__ == "__main__":
    app.run(debug=True)
