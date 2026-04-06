import { useState, useEffect } from 'react';
import './App.css';
import './sr-only.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const projectsData = [
    {
      title: 'Completemovieexp',
      description: 'AI-powered movie recommendation engine using local facial emotion detection to curate TMDB films via real-time expression mapping.',
      url: 'https://github.com/hari2629-p/Completemovieexp',
      tech: ['React', 'Face-API', 'TMDB']
    },
    {
      title: 'PLAUGE',
      description: 'Comprehensive academic plagiarism detection system utilizing TF-IDF vectorization and cosine similarity against a multi-source paper corpus.',
      url: 'https://github.com/hari2629-p/PLAUGE',
      tech: ['Python', 'TF-IDF', 'NLP']
    },
    {
      title: 'S2HI',
      description: 'Intelligent diagnostic platform combining a React frontend and a Django ML backend to identify learning disabilities via adaptive gamification.',
      url: 'https://github.com/hari2629-p/S2HI',
      tech: ['React', 'Django ML']
    },
    {
      title: 'Inspetto',
      description: 'Law enforcement surveillance tool using computer vision, OCR, and hardware beacons to automatically detect and log tampered license plates.',
      url: 'https://github.com/hari2629-p/Inspetto2.0',
      tech: ['CV', 'OCR', 'Hardware']
    },
    {
      title: 'Voyage Vista',
      description: 'Unified urban transport optimizer that dynamically integrates public transit and ride-sharing to map out sustainable, cost-effective travel routes.',
      url: 'https://github.com/hari2629-p/Voyage_Vista',
      tech: ['React', 'Maps API']
    }
  ];

  const experienceData = [
    {
      company: 'FOSS CEAL',
      totalDuration: '2 yrs 11 mos',
      letter: 'F',
      roles: [
        { title: 'Chief Foss Ambassador', date: 'Jul 2025 - Present · 10 mos', desc: 'Leadership, Team Leadership and outreach initiatives.' },
        { title: 'Media Manager', date: 'Jun 2024 - Jun 2025 · 1 yr 1 mo', desc: 'Led the digital media and design team, creating engaging promotional content for technical events, workshops, and FOSS campaigns. Designed and managed posters, reels, and event branding.' },
        { title: 'Volunteer', date: 'Jun 2023 - May 2024 · 1 yr', desc: 'Actively contributed to the planning and execution of open source awareness programs and technical workshops.' }
      ]
    },
    {
      company: 'ISTE Student Chapter',
      totalDuration: '1 yr 10 mos',
      letter: 'I',
      roles: [
        { title: 'Vice Chairman', date: 'Jun 2025 - Present · 11 mos', desc: 'Serving as the key representative and strategic lead of the ISTE Student Chapter, overseeing the planning and execution of all student-centered technical development events.' },
        { title: 'Event Coordinator', date: 'Jul 2024 - Jun 2025 · 1 yr', desc: 'Coordinated and executed technical/non-technical events, workshops, and competitions. Played a key role in ideation and logistics.' }
      ]
    },
    {
      company: 'IEEE SB CEAL',
      totalDuration: '1 yr',
      letter: 'I',
      roles: [
        { title: 'Secretary of IAS', date: 'May 2025 - April 2026 · 1 yr', desc: 'Spearheading operations of the IEEE IAS Student Branch Chapter. Planning and executing technical events and industrial interaction programs.' },
        { title: 'Media Manager', date: 'May 2025 - April 2026 · 1 yr', desc: 'Driving the creative and digital media initiatives of the IEEE Student Branch. Publishing posters, reels, and promotional content.' }
      ]
    },
    {
      company: 'ALCHEMY IEDC CEAL',
      totalDuration: '2 yrs 1 mo',
      letter: 'A',
      roles: [
        { title: 'Media Manager', date: 'Feb 2025 - Present · 1 yr 1 mo', desc: 'Leading media and design operations for Alchemy IEDC, focusing on promoting entrepreneurial and innovation-driven student activities.' },
        { title: 'Jr. Chief Innovation Officer', date: 'Feb 2024 - Feb 2025 · 1 yr 1 mo', desc: 'Assisted in planning and executing innovation-driven initiatives and entrepreneurial workshops. Supported the coordination of ideation camps and pitch fests.' }
      ]
    }
  ];

  const handleIdentityMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -5;
    const tiltY = ((x - centerX) / centerX) * 5;
    
    e.currentTarget.style.setProperty('--tilt-x', `${tiltX}deg`);
    e.currentTarget.style.setProperty('--tilt-y', `${tiltY}deg`);
  };

  const handleIdentityMouseLeave = (e) => {
    e.currentTarget.style.setProperty('--tilt-x', `0deg`);
    e.currentTarget.style.setProperty('--tilt-y', `0deg`);
  };

  const panels = [
    {
      id: 'photo',
      title: 'PHOTOGRAPHY',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="panel-icon"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
      ),
      bg: '#121212',
      content: (
        <div className="panel-inner scrollable-panel">
          <h2>PHOTOGRAPHY SHOWCASE</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '10px' }}>
            <p style={{ margin: 0, opacity: 0.8, fontSize: '18px' }}>Visual storytelling and raw perspective.</p>
            <div className="project-tags">
              <span className="tech-tag" style={{display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid rgba(255,255,255,0.1)'}}>
                 <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                 CANON EOS 1200D
              </span>
              <span className="tech-tag" style={{display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid rgba(255,255,255,0.1)'}}>
                 <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                 POCO X5 PRO
              </span>
            </div>
          </div>
          <div className="photography-grid">
             {/* Hero — Deity portrait full width */}
             <div className="photo-item wide">
               <img src="/photography/655896053_17979668087822316_6446433767201010952_n.jpg" alt="Theyyam Deity Portrait" loading="lazy" />
             </div>
             {/* Row — Train station + Temple statue */}
             <div className="photo-item">
               <img src="/photography/619277848_17968717473005813_1029819978367863094_n.jpg" alt="Rainy Station Kannur" loading="lazy" />
             </div>
             <div className="photo-item">
               <img src="/photography/587934967_17913271764275367_330467023734711727_n.jpeg" alt="Temple Deity Statue" loading="lazy" />
             </div>
             {/* Hero — Bull race full width */}
             <div className="photo-item wide">
               <img src="/photography/468666200_605712635306876_8415467578072215309_n.jpeg" alt="Maramadi Bull Race" loading="lazy" />
             </div>
             {/* Bottom — Stepwell full width */}
             <div className="photo-item wide">
               <img src="/photography/587810428_17909316447275367_5561139947428540330_n.jpeg" alt="Stepwell Architecture" loading="lazy" />
             </div>
          </div>
        </div>
      )
    },
    {
      id: 'dev',
      title: 'DEVELOPMENT',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="panel-icon"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
      ),
      bg: '#18181b',
      content: (
        <div className="panel-inner scrollable-panel">
          <h2>CURATED WORKS</h2>
          <p>Featured projects and structural engineering.</p>
          <div className="editorial-project-list">
            {projectsData.map((repo, idx) => (
              <div key={idx} onClick={() => window.open(repo.url, '_blank')} className="editorial-project-item">
                 <div className="project-number">0{idx + 1}</div>
                 <div className="project-info-block">
                   <h3 className="project-title">{repo.title.toUpperCase()}</h3>
                   <p className="project-desc-text">{repo.description}</p>
                   <div className="project-tags">
                     {repo.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                   </div>
                 </div>
                 <div className="project-link-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                 </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'exp',
      title: 'EXPERIENCE',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="panel-icon"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
      ),
      bg: '#27272a',
      content: (
        <div className="panel-inner scrollable-panel">
          <h2>VOLUNTEERING INSIGHTS</h2>
          <div className="linkedin-timeline">
            {experienceData.map((job, idx) => (
              <div key={idx} className="linkedin-company">
                <div className="company-header">
                  <div className="company-logo">{job.letter}</div>
                  <div className="company-meta">
                    <h3>{job.company.toUpperCase()}</h3>
                    <span>{job.totalDuration}</span>
                  </div>
                </div>
                <div className="roles-container">
                  {job.roles.map((role, rIdx) => (
                     <div key={rIdx} className="role-node">
                       <span className="role-bullet"></span>
                       <h4>{role.title.toUpperCase()}</h4>
                       <span className="role-date">{role.date.toUpperCase()}</span>
                       <p>{role.desc}</p>
                     </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'about',
      title: 'ABOUT ME',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="panel-icon"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
      ),
      bg: '#3f3f46',
      content: (
        <div className="panel-inner scrollable-panel editorial-about">
          <h2 className="about-heading">WHO AM I</h2>
          <div className="about-intro">
            <span className="drop-cap">I</span>
            <p className="drop-text">exist at the intersection of raw mechanical optics and scalable digital systems. I’m a CSE student who likes building things that actually work. Most of the time I’m either coding, fixing something I broke, or starting a new project I probably didn’t need to start.</p>
          </div>
          
          <div className="about-columns">
            <div className="about-column">
              <h4>THE BUILDER</h4>
              <p>I’ve worked on a mix of projects — from web apps to small systems — mainly using Python, SQL, and modern web tech. I enjoy figuring things out as I go and turning rough abstract ideas into something usable.</p>
              <div className="skills-bar-container" style={{ marginTop: '25px' }}>
                {[
                  { name: 'PYTHON', level: '75%' },
                  { name: 'HTML / CSS', level: '75%' },
                  { name: 'FLASK & MYSQL', level: '65%' },
                  { name: 'OPENCV & ARDUINO', level: '50%' },
                  { name: 'REACT.JS', level: '35%' },
                ].map(skill => (
                  <div key={skill.name} className="skill-row">
                    <div className="skill-label">{skill.name}</div>
                    <div className="skill-bar-bg">
                       <div className="skill-bar-fill" style={{ width: skill.level }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-column">
              <h4>THE EXPLORER</h4>
              <p>I like exploring new ideas, experimenting with tech, and just getting better with every project I build. Always striving to balance solid architectural engineering with high aesthetic standards.</p>
              <div className="skills-bar-container" style={{ marginTop: '25px' }}>
                {[
                  { name: 'PROBLEM SOLVING', level: '90%' },
                  { name: 'PROJECT BUILDING', level: '85%' },
                  { name: 'LEADERSHIP', level: '85%' },
                  { name: 'DIGITAL DESIGN', level: '75%' },
                  { name: 'STORYTELLING', level: '80%' },
                ].map(skill => (
                  <div key={skill.name} className="skill-row">
                    <div className="skill-label">{skill.name}</div>
                    <div className="skill-bar-bg">
                       <div className="skill-bar-fill" style={{ width: skill.level }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="about-quote">
            "Simplicity is the ultimate sophistication."
          </div>
        </div>
      )
    },
    {
      id: 'socials',
      title: 'PROFILE',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="panel-icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      ),
      bg: '#52525b',
      content: (
        <div className="panel-inner">
          <h2>CONNECT WITH ME</h2>
          <div className="social-links-grid" style={{flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
            <a href="https://www.linkedin.com/in/harigovind-p-nair-89a4992b8/" target="_blank" rel="noreferrer" className="social-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
            <a href="https://github.com/hari2629-p" target="_blank" rel="noreferrer" className="social-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub
            </a>
            <a href="https://www.instagram.com/rea_lhari/" target="_blank" rel="noreferrer" className="social-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              Instagram (Photography)
            </a>
            <a href="https://www.instagram.com/_h._.gp/" target="_blank" rel="noreferrer" className="social-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              Instagram (Personal)
            </a>
            <a href="mailto:hariatl10@gmail.com" className="social-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              hariatl10@gmail.com
            </a>
          </div>
        </div>
      )
    },
    {
      id: 'name',
      title: 'H A R I',
      bg: '#000000',
      isName: true,
      content: (
        <div 
          className="hari-identity-panel"
          onMouseMove={handleIdentityMouseMove}
          onMouseLeave={handleIdentityMouseLeave}
        >
          <div className="hari-tilt-wrapper">
            <div className="hari-name-block">
              <div className="hari-first-name">HARIGOVIND</div>
              <div className="hari-secret-easter-egg">
                 <div><span className="terminal-prompt">root@hari:~$</span> execute identity_scan</div>
                 <div style={{marginTop: '10px'}}><span className="terminal-prompt">&gt;</span> FOCUS: PROBLEM SOLVING & PROJECT BUILDING</div>
                 <div><span className="terminal-prompt">&gt;</span> PASSION: PHOTOGRAPHY</div>
                 <div><span className="terminal-prompt">&gt;</span> INTERESTS: CINEMA & STORYTELLING</div>
                 <div><span className="terminal-prompt">&gt;</span> STATUS: B.TECH UNDERGRADUATE</div>
              </div>
              <div className="hari-middle-name">P NAIR</div>
            </div>
            <div className="hari-divider"></div>
            <div className="hari-meta">
              <span>PHOTOGRAPHY</span>
              <span className="hari-dot">·</span>
              <span>DEVELOPMENT</span>
              <span className="hari-dot">·</span>
              <span>SOLUTIONS</span>
            </div>
            <div className="hari-tagline">
              Building at the intersection of<br/>raw optics and digital systems.
            </div>
          </div>
        </div>
      )
    }
  ];

  const handlePanelClick = (index) => {
    // Prevent the active panel from collapsing when tapped or scrolled on mobile
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  return (
    <main className="bookshelf-container">
      <h1 className="sr-only">HARI - Photographer and Developer Portfolio</h1>
      
      <div className="accordion">
        {panels.map((panel, idx) => {
          const isActive = activeIndex === idx;
          const isMuted = activeIndex !== null && !isActive;

          return (
            <div 
              key={panel.id}
              className={`accordion-panel ${isActive ? 'active' : ''} ${isMuted ? 'muted' : ''}`}
              style={{ backgroundColor: panel.bg, color: panel.color || '#fff' }}
              onClick={() => handlePanelClick(idx)}
            >
              {/* Spine View (Visible when collapsed) */}
              <div className={`panel-spine ${isActive ? 'hidden' : ''}`}>
                {panel.isName ? (
                  <div className="name-vertical">{panel.title}</div>
                ) : (
                  <>
                    {panel.icon}
                    <div className="spine-title">{panel.title}</div>
                  </>
                )}
              </div>

              {/* Content View (Visible when active) */}
              <div className={`panel-content-wrapper ${isActive ? 'visible' : ''}`}>
                {panel.content}
              </div>
            </div>
          );
        })}
      </div>
      <footer className="portfolio-footer">
        <span>© HARIGOVIND P NAIR </span>
        <span>PHOTOGRAPHER  &  DEVELOPER</span>
        <span>KERALA, INDIA</span>
      </footer>
    </main>
  );
}

export default App;
