from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
client = MongoClient('mongodb://localhost:27017/')

app=FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

@app.get("/")
def getusers():
    filter= {}
    project = {
        "_id":0 ,
        # "name":1
        
    }
    try :
        return list(client.customerlogin.customers.find(filter,project))
    except Exception as e :
        print(str(e))
        return False