const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')));

const morgan = require('morgan');
app.use(morgan('combined'))

/**
 * view engine template
 * 
 */
const handlebars  = require('express-handlebars');
app.engine('hbs', handlebars({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname,'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})