import { motion } from 'framer-motion';
import { Code2, Globe, Server,  Coffee } from 'lucide-react';

export default function About() {
  const services = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces using React, TypeScript, and modern CSS frameworks.',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'I build robust APIs and microservices using Node.js, PHP, MySQL, and Python.',
    },
    {
      icon: Globe,
      title: 'Web Design',
      description: 'Crafting beautiful, intuitive user experiences with a focus on accessibility and performance.',
    },
    {
      icon: Coffee,
      title: 'Continuous Learning',
      description: 'Staying updated with the latest technologies and best practices in software development.',
    },
  ];

  const journey = [
    { year: '2021', title: 'Started Programming Journey' },
    { year: '2022', title: 'First Professional Project' },
    { year: '2023', title: 'Full Stack Development' },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Passionate Ethiopian full-stack developer building innovative web solutions.
            My journey in tech is driven by curiosity and a desire to create impactful applications.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">My Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-green-400/20" />
            <div className="space-y-12">
              {journey.map(({ year, title }, index) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'justify-end md:pr-32' : 'justify-start md:pl-32'
                  }`}
                >
                  <div className="relative bg-gray-900 p-6 rounded-lg border border-green-400/10">
                    <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-green-400 
                      ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}"
                    />
                    <h3 className="text-green-400 font-bold mb-1">{year}</h3>
                    <p className="text-white">{title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-900 p-6 rounded-lg border border-green-400/10 hover:border-green-400/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-green-400/10 flex items-center justify-center mb-4 group-hover:bg-green-400/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}