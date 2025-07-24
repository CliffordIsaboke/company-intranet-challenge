import React, { useState } from 'react';
import './IntranetHome.css'; // We'll create this next

const IntranetHome = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Sample data - replace with real data later
  const companyNews = [
    {
      id: 1,
      title: "Company Retreat Announcement",
      date: "2023-10-01",
      content: "Join us for our annual company retreat on October 15th! A great opportunity to relax and bond with your colleagues.",
      icon: "🏕️"
    },
    {
      id: 2,
      title: "New Office Policies",
      date: "2023-09-28",
      content: "Please review the updated office policies that will take effect next month. Your feedback is appreciated.",
      icon: "📋"
    }
  ];

  const employees = [
    {
      id: 1,
      name: "Jane Doe",
      role: "Project Manager",
      email: "jane.doe@example.com",
      phone: "555-0102",
      isEmployeeOfMonth: true
    },
    {
      id: 2,
      name: "John Smith",
      role: "Software Engineer",
      email: "john.smith@example.com",
      phone: "555-0101"
    }
  ];

  const quickLinks = [
    { name: "Documents", icon: "📂" },
    { name: "Calendar", icon: "📅" },
    { name: "Directory", icon: "👥" },
    { name: "HR Portal", icon: "🏛️" },
    { name: "IT Helpdesk", icon: "🛠️" },
    { name: "Cafeteria Menu", icon: "🍴" }
  ];

  return (
    <div className={`intranet-container ${darkMode ? 'dark-mode' : ''}`}>
      {/* Header */}
      <header className="intranet-header">
        <div>
          <h1>Good Morning! Welcome to the Intranet</h1>
          <p className="current-date">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        <div className="header-controls">
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="dark-mode-toggle"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
          <div className="user-profile">
            <span className="user-avatar">👤</span>
            <span>Clifford Isaboke</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="dashboard-grid">
        {/* Company News Section */}
        <section className="news-card">
          <h2><span className="section-icon">📰</span> Company News</h2>
          <div className="news-list">
            {companyNews.map(item => (
              <article key={item.id} className="news-article">
                <div className="news-icon">{item.icon}</div>
                <div className="news-content">
                  <h3>{item.title}</h3>
                  <p className="news-date">{item.date}</p>
                  <p>{item.content}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="quicklinks-card">
          <h2><span className="section-icon">⚡</span> Quick Links</h2>
          <div className="quicklinks-grid">
            {quickLinks.map((link, index) => (
              <a key={index} href="#" className="quicklink">
                <span className="link-icon">{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>
        </section>

        {/* Employee Spotlight */}
        <section className="employee-card">
          <h2><span className="section-icon">🌟</span> Employee Spotlight</h2>
          {employees.filter(e => e.isEmployeeOfMonth).map(employee => (
            <div key={employee.id} className="employee-spotlight">
              <div className="employee-avatar">👩‍💼</div>
              <h3>{employee.name}</h3>
              <p className="employee-role">{employee.role}</p>
              <div className="employee-contact">
                <span>✉️ {employee.email}</span>
                <span>📞 {employee.phone}</span>
              </div>
              <div className="employee-badge">Employee of the Month</div>
            </div>
          ))}
        </section>

        {/* Upcoming Events */}
        <section className="events-card">
          <h2><span className="section-icon">📅</span> Upcoming Events</h2>
          <div className="event">
            <div className="event-date">Oct 15</div>
            <div className="event-details">
              <h3>Company Retreat</h3>
              <p>All day • Mountain Lodge</p>
            </div>
          </div>
          <div className="event">
            <div className="event-date">Oct 20</div>
            <div className="event-details">
              <h3>Training Session</h3>
              <p>2:00 PM • Conference Room A</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IntranetHome;