[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Social Network API

## Description
This project uses MongoDB to create a backend for a social network where users can make friends, post, and react with each other. We use a MVC in order to create the database, and routes to access it.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Links](#links)
4. [Screenshots](#screenshots)
5. [License](#license)
6. [Questions](#questions)

## Installation
- Clone the repo down to your local machine
- copy the database schema into your Dbeaver to create the database
- Install modules by using `npm i` in your terminal
- Then youre good to move on to the usage

## Usage
- When installed, type `npm start` in the terminal
- Navigate to http://localhost:3001/ in a browser or with a program like insomnia
- Use the routes provided in the code to view/change/delete from the local database
- This is only back end so the changes will be in the database

### User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

### Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Links

[Dashboard Link](https://github.com/ThatBallinGuy/Social-Network-API)

[Demo Link](https://drive.google.com/file/d/1I4sD4ZR2cm6x2aV-kfQO-TbP0rZ-7IEt/view)

## License
Licensed under [MIT License](https://opensource.org/licenses/MIT)

## Questions
For any questions, contact me at:
- Github: [ThatBallinGuy](https://github.com/ThatBallinGuy)
- Email: Tballin2000@hotmail.com
  