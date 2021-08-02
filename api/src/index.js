const express = require('express')
const app = express()

//database
require('./database')

const cors = require('cors')
const morgan = require('morgan')

app.set('port', process.env.PORT || 8000)
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/', require('./routes/main.routes'))

app.listen(app.get('port'), () => {
    console.log('Server is running')
})
