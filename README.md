# Worldwise Application

***Built using Vite***

---

This is an application used to track your travels throughout the world. The repo has a starter file to show an example. 

## Installing

To install the application, simply run `npm i`

This will install the dependencies.

## Running the App


In order to run the application the `cities.json` file must be served from a json server which is simple enough. Simply run `npm run server` in a seperate terminal window from the main application. 
In the main window, run the development server by starting the dev script:  `npm run dev`.

Navigating to `http://localhost:5173/` in a browser or clicking the link in the window will be enough to take you to the application. 

## Features

The application has an overview page to show a modern product overview page with a boiler-plate pricing page. The real heart of the application is reached by logging in, click *Start tracking* or *Log in* to reach the log in page. The log in page is pre-filled so the application can be reached by simply clicking 'Log in'.

![image](https://github.com/user-attachments/assets/a1c7a268-187e-4bc0-998e-38d85899554a)

### Adding a travel location

The main page displays the logged in user at the top-right and a map in the center of the screen where the user can click and open a form where they can input details about their travel to the selected location.

![image](https://github.com/user-attachments/assets/0ba2b148-c70e-4c0f-ad60-f6a50acbac04)


### Travel tracking - by city

In the image below, the cities can be seen in the list on the left sidebar. The newly created trip to Ireland can be seen as well. There is a marker with corresponding popup info available as well upon clicking.

![image](https://github.com/user-attachments/assets/dbfe8c1c-f618-49e3-84a7-557f3949b63d)


### Country details

Clicking on the country/city toggle above the list of cities/countries will toggle visibility by either the cities or countries the user has visited as seen in the following image.

![image](https://github.com/user-attachments/assets/91858f62-4337-462f-a215-07c2c333166a)


### Additional info

When clicking on a location in the left-hand sidebar, the user is presented with a window with information regarding the trip with a link to the wikipedia page for the location.

![image](https://github.com/user-attachments/assets/e235435b-a507-4e10-b16f-46035879b709)

### Geolocation

The application asks for permission to use the user's location. If the user agrees then the map will navigate to the user's location. If the user navigates away they can return easily by clicking on the 'Use your position' button at the bottom of the window. 

### Deleting a location

The user can delete a location by clicking the 'X' button on the right-hand side of the city list. 
