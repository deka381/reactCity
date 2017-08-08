import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar.jsx';
import Content from './components/content.jsx';
document.addEventListener('DOMContentLoaded', function(){

    var url = 'https://restcountries.eu/rest/v2/all';

  class App extends React.Component{
    constructor(props) {
      super(props);
      this.state={
        inputText:"",
        allCountries:[],
        showContent:false,
        chosenCountry:null,
        showPotentialCountries: false,
      }
    }


    componentDidMount() {
      fetch(url)
      .then(r => r.json())
      .then(data =>{
        const allCountries = data.map((e)=>{
          return {
            country:[
              {
              name:e.name,
              capital:e.capital,
              region:e.region,
              timezone:e.timezones,
              currencies:e.currencies,
              }
            ]
          }
        });
        this.setState({
          allCountries:allCountries,
        })
      }
    )

    }

    handleCityClick=country=>{
        const allCountries = this.state.allCountries.slice();
        const chosenCountry = allCountries.filter((e)=>{
          return e.country[0].name.includes(country);
        }).map((e)=>{
          return{
            name: e.country[0].name,
            capital: e.country[0].capital,
            region: e.country[0].region,
            timezone:e.country[0].timezones,
            currencies:e.country[0].currencies,
          }
        });
      this.setState({
        chosenCountry:chosenCountry,
        showContent:true,
        showPotentialCountries: false,
      })
    }

    handleSearchValue = event =>{
      const inputText = event.target.value;

      this.setState({
        inputText:inputText,
      })
    }


    render() {
      return  <div className="container">
                <SearchBar  handleCityClick={this.handleCountryClick} 
                            inputText={this.state.inputText}
                            handleSearchValue={this.handleSearchValue}
                />
                <Content />
              </div>  

    }
  }

  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );
});