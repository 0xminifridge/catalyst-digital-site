// Load Node modules
var express = require('express');

// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));

app.set('PORT', process.env.PORT || 8080);

// Port website will run on
app.listen(app.get('PORT'), () => console.log(`Node server listening on port ${app.get('PORT')}!`));