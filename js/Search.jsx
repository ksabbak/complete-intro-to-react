import React, { Component } from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

class Search extends Component {
	// This is the traditional way to do it - no babel plugin needed. The way you did it for gnomad
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		searchTerm: 'this is some sort of debug statement'
	// 	};

	// 	// this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
	// }

	state = {
		searchTerm: ''
	};

	// This is not standard - a non-standard bind we need the babel plugin about class properties. May be standard now. Keep an eye out. Arrow functions actually just never create a new context so there's no need to bind, so that's exciting.
	handleSearchTermChange = event => {
		this.setState({ searchTerm: event.target.value });
	};

	render() {
		return (
			<div className="search">
				<header>
					<h1>svideo</h1>
					<input
						onChange={this.handleSearchTermChange}
						type="text"
						placeholder="Search"
						value={this.state.searchTerm}
					/>
				</header>
				<div>
					{preload.shows
						.filter(
							show =>
								`${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
						)
						.map(show => <ShowCard key={show.imdbID} show={show} />)}
				</div>
			</div>
		);
	}
}

// {...show} will pass in everything in show instead of having to write title={show.thing}. This is kind of gross and messy because you tend to pass around extra shit and who needs that?

// key should be a unique thing that allows for less dom rerendering and that'll be good for performance.

export default Search;
