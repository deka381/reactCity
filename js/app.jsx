import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar.jsx';
document.addEventListener('DOMContentLoaded', function(){

  class App extends React.Component{
    constructor(props) {
      super(props);
      this.state={
        inputText:"",
      }
    }

    handleCityClick=event=>{
      event.preventDefault()
      console.log("btn city");
    }

    handleSearchValue = event =>{
      const inputText = event.target.value;

      this.setState({
        inputText:inputText,
      })
    }


    render() {
      return  <div className="container">
                <SearchBar  handleCityClick={this.handleCityClick} 
                            inputText={this.state.inputText}
                            handleSearchValue={this.handleSearchValue}
                />
                <section>
                  <h1>okokoko</h1>
                </section>
              </div>  

    }
  }

  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );
});