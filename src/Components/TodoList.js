import React, { Component } from 'react';

import ListItem from './ListItem';

class TodoList extends Component {
    constructor(props) { super(props); }  
    render() {
    let list = this.props.data.map((item, i) =>
        <ListItem index={i} key={i} text={item.text} completed={item.completed}
        updateItem={this.props.updateItem} removeItem={this.props.removeItem}/> 
    );
    return (<ul>{list}</ul>);
    }
}

export default TodoList;