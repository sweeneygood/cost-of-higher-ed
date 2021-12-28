#################################################
# Imports
#################################################

# This website was a huge help in getting flask working with postgresql  
#      https://stackabuse.com/using-sqlalchemy-with-flask-and-postgresql/ 

# Before running this flask server, make sure the following is installed in your environment first
#       $ pip install psycopg2-binary
#       $ pip install flask-sqlalchemy

import numpy as np
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import datetime as dt
from datetime import date

from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


#################################################
# Create a flask app
#################################################

app = Flask(__name__)


#################################################
# Setup DB connection to postgreSQL 
#################################################

app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:bootcamp@localhost:5432/higher_ed_db"
db = SQLAlchemy(app)


class Institution1(db.Model):
    """Model for the institution1 table"""
    __tablename__ = 'institutions1'


    unit_id = db.Column(db.String(), primary_key=True)
    institution =  db.Column(db.String())
    address = db.Column(db.String())
    city = db.Column(db.String())
    state = db.Column(db.String())
    zip_code = db.Column(db.String())

    def __init__(self,unit_id, institution, address, city, state, zip_code): 
        self.unit_id = unit_id
        self.institution = institution
        self.address = address
        self.city = city
        self.state = state
        self.zip_code = zip_code
 


class Institution(db.Model):
    """Model for the institutions table"""
    __tablename__ = 'institutions'


    unit_id = db.Column(db.String(), primary_key=True)
    institution =  db.Column(db.String())
    address = db.Column(db.String())
    city = db.Column(db.String())
    state = db.Column(db.String())
    zip_code = db.Column(db.String())
    website = db.Column(db.String())
    lon = db.Column(db.Float)
    lat = db.Column(db.Float)
    region = db.Column(db.Integer)
    sector = db.Column(db.Integer)
    perc_admitted = db.Column(db.Float)
    total_enrollment = db.Column(db.Integer)
    total_men = db.Column(db.Integer)
    total_women = db.Column(db.Integer)
    total_american_indian = db.Column(db.Integer)
    total_asian = db.Column(db.Integer)
    total_black = db.Column(db.Integer)
    total_hispanic = db.Column(db.Integer)
    total_pacific_islander = db.Column(db.Integer)
    total_white = db.Column(db.Integer)
    total_two_or_more = db.Column(db.Integer)
    total_race_unknown = db.Column(db.Integer)
    total_nonresident = db.Column(db.Integer)
    avg_net_price_0_30000_titleiv_public = db.Column(db.Float)
    avg_net_price_30001_48000_titleiv_public = db.Column(db.Float)
    avg_net_price_48001_75000_titleiv_public = db.Column(db.Float)
    avg_net_price_75001_110000_titleiv_public = db.Column(db.Float)
    avg_net_price_110001_titleiv_public = db.Column(db.Float)
    avg_net_price_0_30000_titleiv_privateforprofit = db.Column(db.Float)
    avg_net_price_30001_48000_titleiv_privateforprofit = db.Column(db.Float)
    avg_net_price_48001_75000_titleiv_privateforprofit = db.Column(db.Float)
    avg_net_price_75001_110000_titleiv_privateforprofit = db.Column(db.Float)
    avg_net_price_110001_titleiv_privateforprofit = db.Column(db.Float)
    instate_tuition_fees = db.Column(db.Float)
    full_time_retention_rate = db.Column(db.Float)
    perc_first_time_full_time_undergrad_other_grant_aid = db.Column(db.Float)
    avg_amount_other_grant_aid_first_time_full_time_undergrad = db.Column(db.Float)
    avg_amount_pell_grants_first_time_full_time_undergrad = db.Column(db.Float)


    def __init__(self,unit_id, institution, address, city, state, zip_code, website, lon, lat, 
    region, sector, perc_admitted,total_enrollment,total_men,total_women,total_american_indian,
    total_asian,total_black,total_hispanic,total_pacific_islander,total_white,total_two_or_more,total_race_unknown,total_nonresident, avg_net_price_0_30000_titleiv_public,
    avg_net_price_30001_48000_titleiv_public,avg_net_price_48001_75000_titleiv_public,avg_net_price_75001_110000_titleiv_public,avg_net_price_110001_titleiv_public,avg_net_price_0_30000_titleiv_privateforprofit,
    avg_net_price_30001_48000_titleiv_privateforprofit, avg_net_price_48001_75000_titleiv_privateforprofit, avg_net_price_75001_110000_titleiv_privateforprofit, avg_net_price_110001_titleiv_privateforprofit,
    instate_tuition_fees,full_time_retention_rate, perc_first_time_full_time_undergrad_other_grant_aid,avg_amount_other_grant_aid_first_time_full_time_undergrad,avg_amount_pell_grants_first_time_full_time_undergrad): 
        self.unit_id = unit_id
        self.institution = institution
        self.address = address
        self.city = city
        self.state = state
        self.zip_code = zip_code
        self.website = website
        self.lon = lon
        self.lat = lat
        self.region = region
        self.sector = sector
        self.perc_admitted = perc_admitted
        self.total_enrollment = total_enrollment
        self.total_men = total_men
        self.total_women = total_women
        self.total_american_indian = total_american_indian
        self.total_asian = total_asian
        self.total_black = total_black
        self.total_hispanic = total_hispanic
        self.total_pacific_islander = total_pacific_islander
        self.total_white = total_white
        self.total_two_or_more = total_two_or_more
        self.total_race_unknown = total_race_unknown
        self.total_nonresident = total_nonresident
        self.avg_net_price_0_30000_titleiv_public = avg_net_price_0_30000_titleiv_public
        self.avg_net_price_30001_48000_titleiv_public = avg_net_price_30001_48000_titleiv_public
        self.avg_net_price_48001_75000_titleiv_public = avg_net_price_48001_75000_titleiv_public
        self.avg_net_price_75001_110000_titleiv_public = avg_net_price_75001_110000_titleiv_public
        self.avg_net_price_110001_titleiv_public = avg_net_price_110001_titleiv_public
        self.avg_net_price_0_30000_titleiv_privateforprofit = avg_net_price_0_30000_titleiv_privateforprofit
        self.avg_net_price_30001_48000_titleiv_privateforprofit = avg_net_price_30001_48000_titleiv_privateforprofit
        self.avg_net_price_48001_75000_titleiv_privateforprofit = avg_net_price_48001_75000_titleiv_privateforprofit
        self.avg_net_price_75001_110000_titleiv_privateforprofit = avg_net_price_75001_110000_titleiv_privateforprofit
        self.avg_net_price_110001_titleiv_privateforprofit = avg_net_price_110001_titleiv_privateforprofit
        self.instate_tuition_fees = instate_tuition_fees
        self.full_time_retention_rate = full_time_retention_rate
        self.perc_first_time_full_time_undergrad_other_grant_aid = perc_first_time_full_time_undergrad_other_grant_aid
        self.avg_amount_other_grant_aid_first_time_full_time_undergrad = avg_amount_other_grant_aid_first_time_full_time_undergrad
        self.avg_amount_pell_grants_first_time_full_time_undergrad = avg_amount_pell_grants_first_time_full_time_undergrad



