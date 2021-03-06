import React, { Component } from 'react';
import './TodoItem.css';
import classNames from 'classnames';

class TodoItem extends Component {

    render() {
        const { item, onClicked } = this.props;
        return (
            <div onClick={onClicked} className={classNames('TodoItem', {
                'TodoItem-complete': item.isComplete
            })}>
                <p>{ item.title }</p>
            </div>
        );
    }
}

export default TodoItem;