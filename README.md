## My Companion

My Companion is a mobile oriented website to keep track of pet data, such as vet appointments and medication. Users can create scheduled reminders, update pet data, track medication and appointments, and visualize pet weight gain/loss on a responsive chart.

# Instructions

- Clone this repository
- Navigate to `./client` and run `npm i`
- Navigate to `./server` and run `npm i`
- Create a `.env` in `./client` with the following structure and add your custom values on APP ID, JS KEY and MONGODB STRING:

```js
REACT_APP_APP_ID=SOME_VALUE
DATABASE_URI=MONGODB_CONNECTION_STRING
REACT_APP_JAVASCRIPT_KEY=SOME_VALUE
REACT_APP_SERVER_URL=http://localhost:1337/database

#IF YOU WANT TO USE EMAIL NOTIFICATIONS
EMAIL=GMAIL_TO_USE
EMAIL_PASSWORD=GMAIL_PASSWORD
```

- Create a copy of the `.env` in `./client` and move it to `./server`
- In `./server` start the backend with `node index.js`
- In `./client` start the website with `npm start`

## Demo youtube video:

[Video](https://youtu.be/nAHyZd0Ej88)
