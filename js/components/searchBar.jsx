import React from 'react';
class SearchBar extends React.Component {
	
	render() {
    	
		return <header>	
					<div className="searchBar-container">
		                <span className="searchBar-container__title">Get Country Info!</span>
		                <span className="searchBar-container__description">Type country name you want to discover...</span>
		                <div className="input-container">
	                   		<input
		                        className="input-container__input"
		                        type="text"
		                        onChange={this.props.handleSearchChange}
		                        value={this.props.searchValue}
		                        placeholder="Ex: Poland, Italy, Brazil..."
	                    	/>
	                    	<ul
	                        	className="input-container__list"
	                       		style={{display: this.props.showPotentialCountries ? "block" : "none"}}
	                    	>
	                        	{this.props.getCountryPropositions()}
	                    	</ul>
                		</div>
            		</div>
				</header>
	}
}

 export default SearchBar;