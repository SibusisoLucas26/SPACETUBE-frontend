// Dashboard.js
import React from 'react';
import './Dashboard.css';

const categories = [
    { label: 'Sports', query: 'sports' },
    { label: 'Music', query: 'music' },
    { label: 'Comedy', query: 'comedy' },
    { label: 'News', query: 'news' },
    { label: 'Gaming', query: 'gaming' },
    { label: 'Education', query: 'education' },
];

const Dashboard = ({ onCategorySearch }) => {
    return (
        <div className="dashboard">
            <h2 className="dashboard-title">Browse by Category</h2>
            <div className="category-buttons">
                {categories.map((category) => (
                    <button
                        key={category.label}
                        className="category-button"
                        onClick={() => onCategorySearch(category.query)}
                    >
                        {category.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
