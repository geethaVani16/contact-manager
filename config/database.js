const mongoose=require('mongoose')

const CONNECTION_URL=process.env.MONGODB_URL||'mongodb://geetha:secret12345@cluster0-shard-00-00-jbdsm.mongodb.net:27017,cluster0-shard-00-01-jbdsm.mongodb.net:27017,cluster0-shard-00-02-jbdsm.mongodb.net:27017/contact-manager?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'


//DB configuraton 
mongoose.Promise=global.Promise
mongoose.connect('CONNECTION_URL',{ useNewUrlParser: true })
.then(function(){
    console.log('connected to DB')
})
.catch(function(){
    console.log('oops!!! Something went wrong in DB connection')
}) 

module.exports={
    mongoose
}