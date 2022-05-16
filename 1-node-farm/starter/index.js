const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT");
  } else if (pathName === "/api") {
    fs.readFile("./dev-data/data.json", "utf-8", (err, data) => {
      const productData = JSON.parse(data);
      res.writeHead(200, {
        "Content-type": "application/json"
      });
      console.log(productData);
      res.end(data);
    });
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world"
    });
    res.end("<h2>nonono</h2>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
