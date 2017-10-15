import React, { Component } from 'react';
import SearchTop from '../containers/search_top';
import FileList from '../containers/file_list';

export default class App extends Component {
  render() {
    return ( 
       	<div>
			<nav className="navbar navbar-dark bg-dark">
				<a className="navbar-brand"><img className="logo-img" src={require('../assets/pirate.png')}  /></a>
				<SearchTop />
			</nav>
			<FileList />
       	</div>

    );
  }
}
