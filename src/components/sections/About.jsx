import { RevealOnScroll } from "../RevealOnScroll";

export const About = () =>{

    const frontendSkills = [
        "html",
        "css",
        "Javascript",
        "React",
        "Tailwindcss",
        "TypeScript",
        "git and github"
    ];

    const backendSkills = [
        "Backend Architecture",
        "Node.js",
        "Python",
        "Django",
        "Django RF",
        "Database"
    ]

    const automation = [
        "n8n",
        "Chatbots",
        "AI agents",
        "Custom Workflows",
        "Make",
        "Zapier",
        "API Integrations"


    ]

    const Electrical_engineering = [
        "Circuit Design",
        "PCB Layout",
        "Signal Processing",
        "Embedded Systems",
        "Microcontrollers",
        "Power Systems"
    ]

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
       <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

            <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">Passionate software developer with expertise in building scalable web applicaitons and creating innovative solutions

                </p>
            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                        {frontendSkills.map((tech, key)=>{
                            return(
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transtion">
                                {tech}
                            </span>
                            )
                        })}
                    </div>
                 </div>

                 <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                        {backendSkills.map((tech, key)=>{
                            return(
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transtion">
                                {tech}
                            </span>
                            )
                        })}
                    </div>
                 </div>

                 <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">AI automation</h3>
                    <div className="flex flex-wrap gap-2">
                        {automation.map((tech, key)=>{
                            return(
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transtion">
                                {tech}
                            </span>
                            )
                        })}
                    </div>
                 </div>

                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                               <strong>B.S.c in Electrical Engineering</strong> - Obuda University (2024-Present) GPA: 4.94/5.0
                            </li>
                            <li>
                                Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Development, Software Engineering...
                            </li>

                            <li>
                               <strong>High School</strong> - Redemption Academy (2017-2023) Best Graduating Student
                            </li>
                        </ul>
                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Software development Projects</h4>
                            <p>Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.</p>
                            </div>

                            <div>
                                <h4 className="font-semibold">I-Pro Hungary</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                               Assembled parts used in automotive and electrical components, ensuring quality and precision in line with company standards
                            </li>
                            <li>
                                Gained hands-on experience with manufacturing processes and quality checks
                            </li>
                        </ul>
                            </div>
                            
                        </div>

                        
                </div>
            </div>
        </div>
       </RevealOnScroll>
    </section>
}

//for this you are designing the about of you.. and styling accordingly
//you have a list of your skills and things like that