const http = require("http")
// use env variable to define tcp/ip port with a default
const PORT = process.env.PORT || 8080
//create our server object
const server = http.createServer()
// We define a function that runs in response a request event
server.on("request", (request, response) => {
  // handle request based on method then URL
  response.statusCode = 200
  response.write("http://lk.teletiepbx.ru/auth/1677749959d66630b964624ed7ad264743dd1a1d6a64006e955df7d5.02838343/")
  response.end()
})
// get the server to start listening
server.listen(PORT, err => {
  // error checking
  err ? console.error(err) : console.log(`listening on port ${PORT}`)
})
