# PLASTIC PLANET 
# 1. Import Flask
# Python SQL toolkit and Object Relational Mapper
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import datetime as dt
from flask import Flask, jsonify

# Create our session (link) from Python to the DB
engine = create_engine("sqlite:///Resources/hawaii.sqlite")
session = Session(engine)

# Reflect Database into ORM classes
Base = automap_base()
Base.prepare(engine, reflect=True)

# Save references to each table
Measurement = Base.classes.measurement
Station = Base.classes.station

# 2. Create an app
app = Flask(__name__)

# 3. Define static routes
@app.route("/")
def index():
    """list all API routes"""
    print (
        f"Plastic Planet Navigation<br/>"
        f"Available Routes:<br/>"
        f"/us-plastic-lifecycle<br/>"
        f"/population-vs-waste-management<br/>"
        f"/countries-mismatched-waste"
    )

prev_year = dt.date(2017,8,23) - dt.timedelta(365)

@app.route("/us-plastic-lifecycle")
def precipitation():
    """Convert the query results to a Dictionary using [date] as the key and [prcp] as the value."""
    precip = session.query(Measurement.date, Measurement.prcp).filter(Measurement.date >= prev_year).all()

        # Create a dictionary from the row data and append to a list 
    precip_dict = {}
    for date, prcp in precip:
        if prcp !=None:
            precip_dict.setdefault(date, []).append(prcp)

    return jsonify(precip_dict)


@app.route("/population-vs-waste-management")
def stations():
    station_locs = session.query(Station.station).all()
    stations = list(np.ravel(station_locs))

    return jsonify(stations)


@app.route("/countries-mismatched-waste")
def tobs():
    obs = session.query(Measurement.date, Measurement.tobs).filter(Measurement.date >= prev_year).all()
    obs_dict = {}
    for date, tobs in obs:
        if tobs !=None:
            obs_dict.setdefault(date, []).append(tobs)
            print("I don't have an END variable.")
    
    return jsonify(obs_dict)

# 4. Define main behavior
if __name__ == "__main__":
    app.run(debug=True)
