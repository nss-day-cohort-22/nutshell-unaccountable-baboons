# Nutshell: The Information Dashboard

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