import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Mail,  
  MapPin, 
  Award, 
  Briefcase, 
  GraduationCap,
  Activity,
  Wrench,
  ChevronRight
} from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';

// --- Global Styles & Fonts ---
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');

  :root {
    --bg-color: #FAFAFA;
    --text-main: #171717;
    --text-muted: #525252;
    --accent: #115E59; /* Deep Teal inspired by CPhT badge */
    --accent-light: #CCFBF1;
    --border-color: #E5E5E5;
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-main);
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, .serif {
    font-family: 'Playfair Display', serif;
  }

  .fade-in {
    animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
    transform: translateY(10px);
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .page-transition-enter {
    animation: pageEnter 0.4s ease-out forwards;
  }

  @keyframes pageEnter {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: #d4d4d4; border-radius: 4px; }
  ::-webkit-scrollbar-thumb:hover { background: #a3a3a3; }
`;

// --- Components ---

const Nav = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', label: 'Overview' },
    { id: 'experience', label: 'Experience & Background' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 md:bottom-auto md:top-8 z-50 w-[90%] md:w-auto max-w-md">
      <div className="bg-white/80 backdrop-blur-md border border-stone-200 p-1.5 rounded-full shadow-lg shadow-stone-200/50 flex items-center justify-between gap-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setCurrentPage(item.id);
            }}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              currentPage === item.id 
                ? 'bg-stone-900 text-white shadow-md' 
                : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

const BentoCard = ({ children, className = "", delay = "0s" }) => (
  <div 
    className={`bg-white border border-stone-200 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in ${className}`}
    style={{ animationDelay: delay }}
  >
    {children}
  </div>
);

// --- Pages ---

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="page-transition-enter max-w-5xl mx-auto pt-12 md:pt-32 pb-32 px-6">
      
      {/* Hero Section */}
      <header className="mb-16 md:mb-24 fade-in" style={{ animationDelay: '0s' }}>
        <h1 className="text-5xl md:text-7xl font-medium text-stone-900 tracking-tight leading-[1.1] mb-6">
          Ryan Li
        </h1>
        <p className="text-xl md:text-2xl text-stone-500 max-w-2xl leading-relaxed font-light">
          Senior Biology student at UC Riverside bridging the gap between <strong className="font-medium text-stone-800">clinical healthcare</strong> and <strong className="font-medium text-stone-800">operational scale</strong>.
        </p>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Main About */}
        <BentoCard className="md:col-span-2 flex flex-col justify-between" delay="0.1s">
          <div>
            <h2 className="text-2xl serif mb-4">Direct & Driven.</h2>
            <p className="text-stone-600 leading-relaxed text-lg mb-6">
              I am pursuing a career in pharmacy with a strong foundation in operations. 
              Currently holding a CPhT certification, I bring hands-on experience in medication safety, 
              patient care, and managing large-scale business operations. I believe in a meticulous, 
              systems-first approach—whether I'm dispensing medication or scaling a startup.
            </p>
          </div>
          <button 
            onClick={() => setCurrentPage('experience')}
            className="inline-flex items-center gap-2 text-teal-700 font-medium hover:text-teal-900 transition-colors w-fit group"
          >
            View full background 
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </BentoCard>

        {/* Quick Facts */}
        <BentoCard delay="0.2s" className="bg-teal-50 border-teal-200 text-black">
          <h3 className="text-xl serif mb-6 text-black font-semibold">Core Focus</h3>
          <ul className="space-y-6">
            <li className="flex items-start">
              <div>
                <p className="font-medium text-lg text-black">Pharmacy Ops</p>
                <p className="text-sm text-stone-700 mt-0.5">Patient care & safety</p>
              </div>
            </li>
            <li className="flex items-start">
              <div>
                <p className="font-medium text-lg text-black">Business Scale</p>
                <p className="text-sm text-stone-700 mt-0.5">Logistics & B2B strategy</p>
              </div>
            </li>
            <li className="flex items-start">
              <div>
                <p className="font-medium text-lg text-black">Hands-on Mechanics</p>
                <p className="text-sm text-stone-700 mt-0.5">Automotive restoration</p>
              </div>
            </li>
          </ul>
        </BentoCard>

        {/* Education Highlight */}
        <BentoCard className="md:col-span-1 border-teal-100 bg-gradient-to-br from-white to-teal-50" delay="0.3s">
          <GraduationCap className="text-teal-700 mb-4" size={28} />
          <h3 className="text-lg font-semibold text-stone-900 mb-1">UC Riverside</h3>
          <p className="text-stone-600 mb-4">B.S. Molecular Biology</p>
          <div className="text-sm text-stone-500 space-y-1">
            <p>• Pre-Pharmacy Track</p>
            <p>• Expected June 2026</p>
          </div>
        </BentoCard>

        {/* Business Highlight */}
        <BentoCard className="md:col-span-2" delay="0.4s">
          <div className="flex justify-between items-start mb-4">
            <Award className="text-stone-800" size={28} />
            <span className="text-xs font-semibold px-2 py-1 bg-stone-100 rounded text-stone-600">Active Venture</span>
          </div>
          <h3 className="text-xl font-semibold text-stone-900 mb-2">Amazon Business Owner</h3>
          <p className="text-stone-600 leading-relaxed mb-4">
            Since Feb 2024, I've operated a sole proprietorship focused on retail and online arbitrage. 
            This venture provides real-world application of supply chain management, inventory sorting, 
            labeling, shipping logistics, and customer engagement.
          </p>
        </BentoCard>

      </div>
    </div>
  );
};

const ExperiencePage = () => {
  const experiences = [
    {
      role: "Business Operations Lead",
      company: "Agent School",
      date: "Jan 2026 - Present",
      type: "Full-time",
      desc: "Leading and managing core business operations to support organizational efficiency. Focused on sales structure, corporate partnership development, and scaling internal processes."
    },
    {
      role: "Lead Operations Manager",
      company: "HexaHacks",
      date: "Jun 2021 - Present",
      type: "Part-time",
      desc: "Promoted through Coordinator and Manager roles. Currently overseeing daily operations and ensuring smooth execution of projects. Driving strategic B2B outreach initiatives to build corporate partnerships.",
      history: "Operations Manager (Oct 2022 - May 2025) • Operations Coordinator (Jun 2021 - Sep 2022)"
    },
    {
      role: "Small Business Owner",
      company: "Amazon Business",
      date: "Feb 2024 - Present",
      type: "Self-employed",
      desc: "Operating and managing a sole proprietorship focused on retail and online arbitrage. Handling daily fulfillment, inventory sorting, labeling, and shipping operations."
    },
    {
      role: "Retail Operations Specialist",
      company: "Target",
      date: "May 2023 - Oct 2023",
      type: "Part-time",
      desc: "Supported daily retail operations by maintaining inventory accuracy, driving customer satisfaction, and optimizing floor logistics in Cupertino, CA."
    }
  ];

  return (
    <div className="page-transition-enter max-w-4xl mx-auto pt-12 md:pt-32 pb-32 px-6">
      <header className="mb-16 fade-in">
        <h1 className="text-4xl md:text-5xl serif text-stone-900 mb-4">Experience & Background</h1>
        <p className="text-lg text-stone-500">A detailed timeline of my professional roles, education, and certifications.</p>
      </header>

      {/* Certification Section (Visual Badge style) */}
      <div className="mb-16 fade-in" style={{ animationDelay: '0.1s' }}>
        <h2 className="text-2xl md:text-3xl serif text-stone-900 mb-6">Credentials</h2>
        <div className="bg-[#0f2e3c] text-white p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 shadow-xl relative overflow-hidden">
          {/* Decorative background shape */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#1b4b5e] rounded-full opacity-50 blur-2xl pointer-events-none"></div>
          
          <div className="bg-[#2a7a82] w-32 h-32 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white shadow-inner relative z-10">
            <div className="text-center">
              <span className="block font-bold text-3xl">CPhT</span>
              <span className="block text-[0.6rem] uppercase tracking-wider font-semibold mt-1">Certified</span>
            </div>
          </div>
          <div className="text-center md:text-left relative z-10">
            <h3 className="text-2xl font-semibold mb-2">Certified Pharmacy Technician</h3>
            <p className="text-[#a0cdd3] mb-4">Pharmacy Technician Certification Board (PTCB)</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-[#e0f2f4]">
              <div><span className="opacity-70">Cert Number:</span> 30340170</div>
              <div><span className="opacity-70">Issued:</span> Apr 03, 2026</div>
              <div><span className="opacity-70">Expires:</span> Apr 30, 2028</div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mb-20 fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-2xl md:text-3xl serif text-stone-900 mb-8">Professional Experience</h2>
        <div className="space-y-12 border-l border-stone-200 ml-3 md:ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-stone-300 border-2 border-white group-hover:bg-teal-600 transition-colors"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h3 className="text-xl font-semibold text-stone-900">{exp.role}</h3>
                <span className="text-sm font-medium text-stone-500 mt-1 md:mt-0">{exp.date}</span>
              </div>
              <div className="text-teal-800 font-medium mb-3 flex items-center gap-2">
                {exp.company}
                <span className="text-xs px-2 py-0.5 bg-stone-100 text-stone-600 rounded-sm font-normal">{exp.type}</span>
              </div>
              <p className="text-stone-600 leading-relaxed mb-2">{exp.desc}</p>
              {exp.history && (
                <p className="text-xs text-stone-500 mt-3 bg-stone-50 p-2 rounded border border-stone-100 inline-block">
                  <strong className="font-semibold text-stone-600">Progression:</strong> {exp.history}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="fade-in" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-2xl md:text-3xl serif text-stone-900 mb-8">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-stone-200 p-6 rounded-xl bg-white hover:border-teal-200 transition-colors">
            <h3 className="text-lg font-semibold text-stone-900 mb-1">University of California, Riverside</h3>
            <p className="text-teal-700 font-medium text-sm mb-4">Bachelor of Science, Molecular Biology</p>
            <p className="text-sm text-stone-500 mb-4">Sep 2022 — Jun 2026</p>
            <div className="text-sm text-stone-600">
              <strong className="block mb-1 text-stone-800">Activities & Societies:</strong>
              <ul className="list-disc pl-4 space-y-1 text-stone-500">
                <li>American Medical Student Association (AMSA)</li>
                <li>Future Pharmacists Interested in Learning Leadership Skills (Future PILLS)</li>
                <li>Health Occupation Students of America (HOSA)</li>
                <li>Hands On Healthcare (HOHC)</li>
                <li>Riverside Free Clinic volunteer</li>
              </ul>
            </div>
          </div>

          <div className="border border-stone-200 p-6 rounded-xl bg-white hover:border-teal-200 transition-colors">
            <h3 className="text-lg font-semibold text-stone-900 mb-1">Cupertino High School</h3>
            <p className="text-teal-700 font-medium text-sm mb-4">High School Diploma</p>
            <p className="text-sm text-stone-500 mb-4">Sep 2018 — Jun 2022 • 3.93 GPA</p>
            <div className="text-sm text-stone-600">
              <strong className="block mb-1 text-stone-800">Activities & Societies:</strong>
              <ul className="list-disc pl-4 space-y-1 text-stone-500">
                <li>HOSA – Future Health Professionals</li>
                <li>Medical Club</li>
                <li>Key Club</li>
                <li>National Honor Society (NHS)</li>
                <li>Interact Club & Red Cross Club</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="page-transition-enter max-w-3xl mx-auto pt-12 md:pt-32 pb-32 px-6">
      <header className="mb-12 fade-in text-center">
        <h1 className="text-4xl md:text-5xl serif text-stone-900 mb-4">Let's Connect</h1>
        <p className="text-lg text-stone-500 max-w-lg mx-auto">
          Whether you want to discuss pharmacy operations, business management, or car restoration, I'm highly responsive to new opportunities.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mt-16 fade-in" style={{ animationDelay: '0.1s' }}>
        
        {/* Direct Links */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6">Direct Info</h2>
          
          <a href="mailto:21geometrydash@gmail.com" className="flex items-center gap-4 p-4 rounded-xl hover:bg-stone-100 transition-colors group border border-transparent hover:border-stone-200">
            <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-sm text-stone-500">Email</p>
              <p className="font-medium text-stone-900">Reach out directly</p>
            </div>
          </a>

          <a href="https://linkedin.com/in/ryanlhexahacks" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-stone-100 transition-colors group border border-transparent hover:border-stone-200">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
              <FaLinkedinIn size={18} />
            </div>
            <div>
              <p className="text-sm text-stone-500">LinkedIn</p>
              <p className="font-medium text-stone-900">Connect professionally</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-4 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-sm text-stone-500">Location</p>
              <p className="font-medium text-stone-900">Riverside & Bay Area, CA</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-3 bg-white border border-stone-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Send a Message</h2>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-stone-700">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-stone-700">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-stone-700">Message</label>
              <textarea 
                rows="4"
                className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition-all resize-none"
                placeholder="How can we collaborate?"
              ></textarea>
            </div>
            <button className="w-full bg-stone-900 text-white font-medium py-3 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 group">
              Submit Message
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <style>{globalStyles}</style>
      <div className="min-h-screen relative">
        
        {/* Router emulation */}
        <main className="pb-24">
          {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
          {currentPage === 'experience' && <ExperiencePage />}
          {currentPage === 'contact' && <ContactPage />}
        </main>

        <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        <footer className="text-center py-8 text-sm text-stone-400 border-t border-stone-200 max-w-5xl mx-auto w-full">
          © {new Date().getFullYear()} Ryan Li. All rights reserved.
        </footer>
      </div>
    </>
  );
}