import React from 'react'

const services = [
  'Web Development',
  'Meta Ads Management',
  'Google Ads Management',
  'Video Editing',
  'Graphic Design',
  'Social Media Management',
  'Brand Building',
  'Product Photography',
]

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Portfolio', href: '#work' },
  { label: 'Contact', href: '#contact' },
  { label: 'Request a Quote', href: '#contact' },
]

function Footer() {
  return (
    <footer className="relative w-full bg-white border-t border-black/10">

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#home" className="text-black text-2xl tracking-tight font-semibold block mb-4">
              Conquer
            </a>

            <p className="text-black/50 text-sm leading-relaxed max-w-xs">
              A full-service digital agency helping brands design, build, and scale through modern web, marketing, and creative solutions.
            </p>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h4 className="text-black text-xs tracking-[0.15em] uppercase mb-6">
              Services
            </h4>

            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i} className="text-black/50 text-sm hover:text-black transition-colors duration-300 cursor-default">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-black text-xs tracking-[0.15em] uppercase mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-black/50 text-sm hover:text-black transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-black text-xs tracking-[0.15em] uppercase mb-6">
              Contact
            </h4>

            <ul className="space-y-4 text-sm">

              <li>
                <span className="block text-black/40 text-[10px] uppercase tracking-wide">
                  WhatsApp
                </span>
                <span className="text-black/70">+92 3XX XXX XXXX</span>
              </li>

              <li>
                <span className="block text-black/40 text-[10px] uppercase tracking-wide">
                  Email
                </span>
                <a
                  href="mailto:support@conquer-360.com"
                  className="text-black/70 hover:text-black transition-colors duration-300"
                >
                  support@conquer-360.com
                </a>
              </li>

              <li>
                <span className="block text-black/40 text-[10px] uppercase tracking-wide">
                  Working Hours
                </span>
                <span className="text-black/70">
                  Mon – Sat · 10AM – 7PM PKT
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-black/30 text-[11px] tracking-wide">
            © 2026 Conquer. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-black/30 text-[11px] hover:text-black/60 transition-colors">
              Privacy
            </a>
            <a href="#refund" className="text-black/30 text-[11px] hover:text-black/60 transition-colors">
              Refund Policy
            </a>
          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer