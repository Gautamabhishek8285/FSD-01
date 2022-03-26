// const express = require('express') 
// const app = express()
// const bodyParser = require('body-parser')
// const { check, validationResult } = require('express-validator')
// const urlencodedParser = bodyParser.urlencoded({ extended: false})
// app.set('view engine', 'ejs')


//   app.get("/", (req, res) => {
//       res.sendFile(__dirname + '/index.html');
//   })

//   app.get("/submit", [
//     check('numA').notEmpty().withMessage('Number A cannot be empty'),
//     check('numB').notEmpty().withMessage('Number B cannot be empty'),
//   ], (req, res) => {
//     const errors = validationResult(req);
//     if(!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() })
//     }
//     else { 
//         res.send("The Addition of two numbers are:  "+ (parseInt(req.query.numA) + parseInt(req.query.numB)));
//     }
//   })

//   app.get("/concatenate", (req, res) => {
//     res.send("concatenate String:  "+ req.query.strA + req.query.strB)
//   })


//   app.get("/register", (req, res) => {
//     res.render('register')
//   })

//   app.post("/register", urlencodedParser, [
//     check('username').notEmpty().withMessage('UserName cannot be empty'),
//     check('email').notEmpty().withMessage('Email cannot be empty'),
// ], (req, res) => {
//     const errors = validationResult(req);
//     if(!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() })
//     }
//     else {
//       res.json(req.body)
//   }
//   })

// app.post("/register", urlencodedParser, (req, res) => {
//   res.json(req.body)
// })




const employee = require('./controller/employeeController')

module.exports = function(app) {
  employee(app);
}