
# Projet - Forum

Ce projet personnel est un projet de forum en utilisant Mern Stack (MongoDB - Express - React - Node). Des technologies JavaScript.
## Authors

- [@_Dup62](https://www.github.com/dup62)


## Tech Stack

**Client:** React, Css

**Server:** Node, Express

**DataBase:** MongoDB


## Run Locally

Clone the project

```bash
  git clone https://github.com/dup62/MERN-Forum-APP
```

Go to the project directory

```bash
  cd MERN-Forum-APP
```

- Open 2 terminals

For the Backend

```bash
  cd backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node server
```

And for the frontend

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## Environment Variables

Pour exécuter ce projet, vous devrez ajouter les variables d'environnement suivantes à votre fichier .env

`PORT`

`MONGO_URI`


## API Reference

#### Get all users

```http
  GET /api/users
```

#### Get a specific user

```http
  GET /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

