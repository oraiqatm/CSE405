Heroku APP Purpose:
The idea is to send json data through a post request to the server that will then edit a database value. Then a python program on a raspberry pi will be listening to the server to trigger functions that will control mutiple sensors.
	
Details:
-I have added screenshots to this folder if you are curious about the code and implementation of the database. Heroku apps provides a hosting service for server application. Heroku also collaborates with different databases and services for users. I used ClearDB for easy access to a hosted database. 

-I created an express NodeJS file called app.js where the port is provided by heroku. I then added the mysql package in order to access the database that is being hosted by ClearDB. Then I made an app in android studios where I can make post requests at the click of a button.

ScreenShots:
- "appJS-top" and "appJS_bottom" show the full express script that is also referencing a sql database.
- "AndroidApp-pre-press" and "AndroidApp-post-press" : shows the onclick lister declaration for a post request with a custome datavalue for Rasp_Command
- "PostmonExample": shows me editing the database value from postman.

Link to Live site: https://group5-raspberrypi.herokuapp.com/
Link with JSON : https://group5-raspberrypi.herokuapp.com/?Rasp_Command= EnterStringHere

