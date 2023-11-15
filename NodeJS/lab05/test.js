const {send} = require('./m05_PIA')
const nodemailer = require("nodemailer");
const http = require('http');
const smtpTransport = require('nodemailer-smtp-transport');
var fs = require('fs');
var url = require('url');
const { parse } = require('qs');

let sender = 'student2003bstu@gmail.com';
let pass = 'nanhsqhsndlbyfxe';

let http_handler = (req,resp)=>{
    resp.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if  (req.method =='GET'){
        resp.end(fs.readFileSync('./index2.html'));
    }
    else if (url.parse(req.url).pathname =='/send' && req.method =='POST'){
        let body ='';
        req.on('data', chunk => {body += chunk.toString();});
        req.on('end', () => {
            const formData = new URLSearchParams(body.toString());
            const receiver = formData.get('receiver');
            const message = formData.get('message');
            send(sender, receiver, pass, message);
            resp.end(`<h1>OK: receiver: ${receiver} </br> message : ${message} </h1>`);
        });
    }
    else resp.end('<h1>Not support</h1>');
}



http.createServer(http_handler).listen(5000);
console.log('Server running at http://localhost:5000/');

