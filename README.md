# Send SMS

Sends an SMS using Twilio.

Includes access control via an X-API-Key header.

See firebase-functions branch for an example of deploying to Firebase cloud functions.

## Getting Started

Create a .env file with the following environment variables.

```
TWILIO_ACCOUNT_SID='xxx'
TWILIO_AUTH_TOKEN='xxx'
FROM_NUMBER='xxx'
```

Start the server.

```sh
npm install
npm start
```

Send a message (replace to param with your number).

```sh
curl http://localhost:9000/send-welcome-sms -d '{"name":"Paul", "to":"+27111111111"}' --header "Content-Type: application/json" --header "X-API-Key: 1234"
```