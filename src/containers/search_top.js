import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPirate, setTerm } from '../actions/index';


class SearchTop extends Component {
    constructor(props) {
        super(props);

        this.state = { term:'' }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event){
        this.setState({ term: event.target.value });
    }
    onFormSubmit(event) {
        event.preventDefault();
        this.props.setTerm(this.state.term);
        this.props.fetchPirate(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="form-inline">
                <input
                    className="form-control mr-sm-3"
                    placeholder="Search"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                    <span className="input-group-btn">
                        <button 
                            type="submit" 
                            className="btn btn-outline-success my-2 my-sm-0">Search</button>
                    </span>
            </form>   
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchPirate, setTerm }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchTop)