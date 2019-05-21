import React from 'react'
class NoteForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            body:'',
            tags:[]
        }
        //bind method
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleTitleChange = (e) => {
        const title=e.target.value
        console.log(title)
        this.setState(()=>({title}))

    }
    handleBodyChange = (e) => {
        const body=e.target.value
        console.log(this)
        console.log(body)
        this.setState(()=>({body}))
    }
    handleTagsChange = (e) => {
        const tags=e.target.value
        console.log(tags)
        this.setState(()=>({tags}))
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps,"next props in editform")
        const {title,body,tags}=nextProps.note
        this.setState( () => ({
            title,body,tags
        }))
    }
    handleSubmit (e) {
        e.preventDefault()
        const formData={
            title:this.state.title,
            body:this.state.body,
            tags:this.state.tags
        }
        console.log(formData,"Form.js")
        this.props.handleSubmit(formData)

        //for inserting data we have clear the form
        this.setState(()=>({
            title:'', body:'',tags:''
        }))

    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Add Note</h3>
                    <label>
                        title :
                        <input type="text" value={this.state.title} onChange={this.handleTitleChange}/>
                    </label><br/>
                    <label>
                        Body :
                        <input type="text" value={this.state.body} onChange={this.handleBodyChange}/>
                    </label><br/>
                    <label>
                        Tags :
                        <input type="text" value={this.state.tags} onChange={this.handleTagsChange}/>
                    </label><br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}
export default NoteForm