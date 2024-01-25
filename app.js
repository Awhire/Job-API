require('dotenv').config()
require('express-async-errors')


// extra security packages
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')



const express = require('express')
const app = express()

// connectDB
const connectDB = require('./db/connect')
// Authenticate User
const authenticateUser = require('./middleware/authentication')

// routers
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')

// error handler
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


app.set('trust proxy', "100.20.92.101");
// Middleware
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())
app.use(
    rateLimiter({
        windowMs: 15 * 60 * 1000,
        limit: 100,
}))



// routes
// app.use('/', (req, res) => { 
//     res.send('<h1>jobs api</h1> <a href="#"> Swagger Ui </a>')
//  })
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRouter)



app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)



const port = process.env.PORT || 3000

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Server listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()