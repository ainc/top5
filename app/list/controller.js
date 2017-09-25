import Ember from 'ember';

export default Ember.Controller.extend({
    data: [{
        "_display": false,
        "name": "Amanda",
        "thing1": "Send mktg. workshop info. to atty. attendees & others",
        "thing2": "Payroll, email Rebecca W. ",
        "thing3": "Windstream contract",
        "thing4": "TAB board meeting & marketing",
        "thing5": "Workspace email",
        "personal": "Run 2-3x, \nMeditate 1x\nListen to 1 leadership podcast"
      },
      {
        "_display": false,
        "name": "Brian",
        "thing1": "prepare for review mtgs",
        "thing2": "Ainc U tax forms",
        "thing3": "TAB board meeting prep",
        "thing4": "5 Across trademark",
        "thing5": "work on Salary Charts Draft"
      },
      {
        "_display": false,
        "name": "Kyle",
        "thing1": "Upload videos",
        "thing2": "app land font upload",
        "thing3": "quandl 1 hr",
        "thing4": "thor engr update"
      },
      {
        "_display": false,
        "name": "Ben",
        "thing1": "GE",
        "thing2": "Mariann",
        "thing3": "Sales follow-up",
        "thing4": "Tasks follow-up",
        "thing5": "Dan Owen",
        "personal": "Spend good time with the kids"
      },
      {
        "_display": false, 
        "name": "Nathan",
        "thing1": "Research and start building a REST api in Node+Express",
        "thing2": "Finish a basic UI for the top 5 web app",
        "thing3": "Research how to build an audio unit plug-in",
        "thing4": "Get to know the rest of the team",
        "thing5": "Set up the Chromebit for the TV _displays",
        "personal": "- Run\n- re-record sax and mix my song\n- go on a hike this weekend"
      },
      {
        "_display": false,
        "name": "Keith",
        "thing1": "Louisville Summit Networking",
        "thing2": "Q3 roundup mailchimp",
        "thing3": "UkAccel meetings",
        "thing4": "Plan Awesome Inc event - (Jason show)",
        "thing5": "Team Alpha Lesson",
        "personal": "Get eye surgery, convince all other correct lens wearers in the office to do the same."
      },
      {
        "_display": false,
        "name": "Derek",
        "thing1": "Builder list",
        "thing2": "new cdn",
        "thing3": "halloween theme",
        "thing4": "ios change list",
        "thing5": "ios update submission",
        "personal": "app future design"
      },
      {
        "_display": false,
        "name": "Katy",
        "thing1": "meet with bootcampers",
        "thing2": "TAB board meeting",
        "thing3": "prep and meeting with Stoll, Keenan, Ogden",
        "thing4": "Undrcvr planning",
        "personal": "organize basement"
      }
    ],

    actions: {
        toggleBody(item) {
            if (item._display == false) {
                Ember.set(item, '_display', true);
            } else {
                Ember.set(item, '_display', false);
            }
            // debugger;
        }
    }

});
