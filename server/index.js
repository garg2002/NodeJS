const http = require("http"); //http module
const hostname = "localhost"; //host name
const PORT = 3002; //port number

//Creating Server
const server = http.createServer((req, res) => {
  //Home Page
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Home Page");
  }
  //About Page
  else if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("About Page");
  }
  //Services Page
  else if (req.url === "/services") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Services Page");
  }
  //Contact Page
  else if (req.url === "/contact") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Contact Page");
  }
  //Products Page
  else if (req.url === "/products") {
    //Product details  fetched from API

    //API Options
    const options = {
      hostname: "fakestoreapi.com",
      path: "/products/1",
      method: "GET",
    };
    //API Request
    const apiReq = http.request(options, (apiRes) => {
      apiRes.on("data", (data) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(data.toString());
      });
    });
    //API Error
    apiReq.on("error", (error) => {
      console.error(error);
    });
    apiReq.end();
  }
  //Rest-> Error Page
  else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Error Page");
  }
});
//Server Listening
server.listen(PORT, () => {
  console.log("Server is running on port 3006", hostname);
});
