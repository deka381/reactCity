import React from 'react';

class Content extends React.Component {
	

	render() {
				if (this.props.showContent === false) {
         		   return null;
         		}

         		const chosenCountry = this.props.chosenCountry;

		return 	<section>	
				 	<div className="content-container">
                <h1 className="content-container__title">{chosenCountry[0].name}</h1>
                <ul>
                	<li>Country : {chosenCountry[0].name}</li>
                	<li>Capital : {chosenCountry[0].capital}</li>
                	<li>Region: {chosenCountry[0].region}</li>
                	<li>Money : {chosenCountry[0].currencies[0].name}</li>
                </ul>
                <span>Flag:</span>
                <img src={chosenCountry[0].flag} alt="placeholder+image"/>
            </div>
				</section>
	}
}

 export default Content;