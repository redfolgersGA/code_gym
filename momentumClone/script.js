// require('dotenv').config()
// console.log(process.env)

// import os
// from dotenv import load_dotenv
// load_dotenv()

// API_KEY = os.getenv('PROJECT_API_KEY')

const express = require('express');
const app = express()
require('dotenv').config()

console.log(process.env, "is process.env")

app.listen(8080, () => console.log('listening at port 8080'))

app.use(express.static('public'))


console.log("script loaded")












// SAMPLE OF SERVER
// ----------------------------------------------------------------------------

// //Load HTTP module
// const http = require("http");
// const hostname = '127.0.0.1';
// const port = 3000;

// //Create HTTP server and listen on port 3000 for requests
// const server = http.createServer((req, res) => {

//   //Set the response HTTP header with HTTP status and Content type
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// //listen for request on port 3000, and as a callback function have the port listened on logged
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });














