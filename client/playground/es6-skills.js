const person={
    name:'rakesh',
    skills:['js','py','java'],
    //inside a method the value of this will still refer to the current object
    //inside a method, if there is an arrow function inside that function ,value of this will still be current object
    details:function() {
        this.skills.forEach( (skill) => {
            console.log(`${this.name} knows ${skill}`)
        })
    },
    

    profile:function(){
        function someFunction() {
            console.log(this.name)
        }
        someFunction()
        return this
    }
}