# cost-of-higher-ed
JS project with visualizations of higher education data


Steps to run the project locally: 
- Create a local PostgreSQL database called higher_ed_db 
- Make sure the following are installed on your local environment (pip install psycopg2-binary and pip install flask-sqlalchemy) 
- Check the jupyter notebook and app.py to make sure the db connection string reflects your local set up 
- Open the jupyter notebook called higher_ed_data_ETL.ipynb in your local environment 
- Clear output and execute notebook to load data from CSVs and add the data to the higher_ed_db 
- Run the app.py flask application in your local environment 
- The route for the full list of institutions: /api/v1.0/institutions  

