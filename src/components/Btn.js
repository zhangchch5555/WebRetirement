import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Btn extends Component {
    render(){
        let children = this.props.children;
        return (
            <a onClick={ (e) => { e.preventDefault();this.props.btnClick() } }>{ children }</a>
        )
    }
}

Btn.propTypes = {
    children: PropTypes.node.isRequired,
    btnClick: PropTypes.func.isRequired,
}

export default Btn