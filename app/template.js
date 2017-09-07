export default ({ body, title }) => (`
  <!DOCTYLE html>
  <html>
    <head>
      <title>${title}</title>
      <link href="./assets/styles.css" rel="stylesheet">
    </head>

    <body>
      <div id="root">${body}</div>
    </body>
    
    <script src="/assets/bundle.js"></script>
    <script>
      
      console.log('${body}')
      // console.log(document.getElementbyId("root").innerHTML)
    </script>
  </html>
`);