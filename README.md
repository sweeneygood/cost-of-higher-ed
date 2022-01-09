# cost-of-higher-ed
JS project with visualizations of higher education data

# Steps to run the project locally

First, set up and populate a local PostgreSQL database. 
- Create a local PostgreSQL database called higher_ed_db 
- Go to the etl folder. Start up your environment (`source activate PythonData38`). Start `jupyter notebook`. 
- Open the notebook (higher_ed_data_ETL.ipynb). Clear all output (Go to the `Kernel` menu and click `Restart & Clear Output`).
- Within the notebook, modify the db connection password to your local PGAdmin password. 
- Execute the notebook to load data from CSVs (Go to the `Kernel` menu and click `Restart & Run All`).

Next, run the flask server locally. 
- Make sure the following are installed on your local environment (`pip install psycopg2-binary` and `pip install flask-sqlalchemy`) 
- Go to the root folder for this repo. Start up your environment (`source activate PythonData38`). Run app.py (`python app.py`). 
- Go to http://127.0.0.1:5000/ for the main application 
- Go to http://127.0.0.1:5000/docs for the api documentation 
