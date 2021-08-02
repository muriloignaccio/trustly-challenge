# TRUSTLY CHALLENGE

## About
The Trustly Challenge is a step for the Hiring Process of the System Integration Engineer role at Trustly Brazil.

# Challenge 1

## Quick Start
This project can be executed at the development environment following the steps below.

## Instalation 
  **1.** Clone the repository in your machine

```
git clone https://github.com/muriloignaccio/trustly-challenge.git
```
  **2.** Enter in the cloned folder

```
cd trustly-challenge
```

## Start the Back-end server   
  
  **3.** Enter in the backend folder

```
cd challenge-1/backend
```
  **4.** Install all the dependencies 

```
yarn
```
  **5.** Run the project
  
```
yarn start
```

## Start Front-end
  **6.** Exit backend folder and enter frontend

```
cd ../frontend
```
  **7.** Install all the dependencies 

```
yarn
```
  **8.** Run the project
  
```
yarn dev
``` 

  **9.** Enter the URL below on your browser
  
```
http://localhost:3000
``` 

# Routes - Back-end

## List all the Time Zones
    Return the data in JSON of all the Time Zones
    
```http
GET /timezones
```

### Status
  - **200** *OK*
  
     **Response:**
     ```
     [
        {
          "timeZoneName": "Dateline Standard Time",
          "timeZoneAbbreviation": "DST"
        }, 
        ...
     ]
     ```
    
## Retrieve a Time Zone
    Return the data in JSON of a Time Zone based on the abbreviation
```http
GET /timezones/(:abbreviation)
```
### Parameters
  - ***abbreviation*** (Required): represents the abbreviation of the Time Zone to be fetched. ```string``` 

### Status
  - **200** *OK*
  
     **Response:**
     ```
      {
        "currentDateTime": "2021-08-02T07:19-12:00",
        "utcOffset": "-12:00:00",
        "dayOfTheWeek": "Monday",
        "timeZoneName": "Dateline Standard Time"
      }
     ```
 
## Non-existent route
  - **404** *Not Found*
  
     **Response:**
     ```
     {
        "status": 404,
        "message": "Page not found",
        "documentation_url": "https://github.com/muriloignaccio/trustly-challenge"
     }
     ```
     
# Challenge 2

## Quick Start
This project can be executed at the development environment following the steps below.

## Instalation 
  **1.** After cloning the repository on your machine, you can enter the folder challenge-2

```
cd challenge-2
```
  **2.** Run the ChallengeTwo.java file

```
java ChallengeTwo.java
```

Made with ♥ by Murilo Ignacio
