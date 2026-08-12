import { FiPackage, FiInstagram, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-500 to-rose-500 flex items-center justify-center text-white">
                <FiPackage size={18} />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Wusool <span className="text-orange-500">Saree Delivery Services</span>
              </h2>
            </a>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Order Management & Delivery Services<br />
              Smark 2 building, Ras Al Khor,<br />
              Industrial area 2, Dubai-UAE<br />
              <br />
              F4, 14, 2nd Floor, ZigZag Building,<br />
              Near Dana Hotel, Madeena Supermarket Building,<br />
              Abu Dhabi-UAE<br />
              <br />
              admin@wsdeliveryservices.com<br />
              +971 50 964 2616
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all">
                <FiInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all">
                <FiFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all">
                <FiTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all">
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#services" className="text-slate-400 hover:text-orange-400 transition-colors">Services</a></li>
              <li><a href="#whyus" className="text-slate-400 hover:text-orange-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#coverage" className="text-slate-400 hover:text-orange-400 transition-colors">Our Coverage</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-orange-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#partner" className="text-slate-400 hover:text-orange-400 transition-colors">Become a Partner</a></li>
              <li><a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Wusool Saree Delivery Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}