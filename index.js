//npm install --save express
const express=require('express')
//npm install --save mongoose
const {mongoose}=require('./config/database')

const {contactsRouter}=require('./app/controllers/ContactsController')
const {notesRouter} = require('./app/controllers/NotesController')
const app=express()
const port= process.env.PORT || 3000


app.use(express.json())

app.use('/contacts',contactsRouter)

app.use('/notes',notesRouter)

app.listen(port,function(){
    console.log('listing on port',port)
})