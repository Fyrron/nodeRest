#!/bin/bash
docker-compose exec api sh -c "cd /usr/src/app/src/api/v1 && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all"