import React, { Component } from 'react';

class SidebarItem extends Component {
    render () {
        return (
            <li className="item__block">
                <a href="#" className="sidebar__item">{this.props.title}</a>
            </li>
        )
    }
}

export default SidebarItem;