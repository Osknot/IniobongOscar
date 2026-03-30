import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll"

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState('');

    const HandleChange = (e) => setFormData({
        ...formData, 
        [e.target.name]: e.target.value
    });
    
    const HandleSubmit = async(e) =>{
        e.preventDefault();
        setStatus('Sending...');

        try {
            const res = await fetch("https://osknot07.app.n8n.cloud/webhook/9d35285e-295f-4dae-8b39-864717ea247c", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!res.ok) throw new Error("Failed to send");

            setStatus("Thank you for contacting me 😉");
            setFormData({ name: "", email: "", message: ""});
        } catch (err) {
            console.error(err);
            setStatus("Something went wrong ❌");
        }

        setTimeout(() => {
                setStatus('');
                setFormData({ name: "", email: "", message: ""});
            }, 3000);
    };
        
    
    return (
        <section id="contact"
        className="min-h-screen flex items-center justify-center py-20 overflow-x-hidden"
        >
            {/*<RevealOnScroll>*/}
                <div className="mx-auto w-full max-w-[720px] px-6 sm:px-8">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Get in Touch</h2>

                    <form 
                    onSubmit={HandleSubmit}
                    className="space-y-6"
                    >
                        <div className="relative">
                            <input type="text" 
                            id="name" 
                            name="name" 
                            required 
                            value={formData.name}
                            className="w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition 
                            focus:outline-none focus:border-blue-900 focus:bg-blue-500/5 "
                            placeholder="Name..."
                            onChange={HandleChange}
                            />
                        </div>

                        <div className="relative">
                            <input type="email" 
                            id="email" 
                            name="email" 
                            required
                            value={formData.email} 
                            className="w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition 
                            focus:outline-none focus:border-blue-900 focus:bg-blue-500/5 "
                            placeholder="youremail@gmail.com"
                            onChange={HandleChange}
                            />
                        </div>

                        <div className="relative">
                            <textarea  
                            type="text"
                            id="message" 
                            name="message" 
                            rows={5}
                            value={formData.message}
                            className="w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition 
                            focus:outline-none focus:border-blue-900 focus:bg-blue-500/5 "
                            placeholder="Your message..."
                            onChange={HandleChange}
                            />
                        </div>
                        <button 
                        type="submit" 
                        className="w-full bg-blue-900 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            Send Message
                        </button>
                        <p className="text-center">{status}</p>
                    </form>
                </div>
           {/*</RevealOnScroll>*/}
        </section>
    )
}