AccountsTemplates.configure({
  // Behaviour
  confirmPassword: true,
  enablePasswordChange: true,
  forbidClientAccountCreation: false,
  overrideLoginErrors: true,
  sendVerificationEmail: false,
  lowercaseUsername: false,

  // Appearance
  showAddRemoveServices: false,
  showForgotPasswordLink: false,
  showLabels: true,
  showPlaceholders: true,

  // Client-side Validation
  continuousValidation: false,
  negativeFeedback: false,
  negativeValidation: true,
  positiveValidation: true,
  positiveFeedback: true,
  showValidating: true,

//  // Privacy Policy and Terms of Use
//  privacyUrl: 'privacy',
//  termsUrl: 'terms-of-use',

  // Redirects
//  homeRoutePath: '/',
//  redirectTimeout: 4000,

  // Hooks
//  onLogoutHook: myLogoutFunc,
//  onSubmitHook: mySubmitFunc,

//  // Texts
//  texts: {
//    button: {
//      signUp: "Register Now!"
//    },
//    socialSignUp: "Register",
//    socialIcons: {
//      "meteor-developer": "fa fa-rocket"
//    },
//    title: {
//      forgotPwd: "Recover Your Passwod"
//    },
//  },
});


if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });



  Meteor.connection = DDP.connect('http://localhost:3030/');
  Accounts.connection = Meteor.connection;
  Meteor.users = new Meteor.Collection('users');
  Meteor.connection.subscribe('users');



}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}