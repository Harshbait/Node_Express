import { faker } from '@faker-js/faker';
import mysql from 'mysql2'

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(), // before version 9.1.0, use userName()
        faker.internet.email(),
        faker.internet.password(),
    ] 
}

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'Fakerdb',
  password: 'Tonday@067'
});

//Inserting data
let q = "INSERT INTO user (id, username, email, password) VALUES ?";

let data = []

for(let i = 0; i < 100; i++) {
    data.push(getRandomUser())
}

try {
  connection.query(q, [data], (err, result) => {
    if (err) throw err;
    console.log(result)
    // console.log(result[0])
    // console.log(result[1])
  })
} catch (err) {
  console.log(err)
}

connection.end();
