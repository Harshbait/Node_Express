import { faker } from '@faker-js/faker';

import mysql from 'mysql2'

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'firstwork',
  password: 'Tonday@067'
});

let a = "SHOW TABLES";

//Inserting data
let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let user = [['123778829', 'Haadjdd--rHar', 'Ayuuiiiiuhs890@yahuu.com', 'Tondao@067'],
['1237784829', 'Haadjddff--rHar', 'RiAyuuiiiiuhs890@yahuu.com', 'TonPondao@067']];
try {
  connection.query(q, user, (err, result) => {
    if (err) throw err;
    console.log(result)
    // console.log(result[0])
    // console.log(result[1])
  })
} catch (err) {
  console.log(err)
}

connection.end();

let getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}