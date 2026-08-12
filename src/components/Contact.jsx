import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Have questions about our services? Need a custom logistics solution? Contact our team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-orange-400 shrink-0">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Head Office</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Smark 2 building, Ras Al Khor,<br />
                    Industrial area 2, Dubai-UAE
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-orange-400 shrink-0">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Abu Dhabi Branch</h4>
                  <p className="text-slate-400 leading-relaxed">
                    F4, 14, 2nd Floor, ZigZag Building,<br />
                    Near Dana Hotel, Madeena Supermarket Building,<br />
                    Abu Dhabi-UAE
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-orange-400 shrink-0">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-slate-400 leading-relaxed">
                    +971 50 964 2616
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-orange-400 shrink-0">
                  <FiMail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-slate-400 leading-relaxed">
                    admin@wsdeliveryservices.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                className="w-full bg-slate-950 border border-white/10 p-4 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                placeholder="First Name"
              />
              <input
                className="w-full bg-slate-950 border border-white/10 p-4 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                placeholder="Last Name"
              />
            </div>

            <input
              className="w-full bg-slate-950 border border-white/10 p-4 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
              placeholder="Email Address"
              type="email"
            />

            <textarea
              className="w-full bg-slate-950 border border-white/10 p-4 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none"
              rows="5"
              placeholder="Your Message..."
            />

            <button
              type="button"
              className="w-full bg-white text-slate-950 hover:bg-orange-500 hover:text-white py-4 rounded-xl font-bold transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}