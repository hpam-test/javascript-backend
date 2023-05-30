# javascript-backend

Steps to run the project
1. in the terminal run `npm i`
2. create a new file `.env` and use the env variables from `.example.env` and use your postgres connection configuration
3. in the terminal run `npx sequelize db:create`
4. in the terminal run `npx sequelize db:migrate`
5. in the terminal run `npm run dev`
6. your server will be running in the port you declared in `.env`
