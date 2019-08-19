const functions = require('firebase-functions');
const mailgun = require("mailgun-js");
const DOMAIN = '';
const api_key = ''
const mg = mailgun({apiKey: api_key, domain: DOMAIN});
const data = {
	from: '',
	to: '',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
