const functions = require('firebase-functions');
const DOMAIN = 'functions.config().mgservice.id';
const api_key = 'functions.config().mgservice.key';
const mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN})

exports.sendWelcomeEmail = functions.database.ref('users/{uid}').onWrite(event => {

  // only trigger for new users [event.data.previous.exists()]
  // do not trigger on delete [!event.data.exists()]
  if (!event.data.exists() || event.data.previous.exists()) {
    return
  }

  var user = event.data.val()
  var {email} = user

  const data = {
	from: 'Excited User <me@samples.org>',
	to: 'gfarianunes@gmail.com',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});
});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });