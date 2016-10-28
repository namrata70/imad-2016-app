var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg');
var config = {
    user:'namrata70',
    database:'namrata70',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:'process.emv. DB_PASSWORD'
};

var app = express();
app.use(morgan('combined'));
var articles  = 
{
    'article-one':{
    title:'article-one! kritika rai dwivedi',
    heading:'article-one',
    date:'oct 16,2016',
    content:
           `<p>
                this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.
            </p>
            <p>
                this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.
            </p>
            <p>
                this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.
            </p>`
},
    'article-two':{
    title:'article-two! kritika rai dwivedi',
    heading:'article-two',
    date:'oct 16,2016',
    content:"this is the content for my second article."
},
    'article-three':{
    title:'article-three! kritika rai dwivedi',
    heading:'article-three',
    date:'oct 16,2016',
    content:"this is the content for my third article."
}
};
function createTemplate(data)
{
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;
var htmlTemplate =`
<html>
    <head>
        <title>
             ${title}
        </title>
        <meta name = "viewport" content = "width-device-width, initial -scale-1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
      <div class = "container">
        <div>
            <a href = "/">Home</a>
        </div>
        <hr/>
        <h3>
          ${heading}   
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
       </div>
    </body>
</html>`;
return htmlTemplate;
}
 app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool = new Pool (config);
app.get('/test-db', function(req, res)
{//make a select request
// return a response with the result
  pool.query('SELECT * FROM test', function(err, result)
  {
      if(err)
      {
          res.status(500).send(err.toString());
      }
      else
      {
          res.send(JSON.sringify(result));
      }
  })  
});

app.get('/:articleName', function (req, res) {
   var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
