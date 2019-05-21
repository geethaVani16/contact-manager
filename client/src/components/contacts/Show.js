import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'

class ContactShow extends React.Component {
    constructor(props){
        super(props)
        this.state={
            contact:{}
        }
        this.handleDelete=this.handleDelete.bind(this)
    }
    handleDelete(){
        const confirmDelete=window.confirm('Are you sure?')
        if(confirmDelete){
            axios.delete(`/contacts/${this.state.contact._id}`)
            .then(()=> this.props.history.push('/contacts'))
            .catch(err=>window.alert(err))
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`/contacts/${id}`)
        .then(response => this.setState(()=>({contact:response.data}) ))
    }
    render(){
        return(
           <div>
                <div className="modal-dialog modal-sm">
                <div className="card-header" ><h2>Name-{this.state.contact.name}</h2></div>
                
                    <div className="card-body text-primary">
                        <p>Email-{this.state.contact.email}</p>
                        <p>mobile-{this.state.contact.mobile}</p>
                    </div>

                <button onClick={this.handleDelete}>Delete</button>
                <Link to="/contacts">Back</Link>
                <Link to={`/contacts/edit/${this.state.contact._id}`}> edit</Link>
                </div>
           </div>
        )
    }
}
export default ContactShow

{/* <div class="card border-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-primary">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div> */}