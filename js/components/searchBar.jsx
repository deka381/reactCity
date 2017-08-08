import React from 'react';
class SearchBar extends React.Component {
	
	render() {
    	
		return <header>	
					<div className="search-container">
		                <span className="search-container__title">Get Country Info!</span>
		                <span className="search-container__desc">Type country name you want to discover...</span>
		                <div className="input-container">
	                   		<input
		                        className="input-container__input"
		                        type="text"
		                        onChange={this.props.handleSearchChange}
		                        value={this.props.searchValue}
		                        placeholder="Ex: Poland, Germany, France..."
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