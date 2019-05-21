import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class NoteShow extends React.Component {
    constructor(props){
        super(props)
        this.state={
            note:{}
        }
        this.handleDelete=this.handleDelete.bind(this)
    }
    handleDelete (){
         //console.log(this)
         const id=this.props.match.params.id
         const confirmDelete=window.confirm('Are you sure?')
         if(confirmDelete) {
             axios.delete(`http://localhost:3005/notes/${id}`)
             .then(()=>this.props.history.push('/notes'))
             .catch(err => console.log(err))
         }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        console.log(id)
        axios.get(`http://localhost:3005/notes/${id}`)
        .then(response => this.setState(()=> ({ note:response.data}) ))
        .catch(err =>console.log(err))
    }


    render(){
        return(
            <div>
                
                <h2>{this.state.note.title}</h2>
                <h2>{this.state.note.body}</h2>
                <h3>{this.state.note.tags}</h3>
                <p>{this.state.note.createdAt}</p>

                <Link to= '/notes'>Back </Link> 
                <button onClick={this.handleDelete}> Delete </button>
                <Link to={`/notes/edit/${this.props.match.params.id}`}>Edit</Link>
            </div>
        )
    }
}
export default NoteShow