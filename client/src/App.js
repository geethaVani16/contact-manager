import React from 'react';
import { BrowserRouter,Route,Link,Switch } from "react-router-dom"
import Axios from './config/axios';

import Home from './components/layout/Home'
import ContactList from './components/contacts/List'
import ContactNew from "./components/contacts/New"
import ContactShow from './components/contacts/Show'
import ContactEdit from './components/contacts/Edit'

import UserRegister from "./components/authentication/Register"
import UserLogin from './components/authentication/Login'



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isAuthenticated: !!localStorage.getItem('token')
    }
    this.handleIsAuthenticated=this.handleIsAuthenticated.bind(this)
  }

  handleIsAuthenticated(bool){
    this.setState( () => ({
      isAuthenticated:bool
    }))
  }

  render()  {
    return (
          <BrowserRouter>
                  <div>

                   <nav className='navbar nav-success bg-primary navbar-expand-sm'>
                     <div className='container'>
                        <Link to="/"  className="text-dark"> Home </Link> | 
                        <Link to="/contacts"  className="text-dark"> Contacts </Link>
                        {
                          this.state.isAuthenticated && <Link to='/users/logout' className="text-dark" > Logout</Link>
                        }
                        {
                          !this.state.isAuthenticated && (
                            <div>
                              <Link to='/users/register'  className="text-dark"> Register </Link>
                              <Link to='/users/login'  className="text-dark"> Login </Link>
                            </div>
                          )
                        }
                     </div>
                   </nav>
                    

                    <Switch>
                      <Route path="/" component={Home} exact={true} />
                      <Route path="/contacts" component={ContactList} exact={true} />
                      <Route path='/contacts/new' component={ContactNew} extact={true}/>
                      <Route path='/contacts/edit/:id'component={ContactEdit} exact={true}/>
                      <Route path='/contacts/:id'component={ContactShow}/>


                      <Route path='/users/register' component={UserRegister}/>
                      <Route path='/users/login' render={ () => <UserLogin handleIsAuthenticated={this.handleIsAuthenticated}/>}/>
                      <Route path='/users/logout' component={()=> {
                        localStorage.clear()
                        Axios.defaults.headers['X-auth']=null
                        return (
                          <div>
                            <p>you have successfully logged out</p>
                          </div>
                        )
                      }} />
                      
                    </Switch>
                    
                </div>
        </BrowserRouter>
      )
  }
}
export default App;
