  // FirebaseUI config.
  var uiConfig = {
    signInSuccessUrl: "../signpad.html",
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      //firebase.auth.GithubAuthProvider.PROVIDER_ID,
      //firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      //firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: '<your-tos-url>',
    // Privacy policy url/callback.
    privacyPolicyUrl: function() {
      window.location.assign('<your-privacy-policy-url>');
    }
  };

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);
  /*!
  //<!-- A simple example script to add text to the page that displays the user's Display Name and Email -->  
    // Track the UID of the current user.  
  var currentUid = null;  
  firebase.auth().onAuthStateChanged(function(user) {  
   // onAuthStateChanged listener triggers every time the user ID token changes.  
   // This could happen when a new user signs in or signs out.  
   // It could also happen when the current user ID token expires and is refreshed.  
   if (user && user.uid != currentUid) {  
    // Update the UI when a new user signs in.  
    // Otherwise ignore if this is a token refresh.  
    // Update the current user UID.  
    currentUid = user.uid;  
   } else {  
    // Sign out operation. Reset the current user UID.  
    currentUid = null;  
    console.log("no user signed in");  
   }  
  });
*/