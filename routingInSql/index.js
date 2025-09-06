const { faker } = require('@faker-js/faker');
const express = require("express");
const path = require("path");
const mysql = require('mysql2');
const { render } = require('ejs');
const app = express();
const methodOverride = require('method-override');
const PORT = 8000;

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'Routing',
  password: 'Tonday@067'
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ]
}


//Home Route
app.get('/', (req, res) => {
  let q = ` SELECT count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result[0]["count(*)"]);
      let count = result[0]["count(*)"];
      res.render('home.ejs', { count })
    })
  } catch (err) {
    console.log(err)
    res.send("Error was found!!")
  }
})

//Show user Route
app.get('/user', (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, user) => {
      if (err) throw err;
      // console.log(result)
      res.render('show', { user })
    })
  } catch (err) {
    console.log(err)
    res.send("Error was found!!")
  }
})


//Edit Route
app.get('/user/:id/edit', (req, res) => {
  let { id } = req.params;
  // console.log(id);
  let q = `SELECT *FROM user WHERE id='${id}'`

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let usr = result[0];
      res.render('edit', { usr })
    })
  } catch (err) {
    console.log(err)
    res.send("Error was found!!")
  }
})

// Update Route
app.patch('/user/:id', (req, res) => {
  let { id } = req.params;
  let q = `SELECT *FROM user WHERE id='${id}'`
  let { password: userPassword, username: newUser } = req.body;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let usr = result[0];
      if(userPassword != usr.password) {
        res.send('Wrong Password')
      }
      else {
        let q2 = `UPDATE user SET username = '${newUser}' WHERE id = '${id}'`;
        connection.query(q2, (err, result)=> {
          if (err) throw err;
          res.redirect('/user'); 
        })
      }
      
    })
  } catch (err) {
    console.log(err)
    res.send("Error was found!!")
  }
})

app.listen(PORT, () => {
  console.log(`Server is listing on ${PORT}`)
})

