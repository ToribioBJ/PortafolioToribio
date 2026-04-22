import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaWhatsapp, FaEnvelope, FaTerminal } from 'react-icons/fa';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(
            'service_e0n25bi',
            'template_6tg754f',
            form.current!,
            'MREiqb_SI-RVyCk4N'
        )
            .then(() => {
                alert("¡Mensaje enviado con éxito, Jose!");
                form.current?.reset();
            })
            .catch((error) => {
                console.error("Error al enviar:", error);
                alert("Hubo un error en la transmisión.");
            })
            .finally(() => setIsSending(false));
    };

    return (
        <section id="contact" className="py-24 px-6 max-w-6xl mx-auto overflow-hidden text-left">
            <div className="mb-16">
                <h2 className="text-2xl font-mono text-green-500 flex items-center gap-2 tracking-tighter">
                    ./CONTACTO
                </h2>
                <div className="h-[2px] w-24 bg-green-500 mt-2 shadow-[0_0_10px_#22c55e]"></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[30px] shadow-2xl relative">

                <div className="flex-1 space-y-6">
                    <h3 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">
                        ¿INICIAMOS UN <br /> <span className="text-green-500">PROYECTO?</span>
                    </h3>
                    <p className="text-gray-400 font-sans text-lg max-w-md">
                        Si necesitas una arquitectura segura para tu empresa o quieres potenciar tu sistema hablemos.
                    </p>

                    <div className="flex gap-4 pt-4">
                        <a href="mailto:toribiobarronjose@gmail.com" className="p-3 bg-white/5 border border-white/10 rounded-xl text-green-500 hover:bg-green-500 hover:text-black transition-all">
                            <FaEnvelope size={20} />
                        </a>
                        <a href="https://wa.me/51924215942" target="_blank" rel="noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-xl text-green-500 hover:bg-green-500 hover:text-black transition-all">
                            <FaWhatsapp size={20} />
                        </a>
                    </div>
                </div>

                {/* FORMULARIO */}
                <div className="flex-1">
                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                name="name"
                                type="text"
                                required
                                placeholder="NOMBRE_COMPLETO"
                                className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white font-mono text-xs focus:border-green-500/50 outline-none transition-all"
                            />
                            <input
                                name="email" 
                                type="email"
                                required
                                placeholder="GMAIL_USUARIO"
                                className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white font-mono text-xs focus:border-green-500/50 outline-none transition-all"
                            />
                        </div>
                        <textarea
                            name="message" 
                            required
                            rows={4}
                            placeholder="MENSAJE"
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white font-mono text-xs focus:border-green-500/50 outline-none transition-all resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            disabled={isSending}
                            className={`w-full py-4 font-black uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.3)]
                ${isSending ? 'bg-gray-600 cursor-not-allowed' : 'bg-green-600 hover:bg-green-500 text-black active:scale-95'}`}
                        >
                            {isSending ? 'SENDING_DATA...' : 'ENVIAR MENSAJE'} <FaPaperPlane size={12} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;