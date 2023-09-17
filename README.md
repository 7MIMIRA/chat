# Y
A full stack chat application

# Why build Y?
I've always been interested in building a chat client for some reason and I'm using this as an opportunity to get experience using sockets and get more experience w/ DOM manipulation and vanilla JavaScript instead of jumping straight to a framework.

That.. and because y not ;)

# The API

|Method|Path|Description|
|--|--|--|
|❌ GET|/api/users/{room_id}|requests a list of users for a given room|
|❌ GET|/api/user/{user_id}|requests details of a specific user|
|❌ GET|/api/messages/{room_id}|requests the messages for a given room|
|❌ GET|/api/rooms|requests a list of rooms|
|❌ POST|/api/user|creates a user|
|❌ POST|/api/message|submits a message for a given room|
|✅ POST|/api/room/{room_name}|creates a room|
|✅ DELETE|/api/room/{room_name}|deletes a room|  

✅ = Implemented  
❌ = Not yet implemented

### Notes
At this point I'm not worried about paginating results and will providingt he complete list for list queries (get messages, get users, etc..)

If I do implement pagination It'll likely be the **get messages** API for obvious reasons.

In order to keep costs down messages will be given a TTL so they will only be stored for a period of time.


## Local Development Notes
### Starting local MongoDB Daemon
- Ensure the following conf file `mongod.conf` is located at `/usr/local/etc/`
*You may need to make sure the directories defined at `storage.dbPath` and `systemLog.path` exist*
```
processManagement:
   fork: true
net:
   bindIp: localhost
   port: 27017
storage:
   dbPath: data/db
systemLog:
   destination: file
   path: "data/log/mongodb/mongod.log"
   logAppend: true

```
### Starting mongod
```
mongod --config /usr/local/etc/mongod.conf
```