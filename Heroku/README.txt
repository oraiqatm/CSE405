Heroku APP Purpose:
The idea is to send json data through a post request to the server that will then edit a database value. Then a python program on a raspberry pi will be listening to the server to trigger function that will control mutiple sensors.
	

How I made it: 
I have added screenshots to this folder if you are curious about the code and implementation of the database. Heroku apps provide a hosting service as well as collaborating with ClearDB for easy access to a hosted database. 

ScreenShots:
- "appJS-top" and "appJS_bottom" show the full express script that is also referencing a sql database.
- "AndroidApp-pre-press" and "AndroidApp-post-press" : shows the onclick lister declaration for a post request with a custome datavalue for Rasp_Command
- "PostmonExample": shows me editing the database value from postman.

Link to Live site: https://group5-raspberrypi.herokuapp.com/
Link with JSON : https://group5-raspberrypi.herokuapp.com/?Rasp_Command= EnterStringHere

