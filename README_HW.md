# NoteTaker

An application to take notes and save them for organization.

OVERVIEW:

The NoteTaker application is built to allow the user to enter notes which are saved for later viewing.

DEPENDANCIES:

Express.js

Details:

- When the user starts the application, they are presented with a screen to "Get Started"
- When the user presses "Get Started" a fetch request is made for /notes and this page is served by express.
- When the user enters a note and presses the save icon, the note is saved to a JSON database file, and displayed on the left for later viewing.
- Each note is given a unique identifier, this will be used in a later development. A function must be created to read the JSON database file, delete the desired JSON object, and then rewrite the file without it.

This application is deployed to HEROKU here:

https://enigmatic-citadel-74164.herokuapp.com/
