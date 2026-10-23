import React from "react";

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#020617] text-white">
      {/* NAVBAR */}
      <nav className="w-full flex flex-col sm:flex-row justify-between items-center gap-5 py-5 px-4 sm:px-10 bg-[#0F172A] border-b border-white/10">
        {/* LOGO */}
        <div>
          <h2 className="text-xl font-bold tracking-tight">
            <span className="text-[#A78BFA]">krishna</span>
            <span className="text-slate-200">.dev</span>
          </h2>
        </div>

        {/* NAVIGATION */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
          <a
            href="#home"
            className="text-slate-300 font-medium text-base hover:text-[#A78BFA] transition-colors duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-slate-300 font-medium text-base hover:text-[#A78BFA] transition-colors duration-300"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-slate-300 font-medium text-base hover:text-[#A78BFA] transition-colors duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-slate-300 font-medium text-base hover:text-[#A78BFA] transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
       className="min-h-[85vh] w-full flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 text-center bg-linear-to-br from-[#020617] via-[#0F172A] to-[#1E1B4B]"
      >
        {/* INTRO LABEL */}
        <p className="text-sm uppercase tracking-[0.3em] font-semibold text-[#A78BFA] mb-5">
          Hello, World!
        </p>

        {/* MAIN HEADING */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Hi, I'm <span className="text-[#A78BFA]">Krishna</span>
        </h1>

        {/* SUBTITLE */}
        <h2 className="text-base sm:text-lg md:text-2xl font-medium text-slate-200 mb-5">
          Aspiring Full-Stack Developer
        </h2>

        {/* DESCRIPTION */}
        <p className="max-w-2xl text-base md:text-lg text-slate-400 leading-relaxed mb-8">
          I'm currently learning web development and building projects to
          improve my coding skills. I enjoy turning ideas into real-world
          applications while exploring new technologies and growing as a
          developer.
        </p>

        {/* BUTTON */}
        <a
          href="#projects"
          className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-violet-600 text-white font-semibold shadow-lg shadow-violet-950/40 hover:bg-violet-500 hover:-translate-y-1 transition-all duration-300"
        >
          Explore My Work
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </a>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
       className="min-h-[85vh] w-full bg-[#0F172A] py-20 px-5 sm:px-8 lg:px-10 text-center"
      >
        <div>
          <h2 className="text-4xl font-bold mb-4 text-slate-100 capitalize tracking-tight">
            My Projects
          </h2>
          <p className="text-lg text-slate-400 tracking-tight leading-relaxed">
            A few projects I've built while learning web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8 max-w-6xl mt-12">
          <div
            className="bg-[#1E293B] p-6 rounded-2xl border
   border-white/10 text-left hover:-translate-y-2 hover:border-violet-300/50 transition-all 
   duration-300"
          >
            <h2 className="text-2xl text-slate-100 tracking-tight font-bold mb-3">
              Job Tracker
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              A full-stack web application to track job applications, manage
              their status, and organize the job search process.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="bg-[#0F172A] text-violet-300 rounded-2xl border border-white/10 px-3 py-1.5 text-sm">
                React
              </span>
              <span className="bg-[#0F172A] text-violet-300 rounded-2xl border border-white/10 px-3 py-1.5 text-sm">
                Node.js
              </span>
              <span className="bg-[#0F172A] text-violet-300 rounded-2xl border border-white/10 px-3 py-1.5 text-sm">
                MongoDB
              </span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://job-tracker-frontend-alpha-ivory.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-[#2a324b] text-[#e1e5ee] font-medium px-4 py-2 mt-4
     rounded-lg hover:bg-[#143183] transition-colors duration-300"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/krishnakumawat674-oss/job-tracker-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-[#2a324b] text-[#e1e5ee] font-medium px-4 py-2 mt-4
     rounded-lg hover:bg-[#143183] transition-colors duration-300"
              >
                GitHub Code
              </a>
            </div>
          </div>
          <div
            className="bg-[#1E293B] p-6 rounded-2xl border
   border-white/10 text-left hover:-translate-y-2 hover:border-violet-300/50 transition-all 
   duration-300"
          >
            <h2 className="text-2xl text-slate-100 tracking-tight font-bold mb-3">
              Notes App
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              A full-stack application featuring REST APIs, CRUD operations, and
              seamless frontend-backend integration.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="bg-[#0F172A] text-violet-300 rounded-2xl border border-white/10 px-3 py-1.5 text-sm">
                React
              </span>
              <span className="bg-[#0F172A] text-violet-300 rounded-2xl border border-white/10 px-3 py-1.5 text-sm">
                Node.js
              </span>
              <span className="bg-[#0F172A] text-violet-300 rounded-2xl border border-white/10 px-3 py-1.5 text-sm">
                MongoDB
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-[#2a324b] text-[#e1e5ee] font-medium px-4 py-2 mt-4
     rounded-lg hover:bg-[#143183] transition-colors duration-300"
              >
                Live Demo
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-[#2a324b] text-[#e1e5ee] font-medium px-4 py-2 mt-4
     rounded-lg hover:bg-[#143183] transition-colors duration-300"
              >
                GitHub Code
              </a>
            </div>
          </div>
          <div
            className="bg-[#1E293B] p-6 rounded-2xl border
   border-white/10 text-left hover:-translate-y-2 hover:border-violet-300/50 transition-all 
   duration-300"
          >
            <h2 className="text-2xl text-slate-100 tracking-tight font-bold mb-3">
              Portfolio Website
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              A responsive personal portfolio built to showcase my web
              development skills, projects, and learning journey.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="bg-[#0F172A] text-violet-300 rounded-2xl border border-white/10 px-3 py-1.5 text-sm">
                React
              </span>
              <span className="bg-[#0F172A] text-violet-300 rounded-2xl border border-white/10 px-3 py-1.5 text-sm">
                Tailwind CSS
              </span>
              <span className="bg-[#0F172A] text-violet-300 rounded-2xl border border-white/10 px-3 py-1.5 text-sm">
                Vite
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-[#2a324b] text-[#e1e5ee] font-medium px-4 py-2 mt-4
     rounded-lg hover:bg-[#143183] transition-colors duration-300"
              >
                Live Demo
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-[#2a324b] text-[#e1e5ee] font-medium px-4 py-2 mt-4
     rounded-lg hover:bg-[#143183] transition-colors duration-300"
              >
                GitHub Code
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="w-full min-h-[85vh] bg-[#020617] py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-4">
         <div>
           <h2 className="font-bold text-2xl lg:text-4xl tracking-tight text-white mb-6">About Me</h2>
          <p className="text-sm lg:text-lg text-slate-300 leading-relaxed max-w-xl">
          I'm an aspiring Full-Stack Developer passionate about building practical,
           user-friendly web applications. I enjoy turning ideas into functional projects
            while continuously improving my skills in frontend and backend development. 
            Through hands-on projects like my Notes App and Job Tracker, I'm learning to build REST APIs,
             implement CRUD operations, connect frontend and backend, and solve real-world 
             development challenges. I'm always curious to learn new technologies and grow as a developer.
          </p>
              <div className="mt-10">
          <h2 className="font-bold text-2xl lg:text-4xl tracking-tight text-white mb-6">My Skills</h2>
          <div className="flex flex-wrap gap-3">
<span className="bg-violet-400/10 text-violet-300 border border-violet-400/20 font-semibold px-4 py-2 rounded-lg">HTML</span>

<span className="bg-violet-400/10 text-violet-300 border border-violet-400/20 font-semibold px-4 py-2 rounded-lg">CSS</span>

<span className="bg-violet-400/10 text-violet-300 border border-violet-400/20 font-semibold px-4 py-2 rounded-lg">JavaScript</span>

<span className="bg-violet-400/10 text-violet-300 border border-violet-400/20 font-semibold px-4 py-2 rounded-lg">React</span>

<span className="bg-violet-400/10 text-violet-300 border border-violet-400/20 font-semibold px-4 py-2 rounded-lg">Node.js</span>

<span className="bg-violet-400/10 text-violet-300 border border-violet-400/20 font-semibold px-4 py-2 rounded-lg">MongoDB</span>
          </div>
         </div>
         </div>
     
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="w-full min-h-[85vh] bg-[#0F172a] py-20 px-6">
<div className="max-w-6xl mx-auto mt-6">
<h2
 className="text-2xl lg:text-4xl font-bold text-white mb-6 tracking-tight">
  Let's Connect
  </h2>
  <p className="text-base text-slate-300 leading-relaxed max-w-xl font-medium">
    I'm always open to discussing new projects, creative ideas,
     and opportunities to learn and grow.
  </p>
  <div className="flex gap-4 mt-4">
    <span className="text-base text-slate-100 font-semibold">Email :</span>
    <a href="mailto:krishnakumawat674@gmail.com" className="text-violet-400 hover:text-violet-300 transition-colors">krishnakumawat674@gmail.com</a>
  </div>
   <div className="flex gap-4 mt-4">
    <span className="text-base text-slate-100 font-semibold">GitHub :</span>
    <a href="https://github.com/krishnakumawat674-oss" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 transition-colors"> GitHub Profile ↗</a>
  </div>
    <div className="flex gap-4 mt-4">
    <span className="text-base text-slate-100 font-semibold">Linkedin :</span>
    <a href="https://www.linkedin.com/in/krishna-kumawat-105659364" 
    target="_blank" rel="noopener noreferrer"
     className="text-violet-400 hover:text-violet-300 transition-colors">Linkedin Profile ↗</a>
  </div>
</div>
      </section>
    </div>
  );
};

export default App;
