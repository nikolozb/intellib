const bodyParser = require('body-parser')
const express = require('express')
const expressHbs = require('express-handlebars')
const router = require('./routes/routes')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

app.engine(
	'handlebars',
	expressHbs.engine({
		extname: 'handlebars',
		defaultLayout: 'main-layout',
	})
)
app.set('view engine', 'handlebars')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(router)

app.listen(PORT, () => console.log('Server OK'))
