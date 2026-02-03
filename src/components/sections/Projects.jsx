import { RevealOnScroll } from "../RevealOnScroll"
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Projects = () => {
    return <section 
    id="projects"
    className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">AI Chatbots & Automation Agents (In Progress)</h3>
                    <p className="text-gray-400 mb-4">Prototyping intelligent chatbots and virtual assistants to automate conversations and streamline routine tasks.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["VoiceFlow", "n8n", "Integrated API", "gitHub Pages"].map((tech, key)=>{
                             return(
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transtion-all">
                                {tech}
                            </span>
                            )
                        })}
                    </div>

                    <div className="flex justify-between items-center">
                        <a 
                        href="#"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4 "
                        >View Project&#8594;</a>

                        <div className="flex gap-4 mt-4">

                        
                        <a 
                                href="https://www.linkedin.com/in/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors text-2xl"
                            >
                                <FaLinkedin />
                            </a>

                         <a 
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-200 transition-colors text-2xl"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Intelligent Email Routing & Response Automation</h3>
                    <p className="text-gray-400 mb-4">Automates email triage and responses, ensuring timely and accurate handling of customer inquiries with minimal manual effort.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["n8n", "make", "zapier", "Integration API", "Open AI"].map((tech, key)=>{
                             return(
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transtion-all">
                                {tech}
                            </span>
                            )
                        })}
                    </div>

                    <div className="flex justify-between items-center">
                        <a 
                        href="#"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4 "
                        >View Project&#8594;</a>

                        <div className="flex gap-4 mt-4">

                        
                        <a 
                                href="https://www.linkedin.com/in/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors text-2xl"
                            >
                                <FaLinkedin />
                            </a>

                         <a 
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-200 transition-colors text-2xl"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">My Portfolio Website</h3>
                    <p className="text-gray-400 mb-4">A responsive portfolio website built with React and Tailwind CSS.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React", "Tailwind CSS", "JavaScript", "n8n", "GitHub Pages"].map((tech, key)=>{
                             return(
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transtion-all">
                                {tech}
                            </span>
                            )
                        })}
                    </div>

                   <div className="flex justify-between items-center">
                        <a 
                        href="#"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4 "
                        >View Project&#8594;</a>

                        <div className="flex gap-4 mt-4">

                        
                        <a 
                                href="https://www.linkedin.com/in/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors text-2xl"
                            >
                                <FaLinkedin />
                            </a>

                         <a 
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-200 transition-colors text-2xl"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Website Lead Capture & Email Automation (n8n)</h3>
                    <p className="text-gray-400 mb-4">Integrates website forms with n8n workflows to automatically collect leads, categorize submissions, and trigger follow-up emails.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React", "Tailwind CSS", "n8n", "GitHub Pages"].map((tech, key)=>{
                             return(
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transtion-all">
                                {tech}
                            </span>
                            )
                        })}
                    </div>


                    <div className="flex justify-between items-center">
                        <a 
                        href="#"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4 "
                        >View Project&#8594;</a>

                        <div className="flex gap-4 mt-4">

                        
                        <a 
                                href="https://www.linkedin.com/in/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors text-2xl"
                            >
                                <FaLinkedin />
                            </a>

                         <a 
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-200 transition-colors text-2xl"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Movie App</h3>
                    <p className="text-gray-400 mb-4">A react movie app with integrated third-party API call for movie display
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React", "Tailwind CSS", "API Integration", "GitHub Pages"].map((tech, key)=>{
                             return(
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transtion-all">
                                {tech}
                            </span>
                            )
                        })}
                    </div>


                    <div className="flex justify-between items-center">
                        <a 
                        href="#"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4 "
                        >View Project&#8594;</a>

                        <div className="flex gap-4 mt-4">

                        
                        <a 
                                href="https://www.linkedin.com/in/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors text-2xl"
                            >
                                <FaLinkedin />
                            </a>

                         <a 
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-200 transition-colors text-2xl"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>

                

            </div>
        </div>
        </RevealOnScroll>
       
    </section>
}