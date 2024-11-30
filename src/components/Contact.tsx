
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-16">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MapPin className="text-orange-600" />
                <p>123 Restaurant Street, City, Country</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-orange-600" />
                <p>+1 234 567 890</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-orange-600" />
                <p>info@restaurant.com</p>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-orange-600" />
                <div>
                  <p>Mon-Fri: 11:00 AM - 10:00 PM</p>
                  <p>Sat-Sun: 10:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            ></textarea>
            <button className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}