import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Code, Terminal, Database } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const technologies = [
    { icon: Code, label: 'Frontend' },
    { icon: Terminal, label: 'Backend' },
    { icon: Database, label: 'Database' },
  ];

  return (
    <footer className="relative bg-black py-12">
      {/* Animated cyber grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(78,216,128,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(78,216,128,0.1)_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      {/* Glowing border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Tech stack section */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          {technologies.map(({ icon: Icon, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-lg bg-green-400/10 flex items-center justify-center mb-2 group hover:bg-green-400/20 transition-colors duration-300">
                <Icon className="w-6 h-6 text-green-400" />
              </div>
              <span className="text-gray-400">{label}</span>
            </motion.div>
          ))}
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center space-x-8 mb-8"
        >
          {[
            { Icon: Github, href: 'https://github.com/zekiyopia/', label: 'GitHub' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/zekariyas-genene-08586b34a/', label: 'LinkedIn' },
            { Icon: Twitter, href: 'https://x.com/Zekiyopia', label: 'Twitter' },
            { Icon: Mail, href: '/contact', label: 'Email' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="group relative"
              aria-label={label}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Icon className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Zekariyas All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}