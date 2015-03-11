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
