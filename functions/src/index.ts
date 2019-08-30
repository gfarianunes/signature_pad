// Firebase Config
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
//const db = admin.firestore();

// Sendgrid Config
import * as sgMail from '@sendgrid/mail';

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

// Sends email to user after signup
export const welcomeEmail = functions.auth.user().onCreate(user => {

    const msg = {
        to: user.email,
        from: 'hello@signpro.io',
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            subject: 'Welcome to my awesome app!',
            name: user.displayName,
        },
    };

    return sgMail.send(msg);

});
/*
// Emails the author when a new signature is added to a post
export const newComment = functions.firestore.document('posts/{postId}/comments/{commentId}').onCreate( async (change, context) => {

    // Read the post document
    const postSnap = await db.collection('posts').doc(context.params.postId).get();

    // Raw Data
    const post = postSnap.data();
    const comment = change.data();

    // Email
    const msg = {
        to: post.authorEmail,
        from: 'hello@fireship.io',
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            subject: `New Comment on ${post.title}`,
            name: post.displayName,
            text: `${comment.user} said... ${comment.text}`
        },
    };

    // Send it
    return sgMail.send(msg);

});
*/
