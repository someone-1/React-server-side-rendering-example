import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Hello from './Hello.js';

const app = express();


app.set('view engine', 'pug');
app.set('views', './')
function handleRender(req, res) {
    
    const html = ReactDOMServer.renderToString(
         <Hello name="World" />
    );
    // fs.readFile('./index.html', 'utf8', function (err, file) {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     const document = file.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);
    console.log(html);
        // res.send(document)
    res.render('index', {title:'server-side-rendering', content: html});
    // });
}
 
// Serve built files with express static files middleware
app.use('/built', express.static(path.join(__dirname, 'built')));
// Serve normal requests with our handleRender function
app.get('/', handleRender);
app.listen(3001);
console.log('=== Go to http://localhost:3000 ===');