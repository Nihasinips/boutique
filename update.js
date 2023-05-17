const http = require('http');
const qs = require('querystring');
const collection = require("./mongo2");

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', async () => {
            const formData = qs.parse(body);
            const email = formData.email;
            const pass = formData.pass;
            collection.findOneAndUpdate({ email: email}, { $set: { pass: pass } }).then((result) => {
                if (!result) {
                    throw err;
                    
                }
                else {
                    console.log("updated");
                    res.end("Password changed successfully")
                }
            })
            // res.end("user signed in successfully");
        });
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('not correct');
    }
});

server.listen(5550, () => {
    console.log('Server running on port 3010');
});