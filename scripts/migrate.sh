#!/bin/bash
docker-compose exec api sh -c "cd /usr/src/app/src && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all"