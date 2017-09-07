import React from 'react';
import { renderToString } from 'react-dom/server';
import template from './template';
import App from './components/App';
import routes from './components/routes';
import {match , RouterContext} from 'react-router';

export default function render(request, response) {
    
//   var props = { title: 'Universal React' };

  match({
        routes: require('./components/routes.js'),
        location: request.url
    }, function(error, redirectLocation, renderProps){
        
        if (renderProps) {
            var appString = renderToString(
                <RouterContext {...renderProps}/>
            );
            let html = template({
              body: appString,
              title: 'from the server'
            })
            console.log(html);
            response.send(html);
        } else {
            response.status(404).send('Not Found');
        }
    });
}