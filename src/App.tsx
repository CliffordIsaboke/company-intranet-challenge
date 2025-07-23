import React from 'react';
import './css/styles.css';
import Calendar from './components/Calendar/Calendar';
import Greeting from './components/Greeting/Greeting';
import CompanyNews from './components/CompanyNews/CompanyNews';
import QuickLinks from './components/QuickLinks/QuickLinks';
import EmployeeDirectory from './components/EmployeeDirectory/EmployeeDirectory';
import TeamCollaboration from './components/TeamCollaboration/TeamCollaboration';
import Widgets from './components/Widgets/Widgets';
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle';

const App = () => {
    return (
        <div className="app-container">
            <DarkModeToggle />
            <Greeting />
            <CompanyNews />
            <QuickLinks />
            <EmployeeDirectory />
            <Calendar />
            <TeamCollaboration />
            <Widgets />
        </div>
    );
};

export default App;