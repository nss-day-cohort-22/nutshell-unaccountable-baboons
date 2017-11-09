let nutshellDB = {
    "users":[], //{"id": 1 "username": koolkev "email": koolkev@mail}
    "events": [], //{"id": 1 "userId": 1 "name": Foo " date": 1/1/18 "location": 123 Fooville st.}
    "tasks": [], //{"id": 1 "userId": 1 "name": task name "expectedCompletion" : 1/1/18}
    "chat": [], //{"id": 1 "userId": 1 "message": Sup "timeStamp" : date.now()}
    "friends": [], //{"id": 1 "userId": 1 "friendId": 1}
    "articles": [] //{"id": 1 "userId": 1 "title": Foo "synopsis": stuff happened "url": www.website.com "timeStamp" : date.now()}
}
module.exports = nutshellDB