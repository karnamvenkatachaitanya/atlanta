import React from 'react';
import './Careers.css';

const Careers = () => {
  const jobOpenings = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      description: 'Join our frontend team to build responsive and accessible healthcare applications.'
    },
    {
      title: 'Healthcare Data Analyst',
      department: 'Data Science',
      type: 'Full-time',
      location: 'Hybrid',
      description: 'Analyze healthcare data to derive insights and improve patient outcomes.'
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      type: 'Full-time',
      location: 'Remote',
      description: 'Design intuitive user experiences for healthcare professionals and patients.'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      description: 'Build and maintain our cloud infrastructure and deployment pipelines.'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      type: 'Full-time',
      location: 'Hybrid',
      description: 'Lead product development for our healthcare technology solutions.'
    },
    {
      title: 'Quality Assurance Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      description: 'Ensure the quality and reliability of our healthcare software solutions.'
    }
  ];

  const benefits = [
    { icon: '💻', title: 'Remote Work', description: 'Flexible remote work options' },
    { icon: '🏥', title: 'Health Insurance', description: 'Comprehensive medical coverage' },
    { icon: '📚', title: 'Learning Budget', description: 'Annual budget for professional development' },
    { icon: '🏖️', title: 'Unlimited PTO', description: 'Flexible time off policy' },
    { icon: '👨‍👩‍👧‍👦', title: 'Family Leave', description: 'Generous parental leave policy' },
    { icon: '💰', title: 'Competitive Salary', description: 'Industry-leading compensation' }
  ];

  return (
    <div className="careers">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="container">
          <div className="careers-hero-content">
            <h1>Join Our Mission</h1>
            <p>Help us transform healthcare through technology. Build solutions that make a real difference in people's lives.</p>
            <button className="btn-primary">View Open Positions</button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Why Work With Us</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Current Openings</h2>
          <div className="jobs-grid">
            {jobOpenings.map((job, index) => (
              <div key={index} className="job-card">
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span className="department">{job.department}</span>
                    <span className="type">{job.type}</span>
                    <span className="location">{job.location}</span>
                  </div>
                </div>
                <p className="job-description">{job.description}</p>
                <div className="job-actions">
                  <button className="btn-primary">Apply Now</button>
                  <button className="btn-secondary">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section section-light">
        <div className="container">
          <div className="culture-content">
            <h2>Our Culture</h2>
            <p>
              At our company, we foster a culture of innovation, collaboration, and continuous learning. 
              We believe in empowering our team members to do their best work while maintaining a healthy 
              work-life balance. Join us in our mission to make healthcare better for everyone.
            </p>
            <div className="culture-stats">
              <div className="culture-stat">
                <h3>50+</h3>
                <p>Team Members</p>
              </div>
              <div className="culture-stat">
                <h3>15+</h3>
                <p>Countries</p>
              </div>
              <div className="culture-stat">
                <h3>4.8</h3>
                <p>Team Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;