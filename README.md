# Nutshell: The Information Dashboard

Nutshell is a new product offering that you have been tasked with building. It's a dashboard for people to use to organize their daily tasks, events, news article, friends, and chat messages.

You will be utilizing all of the skills and concepts that you've learned up to this point in the course.

1. Functions
1. Databases
1. Github
1. Objects
1. CSS
1. Generators
1. Handling user events
1. Factory functions
1. Data entry/editing
1. Modular code with Browserify
1. Relational data

To start you off, here's an example of what the database should look like once it's populated with some data from your application.

```js
const NutshellDatabase = {
    "users": [
        { "id": 1, "username": "Steve", "email": "me@me.com" },
        { "id": 2, "username": "Mark", "email": "you@you.com" },
        { "id": 3, "username": "Krista", "email": "foo@foo.com" }
    ],
    "messages": [
        { "id": 1, "userId": 1, "message": "What's up?" }
    ],
    "news": [
        { "id": 1, "userId": 2, "url": "https://www.quantamagazine.org/newfound-wormhole-allows-information-to-escape-black-holes-20171023/", "note": "Check out this recent discovery about workholes" }
    ],
    "friends": [
        { "userId": 1, "friendId": 3 },
        { "userId": 1, "friendId": 2 }
    ],
    "tasks": [
        { "id": 1, "userId": 3, "task": "Take out garbage" }
    ]
}
```

## Professional Requirements

1. All teammates must be using Grunt to run ESLint and Browserify during development
1. Each module should have a comment at the top with the following info: author(s) and purpose of module
1. The README for your project should include instructions on how another person can download and run the application
