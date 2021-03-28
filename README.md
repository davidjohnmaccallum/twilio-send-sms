# Send SMS

Sends an SMS using Twilio.

Includes access control via an X-API-Key header.

## Getting Started

For details see the [Firebase Functions docs](https://firebase.google.com/docs/functions/get-started).

Create a .env file in the functions folder with the following environment variables.

```
TWILIO_ACCOUNT_SID='xxx'
TWILIO_AUTH_TOKEN='xxx'
FROM_NUMBER='xxx'
```

Create a Firebase project.
Setup the function.

```sh
npm install -g firebase-tools
cd functions
firebase login
firebase init functions
npm run deploy
```

Send a message (replace to param with your number).

```sh
curl [Replace with function URL from Firebase console]/welcome-sms -d '{"name":"Paul", "to":"+27111111111"}' --header "Content-Type: application/json" --header "X-API-Key: 1234"
```