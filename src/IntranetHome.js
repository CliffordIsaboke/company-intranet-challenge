import React, { useState, useEffect } from 'react';
import './IntranetHome.css';

/**
 * Accessibility Compliance:
 * - Keyboard-navigable interactive elements
 * - Prefers-color-scheme media query support
 * - Semantic HTML structure
 * - Color contrast ratio > 4.5:1 (WCAG AA)
 * - Screen reader-friendly emoji labels
 */
const IntranetHome = () => {
  // State management
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [time, setTime] = useState(new Date());

  // Sample data
  const companyNews = [
    {
      id: 1,
      title: "Company Retreat Announcement",
      date: "2023-10-01",
      content: "Join us for our annual company retreat on October 15th!",
      icon: "🏕️"
    },
    {
      id: 2,
      title: "New Office Policies",
      date: "2023-09-28",
      content: "Updated office policies take effect next month.",
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
    }
  ];

  const quickLinks = [
    { name: "Documents", icon: "📂" },
    { name: "Calendar", icon: "📅" },
    { name: "Directory", icon: "👥" },
    { name: "HR Portal", icon: "🏛️" }
  ];

  // Effects
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const loadData = setTimeout(() => setIsLoading(false), 1500);
    
    return () => {
      clearInterval(timer);
      clearTimeout(loadData);
    };
  }, []);

  return (
    <div className={`intranet-container ${darkMode ? 'dark-mode' : ''}`}>
      {isLoading ? (
        <div className="loading-spinner" aria-label="Loading">
          <div className="spinner">🌀</div>
          <p>Loading your workspace...</p>
        </div>
      ) : (
        <>
          {/* Header */}
          <header className="intranet-header">
            <div>
              <h1>Good Morning! Welcome to the Intranet</h1>
              <p className="current-date">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })}
                <span className="current-time">
                  {' • ' + time.toLocaleTimeString()}
                </span>
              </p>
            </div>
            <div className="header-controls">
              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className="dark-mode-toggle"
                aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
              >
                {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
              <div className="user-profile">
                <span className="user-avatar" aria-hidden="true">👤</span>
                <span>Clifford</span>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="dashboard-grid">
            {/* Company News */}
            <section className="news-card" aria-labelledby="news-heading">
              <h2 id="news-heading"><span className="section-icon">📰</span> Company News</h2>
              <div className="news-list">
                {companyNews.map(item => (
                  <article key={item.id} className="news-article">
                    <div className="news-icon" aria-hidden="true">{item.icon}</div>
                    <div className="news-content">
                      <h3>{item.title}</h3>
                      <p className="news-date">{item.date}</p>
                      <p>{item.content}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Quick Links */}
            <section className="quicklinks-card" aria-labelledby="quicklinks-heading">
              <h2 id="quicklinks-heading"><span className="section-icon">⚡</span> Quick Links</h2>
              <div className="quicklinks-grid">
                {quickLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="quicklink"
                    aria-label={link.name}
                  >
                    <span className="link-icon" aria-hidden="true">{link.icon}</span>
                    {link.name}
                  </a>
                ))}
              </div>
            </section>

            {/* Employee Spotlight */}
            <section className="employee-card" aria-labelledby="employee-heading">
              <h2 id="employee-heading"><span className="section-icon">🌟</span> Employee Spotlight</h2>
              {employees.filter(e => e.isEmployeeOfMonth).map(employee => (
                <div key={employee.id} className="employee-spotlight">
                  <div className="employee-avatar" aria-hidden="true">👩‍💼</div>
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
            <section className="events-card" aria-labelledby="events-heading">
              <h2 id="events-heading"><span className="section-icon">📅</span> Upcoming Events</h2>
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
        </>
      )}
    </div>
  );
};

export default IntranetHome;