# GraphQL Book Search
A refactored version of a book search engine using GraphQL instead of a RESTful API

## Description
This is a simple book search website with options to add/remove books on a saved list after signing up and logging in.

It originally functioned using a REST API structure but was refactored to use GraphQL for database interactions.

Prior to sign-up/login the site allows users to serach for books through the Google Books API and then the returned books matching the search term are visible with the only interaction being the ability to clink the provided link to the book on the Google Books website.

After sign-up/login searched books have an added button which allows them to be added to a "Saved Books" list. All of a users saved books can be viewed by clicking the "See Your Books" link at the top right of the page.

On the users saved books page all of the users saved books are displayed and have an added button to remove them from the list.

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Technologies](#Technologies)
* [Preview](#Preview)

## Installation
No installation is necessary as the app is deployed to Heroku. However as noted in the description after visiting the site it can be installed as a standalone app.

## Usage
App is on Heroku at https://serene-temple-19244.herokuapp.com/


## Technologies
This application was made using

![Javascript](https://img.shields.io/badge/-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)

![MongoDb](https://img.shields.io/badge/-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)

![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)

![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

![Heroku](https://img.shields.io/badge/-Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)


## Preview

### Screenshots
![Search Page](./images/preview1.jpg)

![Saved Books Page](./images/preview2.jpg)