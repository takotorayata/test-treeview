import React, { Component } from 'react';
import { NodeContainer } from './';
import { connect } from 'react-redux';
import './Tree.css';

class Tree extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('Inside tree.', this.props.Children);
    }

    render() {
        const root = this.props.root;
        console.log('root', root);
        return (
            <div>
                <div className="tree">
                    <NodeContainer key={root.id} {...root} />
                </div>
            </div>
        );
    }
}

Tree = connect(state => {
    return {
        root: Object.values(state).filter(n => n.value === 'Category')[0]
    }
})(Tree);


export default Tree;