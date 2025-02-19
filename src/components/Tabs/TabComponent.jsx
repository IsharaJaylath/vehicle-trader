import React, { useState } from 'react';
import '../../assets/styles/Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('summary');

  return (
    <div className="tabs">
      <div className="tab-buttons">
        <button onClick={() => setActiveTab('summary')} className={activeTab === 'summary' ? 'active' : ''}>Vehicle Summary</button>
        <button onClick={() => setActiveTab('reviews')} className={activeTab === 'reviews' ? 'active' : ''}>Reviews</button>
      </div>
      <div className="tab-content">
        {activeTab === 'summary' && <p>Vehicle summary details go here.</p>}
        {activeTab === 'reviews' && <p>Customer reviews go here.</p>}
      </div>
    </div>
  );
};

export default Tabs;