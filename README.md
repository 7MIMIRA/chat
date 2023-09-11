# Y
A full stack chat application

# Why build Y?
I've always been interested in building a chat client for some reason and I'm using this as an opportunity to get experience using sockets and get more experience w/ DOM manipulation and vanilla JavaScript instead of jumping straight to a framework.

That.. and because y not ;)

# The API
*A work in progress*
|Method|Path|Description|
|--|--|--|
|GET|/api/users/{room_id}|requests a list of users for a given room|
|GET|/api/user/{user_id}|requests details of a specific user
|GET|/api/messages/{room_id}|requests the messages for a given room|
|PUT|/api/message/{room_id}|submits a message for a given room|

### Notes
At this point I'm not worried about paginating results and will providingt he complete list for list queries (get messages, get users, etc..)

If I do implement pagination It'll likely be the **get messages** API for obvious reasons.

In order to keep costs down messages will be given a TTL so they will only be stored for a period of time.
