### Node.js REST API using Express, MySQL, Sequelize and Docker.

Features done:

- Docker enviroment

- Created simple user CRUD

- Middleware route validation with express-validator

- JWT auth

- Sequelize 

Currently working on:

- Some way of passing env variables to config.json 

Features to implement:

- Revoke jwt token after user create another

- Better way to send json responses

- Implement ESLint

- Landing page with react

- User creation page

- User login


### Please generate the private key on the api/v1 directory

openssl genrsa -out private.key 2048


### Run migrations

./scripts/migrate.sh