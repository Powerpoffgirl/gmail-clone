import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <Router>
    <div className="app">
      <Header/>
      <div className="app-body">
        <Sidebar/> 
        <Switch>
          <Route path="/mail">
            <Mail/>
          </Route>
          <Route path='/'>
            <EmailList/>
          </Route>          
        </Switch>
      </div>
      
      {sendMessageIsOpen && <SendMail/>}
      
    </div>
    </Router>

  );
}

export default App;
