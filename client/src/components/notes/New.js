import React from 'react'
import axios from 'axios'
import NoteForm from './Form'

class NoteNew extends React.Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(formData) {
        console.log('new component called in form component')
        axios.post('http://localhost:3005/notes',formData)
        .then( () => this.props.history.push("/notes"))
        .catch(err => { console.log(err) } )
    }

    render(){
        return(
            <div>
                <NoteForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
export default NoteNew