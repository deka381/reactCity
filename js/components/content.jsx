import React from 'react';

class Content extends React.Component {
	

	render() {
				if (this.props.showContent === false) {
         		   return null;
         		}

         		const chosenCountry = this.props.chosenCountry;

		return 	<section>	
				 	<div className="stats-container">
                <h1 className="stats-container__title">{chosenCountry[0].name}</h1>
                <ul>
                	<li>{chosenCountry[0].name}</li>
                	<li>{chosenCountry[0].capital}</li>
                	<li>{chosenCountry[0].region}</li>
                	<li>{chosenCountry[0].currencies[0].name}</li>
                </ul>
                <img src={chosenCountry[0].flag} alt="placeholder+image"/>
            </div>
				</section>
	}
}

 export default Content;