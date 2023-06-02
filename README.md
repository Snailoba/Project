# Outfit planner (event planner)

Outfit planner, now event planner, is capable of simple event planning, listing, and editing. There's a calendar provided for you to check the dates and then make plans.

## Disclaimer

Once you finish registering your account and/or loggin in, the first page you see won't be the event creation page. You should see a purple bar on top of the page, there's an orange hexagon labelled menu, click on that and go to calendar. If you for whatever reason don't want to/can't use that method, click on the box containing the date, with the label "Date". It's right next to another box labelled "Weather", don't click that one, and it's above the "Today's outfit" box with a bunch of Eula from genshin impact images, also don't click that. The only fully functioning part of my website is in the calendar/event page. I might come back in the summer break to finish the rest of it, if I feel like it.

## Features

| Feature | Description                |
| :-------- | :------------------------- |
| `login/register` | register and login to the website |
| `create event` | create an event with title and description |
| `show user's events` | show all the events of the current user |
| `show event's detail` | pop up showing the detail of a created event |
| `edit event` | edit the details of an event |
| `delete event` | delete an event |

## Technology used

-   **Front-end** -> React
-   **Back-end** -> Node js, Express js
-   **Database** -> MariaDB
-   Others -> Sweetalert2

---

## To run the frontend and backend

Frontend -> ./front
```bash
  npm run dev
```
Backend -> ./back
```bash
  npm run dev
```

## API Endpoints

**Post**

### Register

`
POST /reg
`

#### Request body

```
{
    "username": "Realperson",
    "password": "Realpassword555"
}
```

#### Success response

```
{
    "success": true,
    "data": {
        "message": "Registration success"
    }
}
```

### Log in

`
POST /log
`

#### Request body

```
{
    "username": "Sample",
    "password": "Sampalina3"
}
```

#### Success response

```
{
    "success": true,
    "message": "login success",
    "user": {
        "id": 2,
        "username": "Sample",
        "password": "$2a$10$x0S7U5z.8FczNYaCfauE.u3fkVtOeOjEBbdfWEbOKVXHaYB95di9q"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJuYW1lIjoiU2FtcGxlIiwiaWF0IjoxNjg1Njk0NDU4LCJleHAiOjE2ODU3ODA4NTh9.obc1ZFDThJnGd8UhTzJEXVRTzGU6T3nWg9zjGTCE5mA"
}
```

### Create event

`
POST /eve
`

#### Request body

```
{
    "userId" : "2",
    "titleInput": "Final test",
    "descriptionInput": "Not really lol"
}
```

#### Success response

```
{
    "success": true,
    "data": {
        "message": "Event successfully created"
    }
}
```

**Get**

### Retrieve user's id

`
GET /check
`

#### No request body

#### Success response

```
{
    "success": true,
    "message": "User is logged in with ID: 2",
    "decoded": 2
}
```

### Display logged in user's events

`
GET /eve?userId=${decodedId}
`

#### Query param

```
http://localhost:2000/eve?userId=2
```

#### Success response

```
{
    "success": true,
    "data": {
        "rows": [
            {
                "id": 1,
                "owner": "2",
                "title": "Official test...ing?",
                "description": "Buy 1 get get get NOTHING"
            },
            {
                "id": 4,
                "owner": "2",
                "title": "AYO THIS WORKS NOW",
                "description": "ISHSHSHSHSHS"
            },
            {
                "id": 5,
                "owner": "2",
                "title": "Should be even better now",
                "description": "Because I made it auto update...sort of anyways"
            },
            {
                "id": 13,
                "owner": "2",
                "title": "Final test",
                "description": "Not really lol"
            }
        ]
    },
    "message": "Events successfully fetched"
}
```

**Patch**

### Edit event

`
PATCH /eve
`

#### Request body

```
{
    "titleEdit": "Editing works",
    "descriptionEdit": "Oompa loompa dance montage",
    "idEdit": 13
}
```

#### Success response

```
{
    "success": true,
    "data": {
        "message": "Event updated successfully"
    }
}
```

**Delete**


### Delete event

`
DELETE /eve?id=${id}
`

#### Query param

```
http://localhost:2000/eve?id=13
```

#### Success response

```
{
    "success": true,
    "data": {
        "message": "Deleted event successfully"
    }
}
```
