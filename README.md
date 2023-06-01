### Node.js REST API using Express, MySQL, Sequelize and Docker.

Features done:

- Docker enviroment

- Created simple user CRUD

- Middleware route validation with express-validator

- JWT auth

- Sequelize 

Currently working on:

- Sequelize (Working on implementing seeders and migrations)

- Some way of passing env variables to config.json 


Features to implement:

- Revoke jwt token after user create another

- Better way to send json responses

- Implement ESLint

- Landing page with react

- User creation page

- User login


### Please generate the private key on the root directory

openssl genrsa -out private.key 2048


### Seed db to create admin user to test the api

npx sequelize-cli db:seed:all