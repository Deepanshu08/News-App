import React,{Component} from 'react';
import News from './News';
import './App.css';

class App extends Component{
  render(){
      return (
        <div className="App">

         <div class="header">
            <button id="b">Show Latest News</button>
          </div>

        <div class="row">
          <div class="column1">
            <b>Filter News</b>
            <a href="" id="a1">Reset</a>
            <hr/>

          <form>
            <p>LANGUAGE</p>
            <select id="s1">
              <option>Select</option>
            </select>
            <p>COUNTRY</p>
            <select id="s1">
              <option>Select</option>
            </select>
            <p>START DATE</p>
              <input type='date' placeholder='mm/dd/yyyy'/>
            <p>END DATE</p>
              <input type='date' placeholder='mm/dd/yyyy'/>
            <br/><br/>
            <button id="b1">Show News</button>
          </form>
          </div>

        <div class="column2">
          <News/>
        </div>
      </div>

    </div>
  );
}
}

export default App;