#################################################
# Define routes
#################################################
@app.route("/")
def index():

#This is the base route that returns api docs 

    return (f"<strong>The higher ed app has the following routes:</strong><br/>"
            f"<hr>"
            f"/api/v1.0/institution1  - this is for testing only - it will be removed before project submission<br/>"
            f"/api/v1.0/institutions<br/>"
            f"/api/v1.0/institutions/id - not working, may not be needed <br/>"
            f"/api/v1.0/institutions/lat/lon - not working, may not be needed <br/>"
            f"<hr>")
            

@app.route("/api/v1.0/institution1")
def institution1():
#This route returns all institution data, but only a few columns

    schools = Institution1.query.all()
    results = [
        {

            "unit_id": school.unit_id,
            "institution": school.institution,
            "address": school.address,
            "city": school.city,
            "state": school.state,
            "zip_code": school.zip_code


        } for school in schools]

    return {"count": len(results), "institutions": results}


@app.route("/api/v1.0/institutions")
def institutions():
#This route returns all institution data

    schools = Institution.query.all()
    results = [
        {

            "unit_id": school.unit_id,
            "institution": school.institution,
            "address": school.address,
            "city": school.city,
            "state": school.state,
            "zip_code": school.zip_code,
            "website" : school.website,
            "lon" : school.lon,
            "lat" : school.lat,
            "region" : school.region,
            "sector" : school.sector,
            "perc_admitted" : school.perc_admitted,
            "total_enrollment" : school.total_enrollment,
            "total_men" : school.total_men,
            "total_women" : school.total_women,
            "total_american_indian" : school.total_american_indian,
            "total_asian" : school.total_asian,
            "total_black" : school.total_black,
            "total_hispanic" : school.total_hispanic,
            "total_pacific_islander" : school.total_pacific_islander,
            "total_white" : school.total_white,
            "total_two_or_more" : school.total_two_or_more,
            "total_race_unknown" : school.total_race_unknown,
            "total_nonresident" : school.total_nonresident,
            "avg_net_price_0_30000_titleiv_public" : school.avg_net_price_0_30000_titleiv_public,
            "avg_net_price_30001_48000_titleiv_public" : school.avg_net_price_30001_48000_titleiv_public,
            "avg_net_price_48001_75000_titleiv_public" : school.avg_net_price_48001_75000_titleiv_public,
            "avg_net_price_75001_110000_titleiv_public" : school.avg_net_price_75001_110000_titleiv_public,
            "avg_net_price_110001_titleiv_public" : school.avg_net_price_110001_titleiv_public,
            "avg_net_price_0_30000_titleiv_privateforprofit" : school.avg_net_price_0_30000_titleiv_privateforprofit,
            "avg_net_price_30001_48000_titleiv_privateforprofit" : school.avg_net_price_30001_48000_titleiv_privateforprofit,
            "avg_net_price_48001_75000_titleiv_privateforprofit" : school.avg_net_price_48001_75000_titleiv_privateforprofit,
            "avg_net_price_75001_110000_titleiv_privateforprofit" : school.avg_net_price_75001_110000_titleiv_privateforprofit,
            "avg_net_price_110001_titleiv_privateforprofit" : school.avg_net_price_110001_titleiv_privateforprofit,
            "instate_tuition_fees" : school.instate_tuition_fees,
            "full_time_retention_rate" : school.full_time_retention_rate,
            "perc_first_time_full_time_undergrad_other_grant_aid" : school.perc_first_time_full_time_undergrad_other_grant_aid,
            "avg_amount_other_grant_aid_first_time_full_time_undergrad" : school.avg_amount_other_grant_aid_first_time_full_time_undergrad,
            "avg_amount_pell_grants_first_time_full_time_undergrad" : school.avg_amount_pell_grants_first_time_full_time_undergrad
        } for school in schools]

    return {"count": len(results), "institutions": results}


# @app.route("/api/v1.0/institutions/<id>")
# def institutions():
# #This route returns all institution data for a unit_id 

#     return jsonify('institutions/<id>')


#################################################
# Define main behavior
#################################################

if __name__ == "__main__":
    app.run(debug=True)