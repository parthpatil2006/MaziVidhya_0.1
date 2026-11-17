import React from 'react';
import './StudyMaterials.css';

const resources = [
  {
    id: 'question-bank',
    title: 'Question Bank',
    category: 'Practice by subject',
    description: 'Browse official subject-wise question banks and paper patterns published by the university.',
    href: 'https://nmu.ac.in/en-us/Student-Corner/Examination/Question-Bank',
    action: 'Browse question bank',
  },
  {
    id: 'previous-papers',
    title: 'Previous Exam Question Papers',
    category: 'Past examinations',
    description: 'Open the university archive to find and download previous examination papers.',
    href: 'https://nmu.ac.in/en-us/Student-Corner/Examination/Previous-Exam-Question-Paper',
    action: 'Browse previous papers',
  },
];

const filters = [
  { id: 'all', label: 'All resources' },
  { id: 'question-bank', label: 'Question banks' },
  { id: 'previous-papers', label: 'Previous papers' },
];

const StudyMaterials = () => {
  const [activeFilter, setActiveFilter] = React.useState('all');
  const visibleResources = resources.filter(
    (resource) => activeFilter === 'all' || resource.id === activeFilter,
  );

  return (
    <section className="study-materials-section" id="study-materials" aria-labelledby="study-materials-title">
      <div className="container study-materials-container">
        <div className="study-materials-heading">
          <p className="eyebrow">Student resources</p>
          <h2 className="section-title" id="study-materials-title">Question papers &amp; practice</h2>
          <p className="study-materials-intro">
            Find official KBCNMU study material and previous papers. Downloads are hosted by the university.
          </p>
        </div>

        <div className="resource-filters" role="group" aria-label="Filter study resources">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`resource-filter${activeFilter === filter.id ? ' is-active' : ''}`}
              aria-pressed={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="materials-grid" aria-live="polite">
          {visibleResources.map((resource, index) => (
            <article className="material-card" key={resource.id}>
              <div className="resource-card-topline">
                <span className="resource-number">0{index + 1}</span>
                <span className="resource-category">{resource.category}</span>
              </div>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <a href={resource.href} target="_blank" rel="noopener noreferrer" className="download-btn">
                {resource.action}<span aria-hidden="true"> ↗</span>
                <span className="sr-only"> (opens the official KBCNMU website in a new tab)</span>
              </a>
            </article>
          ))}
        </div>
        <p className="official-note">Official source: <a href="https://nmu.ac.in/en-us/Student-Corner" target="_blank" rel="noopener noreferrer">KBCNMU Student Corner</a></p>
      </div>
    </section>
  );
};

export default StudyMaterials;
