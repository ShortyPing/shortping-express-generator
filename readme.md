# ShortPing-Express-Generator

## Description

Generates you an basic express app with JWT Authentication

## Installation

`npm i shortping-express-generator -g`



## Usage

`shortping-express-generator <folder>`

## Authorization Tutorial

```javascript

const Auth = require("../_security/Auth")

// Add Middlewares to Express Function

app.get("/example", Auth, Auth.checkJWT, (req, res) => {
    // The order of the Middlewares are important
})

```