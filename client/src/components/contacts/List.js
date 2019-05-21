import React from 'react' 
import { Link } from 'react-router-dom'
import axios from '../../config/axios'
import loading from '../images/spinner.gif'

class ContactList extends React.Component {
    constructor(props){
        super(props) 
        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        axios.get('/contacts')
            .then(response => this.setState(() => ({ contacts: response.data })))
            .catch(err=>console.log(err))
    }
    render() {
        return (
            <div>
                {
                    this.state.contacts.length === 0 ? <img src={loading} alt='img'/>: (
                        <div> 
                            <h2>Listing Contacts - {this.state.contacts.length} </h2>
                            <h4>list of contacts</h4>
                            <ul>    
                                {
                                    this.state.contacts.map(contact => {
                                        return (
                                            <li key={contact._id}> <Link to={`/contacts/${contact._id}`}>{contact.name}</Link> </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    ) 
                }

                <Link to="/contacts/new">Add Contact</Link>

            </div>
        )
    }
}

export default ContactList