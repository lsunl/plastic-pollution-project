# PLASTIC PLANET 
# Import Flask
import os
import pandas as pd
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)


import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################

# Create our session (link) from Python to the DB
from flask_sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get("sqlite:///db/plasticWaste.sqlite")
db = SQLAlchemy(app)

# Reflect Database into ORM classes
Base = automap_base()
Base.prepare(engine, reflect=True)

# Save references to each table
country_geocode=Base.classes.country_geocode
country_plastic_waste=Base.classes.country_plastic_waste
country_waste_info=Base.classes.country_waste_info
master=Base.classes.master
mismanaged_plastic_pperson=Base.classes.mismanaged_plastic_pperson
mismanaged_pwaste_2010_to_2025=Base.classes.mismanaged_pwaste_2010_to_2025
plastic_waste_percentage=Base.classes.plastic_waste_percentage
pperson_plastic_waste=Base.classes.pperson_plastic_waste
waste_types=Base.classes.pperson_plastic_waste



# 3. Define static routes
@app.route("/")
def index():
    """ landing page """
    return render_template("index.html")

@app.route("/api")
def api_list():
    """list all API routes"""
    print (
        f"Plastic Planet Navigation<br/>"
        f"Available Routes:<br/>"
        f"/global-waste<br/>"
        f"/population-vs-waste-management<br/>"
        f"/countries-mismatched-waste"
    )
    
@app.route("/api/global_waste")
def global_waste():




@app.route("/api/epa_data")
def epa_data():
    epa_results = db.session.query(plasticWaste.id, plasticWaste.waste_type).all()
    return jsonify(epa_results)

# 4. Define main behavior
if __name__ == "__main__":
    app.run(debug=True)
