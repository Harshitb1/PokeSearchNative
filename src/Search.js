
import React from 'react';
import { View, Text } from 'react-native';
import { Header, Item, Icon, Input, Button } from 'native-base';
import SearchBody from './SearchBody';
import PokeLoader from './PokeLoader';

class Search extends React.Component {

	state = {
		onCall: true,
		pokeSearch: ""
	}

	flipCall = () =>{
		this.setState({onCall: !this.state.onCall});
	}

	renderBody = () =>{
		if(this.state.onCall){
			return(
				<PokeLoader/>
			)
		}
		else{
			return(
				<SearchBody flipCall={this.flipCall} data={this.state.data}/>
			)
		}
	}

	searchPoke = () =>{

	}

	render() {
		return (
			<View style={{ flex: 1 }}>
			 	<Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" onPress={this.searchPoke}/>
                        <Input 
                        	value={this.state.pokeSearch}
                        	placeholder="Search Pokemon"
                        	onChangeText={(pokeSearch) => this.setState({pokeSearch})}
                        />
                    </Item>
				</Header>
				{this.renderBody()}
			</View>

		)
	}
}

export default Search;