'use client'
import React from 'react'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              Abdul Shikdar
            </div>
                         <div className="hidden md:flex space-x-8">
               <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
               <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
               <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
               <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
             </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-6">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-600 p-1">
              <img 
                src="/abdul.jpg" 
                alt="Abdul Shikdar" 
                className="w-full h-full rounded-full object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>

            <div className="flex items-center justify-center text-white/60">
              <span className="text-sm uppercase tracking-widest">IT Support Specialist</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="text-white">
                Abdul Shikdar
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Seasoned IT Support Technician with 5+ years of experience specializing in{' '}
              <span className="text-white font-semibold">networking</span>,{' '}
              <span className="text-white font-semibold">Intune</span>, and{' '}
              <span className="text-white font-semibold">hardware solutions</span>
            </p>

            <div className="flex justify-center">
              <a 
                href="/Abdul Shikdar -CV.pdf" 
                download="Abdul Shikdar -CV.pdf"
                className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-block text-center"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    👤
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
                </div>
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p>
                    Hello! I'm Abdul Shikdar, a seasoned IT support technician with over 5 years of experience. 
                    I hold a <span className="text-white font-semibold">Level 4 qualification in Network Engineering</span>, along with multiple IT certifications.
                  </p>
                  <p>
                    I began my IT journey studying at <span className="text-white font-semibold">Walsall College</span> and later advanced my skills by completing a Level 4 Network Engineering qualification on the job.
                  </p>
                  <p>
                    With over five years of hands-on experience, I've developed expertise in <span className="text-white font-semibold">networking</span>, <span className="text-white font-semibold">Microsoft Intune</span>, iPad management, Windows Server, MDM, and <span className="text-white font-semibold">PowerShell scripting</span>. I'm also highly proficient in hardware repairs, particularly with <span className="text-white font-semibold">Lenovo, HP, and Dell devices</span>, having successfully repaired hundreds of systems.
                  </p>
                  <p>
                    I provide reliable 1st and 2nd line support across phone, face-to-face, and remote channels. I hold an <span className="text-white font-semibold">enhanced DBS</span>, have a full driving licence, and am available to travel as needed.
                  </p>
                  <p className="text-white/90 font-medium">
                    I'm always open to discussing how I can support your IT needs or contribute to your next project—feel free to get in touch!
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6">Experience Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
                      5+
                    </div>
                    <span className="text-white/80">Years of IT Support Experience</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-[10px] font-bold leading-none">
                      500+
                    </div>
                    <span className="text-white/80">Hardware Repairs Completed</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-sm font-bold">
                      50+
                    </div>
                    <span className="text-white/80">Projects Completed</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-blue-600/10 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6">Qualifications & Credentials</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white/80">Level 4 Network Engineering</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white/80">Multiple IT Certifications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-white/80">Enhanced DBS Certified</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white/80">Full UK Driving Licence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-white/80">Available for Travel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full mb-4"></div>
          </div>

          <div className="space-y-8">
                         {[
               {
                 title: 'SwiftInstall',
                 description: 'Automated software installation and configuration tool that streamlines the deployment process for multiple applications across enterprise environments. Watch the complete tutorial video to see how it works!',
                 icon: '⚡',
                 gradient: 'from-blue-500 to-purple-600',
                 technologies: ['PowerShell', 'Batch Scripting', 'Windows Admin', 'Video Tutorial'],
                 videoId: 'o4zx3lcoUOk'
               },
               {
                 title: 'Cisco VLAN Configuration',
                 description: 'Comprehensive network segmentation solution implementing VLAN best practices for improved security and performance in enterprise networks. Follow along with the hands-on tutorial!',
                 icon: '🌐',
                 gradient: 'from-purple-500 to-pink-600',
                 technologies: ['Cisco IOS', 'Networking', 'VLAN', 'Switch Configuration', 'Video Tutorial'],
                 videoId: 'u18M9UemRiU'
               },
               {
                 title: 'Ubuntu Virtual Machine Setup',
                 description: 'Complete virtualization solution guide for Ubuntu deployment, including optimization for development and production environments. Step-by-step video walkthrough included!',
                 icon: '🖥️',
                 gradient: 'from-pink-500 to-red-600',
                 technologies: ['Ubuntu', 'VMware', 'Linux Administration', 'Virtualization', 'Video Tutorial'],
                 videoId: 'ZWCNdVNIy0M'
               }
             ].map((project, index) => (
              <div key={project.title} className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500">
                <div className="lg:flex">
                  <div className="lg:w-2/3 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center text-white text-xl`}>
                        {project.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>

                    <p className="text-white/80 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    
                  </div>

                                     <div className="lg:w-1/3 relative">
                     {project.videoId ? (
                       <div className="h-full min-h-[300px] p-4 flex items-center justify-center">
                         <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                           <iframe
                             src={`https://www.youtube.com/embed/${project.videoId}`}
                             title={`${project.title} Tutorial by Abdul Shikdar`}
                             className="w-full h-full"
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                             allowFullScreen
                           ></iframe>
                         </div>
                       </div>
                     ) : (
                       <div className={`h-full min-h-[300px] bg-gradient-to-br ${project.gradient} opacity-20 flex items-center justify-center`}>
                         <div className="text-center text-white/60">
                           <div className="text-6xl mb-4">{project.icon}</div>
                           <p className="text-lg font-semibold">{project.title}</p>
                         </div>
                       </div>
                     )}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full mb-4"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-8 text-center">Get In Touch</h3>
              
              <a href="mailto:abdulshikdarit@gmail.com" className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
                  📧
                </div>
                <div>
                  <p className="text-white/60 text-sm">Email</p>
                  <p className="text-white font-semibold">abdulshikdarit@gmail.com</p>
                </div>
              </a>

              <div className="mt-8">
                <h4 className="text-xl font-semibold text-white mb-6">Follow Me</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abdul-shikdar-a62893185', icon: '💼', color: 'from-blue-600 to-blue-700' },
                    { name: 'Facebook', url: 'https://www.facebook.com/abdul.shikdar', icon: '📘', color: 'from-blue-500 to-blue-600' },
                    { name: 'YouTube', url: 'https://www.youtube.com/@abdulshikdar', icon: '🎥', color: 'from-red-500 to-red-600' },
                    { name: 'Twitter', url: 'https://twitter.com/abdulshikdar', icon: '🐦', color: 'from-sky-400 to-sky-500' },
                    { name: 'Instagram', url: 'https://www.instagram.com/abdulshikdar', icon: '📸', color: 'from-pink-500 to-purple-600' },
                    { name: 'Fiverr', url: 'https://www.fiverr.com/abdul_shikdar', icon: '💚', color: 'from-green-500 to-green-600' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
            target="_blank"
            rel="noopener noreferrer"
                      className={`flex items-center justify-center space-x-2 p-3 bg-gradient-to-r ${social.color} rounded-xl text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      <span className="text-lg">{social.icon}</span>
                      <span className="text-sm">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>


          </div>

          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-white/60">
              © 2025 Abdul Shikdar. All rights reserved.
            </p>
          </div>
        </div>
      </section>
      </main>
  )
}
