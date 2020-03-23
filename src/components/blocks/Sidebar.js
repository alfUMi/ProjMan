import React, { Component } from 'react';

import SidebarItem from './SidebarItem';

class Sidebar extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="sidebar">
                    <ul>
                        <SidebarItem title="Dashboard"/>
                        <SidebarItem title="Analytics"/>
                        <SidebarItem title="Projects"/>
                        <SidebarItem title="Tasks"/>
                        <SidebarItem title="Tracking"/>
                        <SidebarItem title="History"/>
                        <SidebarItem title="Inbox"/>
                        <SidebarItem title="Settings"/>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;