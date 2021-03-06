import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TodoItem.css';
import classNames from 'classnames';
import checked from '../img/checked.svg';
import checkComplete from '../img/checkComplete.svg';

class TodoItem extends Component {

    render() {
        const { item, onClicked } = this.props;
        let imgCheck;
        if (item.isComplete) {
            imgCheck = checked;
        } else {
            imgCheck = checkComplete;
        }
        return (
            <div className={classNames('TodoItem', {
                'TodoItem-complete': item.isComplete
            })}>
                <img onClick={onClicked} src={imgCheck} width={32} height={32}/>
                <p>{ item.title }</p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    item : PropTypes.shape({
        title : PropTypes.string.isRequired,
        isComplete : PropTypes.bool.isRequired
    }),
    onClick : PropTypes.func
}

export default TodoItem;