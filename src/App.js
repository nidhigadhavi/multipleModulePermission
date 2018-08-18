import React, { Component } from 'react';
import _ from 'lodash';
import logo from './logo.svg';
import './App.css';
import {ModuleList} from './permissionList.js';

class App extends Component {

   
  constructor(props){
    super(props);
    this.doWork = this.doWork.bind(this);
  }

  doWork(data){
    console.log("into the working function");
    var permissionArray = [];
    _.forEach(ModuleList , function(value, key){
      if(_.has(data, key)){
        _.forEach(value, function(valueInner, keyInner){
          _.filter(data[key] , function(v, k){
            if(v == keyInner){ permissionArray.push(valueInner);}
          })
        })
      }
    });
    
    if(_.indexOf(permissionArray , false) == -1){
      console.log("permitted");
      return true;
    }
    else{
      console.log("Not permitted");
      return false;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <div>
            Click To get OutPut  :  <button 
            onClick={()=>this.doWork({
              "Deshboard": ["Read" ,"Import"],
              "Entity" : ["Manage"]
              }) }>Click</button>
          </div>
            {this.doWork({
              "Deshboard": ["Read"]
              
              }) && 
          <p><h2>You aare having all the permissions....</h2></p>
            }
        </p>
      </div>
    );
  }
}

export default App;
