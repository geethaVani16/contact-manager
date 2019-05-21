import React from 'react' 
import { Link } from 'react-router-dom'
import axios from 'axios'
import loading from '../images/spinner.gif'

class NoteList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            notes:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3005/notes')
        .then(response => this.setState(()=> ({notes:response.data})))
    }
    render(){
        return(
            <div>
                <h2>Listing of Notes-{this.state.notes.length}</h2>
                { 
                    this.state.notes.length===0 ? (<img src={loading} alt='img'/>):(
                    <ul>
                        {
                            this.state.notes.map(note => {
                            return(
                            <li key={note._id}> <Link to={`/notes/${note._id}`} >{note.title}</Link> </li>
                            )})
                        }

                    </ul>)
                     
                } <br/>
                
                <Link to={"/notes/new"}>Add the new Note</Link>
            </div>
        )
    }

} 
export default NoteList