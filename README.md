# CRUD API with NodeJS and REDIS
This is a simple CRUD API with NodeJS, MongoDB, and REDIS.

## NodeJS Installation
You can install NodeJS by downloading the latest binaries for your desired operating system from their [official download page](https://nodejs.org/en/download/current/).

## Redis Installation

### Mac
![redis](https://res.cloudinary.com/ichtrojan/image/upload/v1535585936/Screenshot_2018-08-30_at_12.38.41_AM_rvrkp5.png)

you can install redis uning [homebrew](http://brew.sh).

run `brew install redis` in terminal to install redis on your mac using homebrew, assuming you have homebrew installed.

### Linux

You can learn how to install redis on Linux [here](https://community.pivotal.io/s/article/How-to-install-and-use-Redis-on-Linux)

### Windows

You can learn how to install redis on Windows [here](https://redislabs.com/ebook/appendix-a/a-3-installing-on-windows/a-3-2-installing-redis-on-window/)

## Setting up

![npm start](start.png)

* clone the repo
* change directory
* run `npm install`
* run `npm start`
* visit http://localhost:3000

## Body Parameters
The API expect the following Parameters: </br>
`userName` of type string </br>
`accountNumber` of type number </br>
`emailAddress` of type string </br>
`identityNumber` of type number </br>

## Using Postman
Make sure post is set to `x-www-form-urlencoded`
* add user (POST): `/users`
* delete user (DELETE): `/users/{id}`
* get all user (GET): `/users`
* get a user by account number (GET): `/users/accNum/{accountnumber}`
* get a user by identity number (GET): `/users/accNum/{identitytnumber}`
* update a user (PUT): `/users/{id}`
### Add user
![add user](add_user.png)
### Get all users
![get all users](get_users.png)
### Get a user by account number
![get a user by account number](get_user_by_accountnumber.png)
### Get a user by identity number
![get a user by identity number](get_user_by_identitynumber.png)
### Update a user
![update a user](edit_user.png)
### Delete a user
![delete a user](delete_user.png)