import React from 'react';
import EditForm from './components/EditForm';
import Form from './components/Form';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import Posts from './components/Posts';


const Routes = props => (
  <Switch>
    <Route
      path="/add"
      component={() => (
        <Form
          handleChange={props.handleChange}
          title={props.title}
          img={props.img}
          name={props.name}
          content={props.content}
          submitPost={props.submitPost}
        />
      )}
    />
    <Route
      path="/edit/:id"
      component={() => (
        <EditForm
          handleChange={props.handleChange}
          title={props.title}
          img={props.img}
          name={props.name}
          content={props.content}
          editPost={props.editPost}
          submitPost={props.submitPost}
        />
      )}
    />
    <Route path='/' exact component={Login}/>
    <Route path='/posts' component={Posts}/>
  </Switch>
);

export default Routes;
