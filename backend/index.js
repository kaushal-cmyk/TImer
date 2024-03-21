import express from 'express'


let expressApp = express()

let port = 8000
expressApp.listen(port, ()=> {
    console.log(`express application is listening at port 8000`)
})