import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { motion } from "framer-motion";

export default function PartnerForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    vehicle: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "partners"), form);
      setSuccess(true);
      setForm({ name: "", phone: "", city: "", vehicle: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <section id="partner" className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 text-sm font-medium mb-6">
            Join Our Network
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">Partner</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            Drive with us and earn on your schedule. We offer competitive payouts, flexible hours, and full support for our logistics partners. Start delivering today.
          </p>
          
          <ul className="space-y-4 text-slate-300">
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center text-sm">✓</span>
              Weekly Payouts
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center text-sm">✓</span>
              Flexible Working Hours
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center text-sm">✓</span>
              App & Real-time Route Optimization
            </li>
          </ul>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-slate-400">
              Prefer to talk to us directly? Call or WhatsApp{" "}
              <a href="tel:+971509642616" className="text-orange-400 font-semibold hover:text-orange-300 transition-colors">
                +971 50 964 2616
              </a>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-slate-800/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {success && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-0 left-0 w-full bg-green-500/90 text-white p-4 text-center font-bold z-20"
              >
                Application submitted successfully!
              </motion.div>
            )}

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  className="w-full bg-slate-900/50 border border-white/10 p-3.5 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-sans"
                  placeholder="John Doe"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  className="w-full bg-slate-900/50 border border-white/10 p-3.5 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-sans"
                  placeholder="+971 50 XXX XXXX"
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={form.city}
                    className="w-full bg-slate-900/50 border border-white/10 p-3.5 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-sans"
                    placeholder="Dubai"
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Vehicle Type</label>
                  <select
                    required
                    value={form.vehicle}
                    className="w-full bg-slate-900/50 border border-white/10 p-3.5 rounded-xl text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-sans appearance-none"
                    onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                  >
                    <option value="" disabled>Select vehicle</option>
                    <option value="Bike">Bike</option>
                    <option value="Car">Car</option>
                    <option value="Van">Van</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-rose-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all mt-4 disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {loading ? "Submitting..." : "Apply Now"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}