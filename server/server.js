const http = require("http");
const fs = require("fs");
const path = require("path");

// Main
const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, {'content-type': "text/html"});
        var html = fs.readFileSync(path.join(__dirname, 'client.html'), "utf8");
        res.end(html);
    }

    if (req.method === "POST" && req.url === "/api/units") {
        let body = '';
    }
})

/**
 * 
 * @param {number} unit 
 */
function convert(unit){

}

server.listen(3000, () => {console.log("Server runs on port 3000");});