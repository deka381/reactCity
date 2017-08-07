import React from 'react';

class SearchBar extends React.Component {
	

	render() {
		return <header>	
					<form>
						<label className="labelText">
								Wpisz nazwę miasta 
								<input 	type="text" 
										onChange={this.props.handleSearchValue}
										placeholder="Warsaw,Berlin,New York..."
								/>
						</label>
						<label className="labelBtn">
							<input 	type="submit" value="Szukaj" 
									onClick={this.props.handleCityClick}
							/>
						</label>
					</form>
					<span>{this.props.inputText}</span>
				</header>
	}
}

 export default SearchBar;