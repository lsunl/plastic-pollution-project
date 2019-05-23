# PLASTIC PLANET
# 1. Import Flask
# Python SQL toolkit and Object Relational Mapper
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


# 2. Create an app
app = Flask(__name__)


# 3. Database setup
from flask_sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get("sqlite:///db/plasticWaste.sqlite")
db = SQLAlchemy(app)

# Reflect existing database into a new model
Base = automap_base()
# Reflect the tables
Base.prepare(db.engine, reflect=True)

# Save references
country_geocode=Base.classes.country_geocode
country_plastic_waste=Base.classes.country_plastic
country_waste_info=Base.classes.country_waste_info
master=Base.classes.master
mismanaged_plastic_pperson=Base.classes.mismanaged_plastic_pperson
mismanaged_pwaste_2010_to_2025=Base.classes.mismanaged_pwaste_2010_to_2025
plastic_waste_percentage=Base.classes.plastic_waste_percentage
pperson_plastic_waste=Base.classes.pperson_plastic_waste
waste_types=Base.classes.pperson_plastic_waste



# 4. Define static routes
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
        f"/us-plastic-lifecycle<br/>"
        f"/population-vs-waste-management<br/>"
        f"/countries-mismatched-waste"
    )

@app.route("/api/epa_data")
def epa_data():
    results = db.session.query(plasticWaste.id, plasticWaste.waste_type).all()
    return jsonify(results)




# @app.route("/api/us-plastic-lifecycle")
# def lifecycle():
#     return jsonify()
#
# @app.route("/api/population-vs-waste-management")
# def stations():
#     return jsonify()
#
#
# @app.route("/api/countries-mismatched-waste")
# def tobs():
#
#     return jsonify(obs_dict)



# 4. Define main behavior
if __name__ == "__main__":
    app.run(debug=True)
