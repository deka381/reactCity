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
        potentialCountries: [],
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
              currencies:e.currencies,
              flag:e.flag,
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

     getCountryPropositions = () => {
            if (this.state.inputText.length >= 3 && this.state.potentialCountries.length > 0) {
                const countryPropositions = this.state.potentialCountries.map((country, i, array) => {
                    return <li
                        className="input-container__list-item"
                        onClick={event => this.handleCountryClick(country, i)}
                        key={country + i}>
                        {country}
                    </li>;
                });
                return countryPropositions
            } else if (this.state.inputText.length >= 3 && this.state.potentialCountries.length < 1) {
                console.log("Nie ma takiego kraju.");
                const noCountry = (
                    <li
                        className="input-container__list-item input-container__list-item--not-found">
                        Cannot find such country. Try another name! ;)
                    </li>
                );
                return noCountry
            }
        };

    handleCountryClick=country=>{
        const allCountries = this.state.allCountries.slice();
        const chosenCountry = allCountries.filter((e)=>{
          return e.country[0].name.includes(country);
        }).map(function (e){
          return{
            name: e.country[0].name,
            capital: e.country[0].capital,
            region: e.country[0].region,
            currencies:e.country[0].currencies,
            flag:e.country[0].flag,
          }
        });
      this.setState({
        chosenCountry:chosenCountry,
        showContent:true,
        showPotentialCountries: false,
      })
    }

    handleSearchChange = event =>{
      const inputText = event.target.value;
      const allCountries = this.state.allCountries.slice();

      const potentialCountries= allCountries.filter((e)=>{
         return e.country[0].name.toLowerCase().includes(inputText.toLowerCase());
      }).map(function (e){
        return e.country[0].name
      });

      this.setState({
        inputText:inputText,
        potentialCountries:potentialCountries,
        showPotentialCountries:true,
      })
    }

    render() {
      return  <div className="container">
                <SearchBar  handleCountryClick={this.handleCountryClick} 
                            inputText={this.state.inputText}
                            allCountries={this.state.allCountries}
                            handleSearchChange={event => this.handleSearchChange(event)}
                            showPotentialCountries={this.state.showPotentialCountries}
                            getCountryPropositions={this.getCountryPropositions}

                />
                <Content    chosenCountry={this.state.chosenCountry}
                            showContent={this.state.showContent}
                />
              </div>  

    }
  }

  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );
});