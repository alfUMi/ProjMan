import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <ul className="sidebar__item"><a href="/">Dashboard</a></ul>
                <ul className="sidebar__item">Analytics</ul>
                <ul className="sidebar__item">Projects</ul>
                <ul className="sidebar__item">Tasks</ul>
                <ul className="sidebar__item">Tracking</ul>
                <ul className="sidebar__item">History</ul>
                <ul className="sidebar__item">Inbox</ul>
                <ul className="sidebar__item">Settings</ul>
            </div>
        )
    }
}

export default Sidebar;