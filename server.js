const express = require('express')
const path = require('path')
const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey  = fs.readFileSync('/etc/letsencrypt/live/breeze-crimea.ru/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/breeze-crimea.ru/fullchain.pem', 'utf8');
const credentials = {key: privateKey, cert: certificate};


const app = express()
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(443);

app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, 'build')))

console.log("Static ready");

app.get('*', (req, res) => {
            console.log(`===NEW HTTPS REQUEST===`);
            console.log(`url: ${req.url}`);
            console.log(`Remote Ip: ${req.socket.remoteAddress}`);
            console.log(`User Agent: ${req.headers['user-agent']}`);
            console.log(`===END REQUEST===`);

    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


http.createServer((req, res) => {
            console.log(`===NEW HTTP REQUEST===`);
            console.log(`url: ${req.url}`);
            console.log(`Remote Ip: ${req.socket.remoteAddress}`);
            console.log(`User Agent: ${req.headers['user-agent']}`);
            console.log(`===END REQUEST===`);

            res.writeHead(301, {Location: `https://breeze-crimea.ru/`});
            console.log("redirect");
            res.end();
            // TODO redirect to secure entry point
}).listen(80);
