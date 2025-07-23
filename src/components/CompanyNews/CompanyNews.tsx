import React, { useEffect, useState } from 'react';
import newsData from '../../data/news.json';
import './CompanyNews.css';

const CompanyNews: React.FC = () => {
    const [news, setNews] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        setNews(newsData);
    }, []);

    const filteredNews = news.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="company-news">
            <h2>Company News</h2>
            <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <ul>
                {filteredNews.map((item) => (
                    <li key={item.id} className="news-item">
                        <h3>{item.title}</h3>
                        <p>{item.date}</p>
                        <p>{item.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyNews;