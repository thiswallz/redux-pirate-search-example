import React, { Component } from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPirate } from '../actions/index';
import OrderLinkItem from '../components/order';

class FileList extends Component {
    constructor(props) {
        super(props);

        this.state = { order:'name', sort:'asc' };
        this.onOrderData = this.onOrderData.bind(this);
    }
    onOrderData(order, event) {
        event.preventDefault();
        if(!this.props.activeTerm){
            return;
        }
        const sort = this.state.sort=='asc' ? 'desc': 'asc';
        this.setState({ sort, order });
        this.props.fetchPirate(this.props.activeTerm, order, sort);
    }
    renderList(fileData) {
        return ( 
          <tr key={shortid.generate()}>
            <th scope="row">{fileData.size} </th>
            <td> 
                <span className="badge badge-pill badge-secondary m-2">{fileData.category.name}</span> 
                {fileData.name} 
            </td>
            <td><a href={fileData.magnetLink} className="btn btn-outline-danger">Download</a></td>
            <td>{fileData.seeders} </td>
            <td>{fileData.leechers} </td>
          </tr>   
        );
    }
    render() {   
        return (
            <table className="table table-hover"> 
                <thead className="thead-inverse">
                    <tr>
                    <th><OrderLinkItem onOrderData={this.onOrderData} sort={this.state.sort} name="size" current={this.state.order} /></th>
                    <th><OrderLinkItem onOrderData={this.onOrderData} sort={this.state.sort} name="name" current={this.state.order} /></th>
                    <th>Torrent</th>
                    <th>SE</th>
                    <th>LE</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.files.map(this.renderList)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ files, activeTerm }){
    return { files, activeTerm }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchPirate }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FileList)