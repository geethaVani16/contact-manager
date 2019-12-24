//npm install --save express
const express=require('express')
const cors=require('cors')
//npm install --save mongoose
const { mongoose }=require('./config/database')

const {contactsRouter}=require('./server/controllers/ContactsController')
const {notesRouter} = require('./server/controllers/NotesController')
const {usersRouter}=require('./server/controllers/UsersControllers')
const { testRouter } =require('./server/controllers/testController')
const app=express()

const port= process.env.PORT || 3005

app.use(express.json())
app.use(cors())

app.get('/',function(req,res){
    res.send('<h2> welcome to contact manager</h2>')
})

app.use('/contacts',contactsRouter)
app.use('/users',usersRouter)
app.use('/astrovara',testRouter )

app.use('/notes',notesRouter)

app.listen(port,function(){
    console.log('listing on port',port)
})