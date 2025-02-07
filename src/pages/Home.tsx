import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Landscape from '../components/Landscape';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Terminal } from 'lucide-react';

export default function Home() {
  const specialties = [
    { icon: Code, title: 'Web Development', desc: 'Modern web applications' },
    { icon: Terminal, title: 'Backend Systems', desc: 'Scalable solutions' },
    { icon: Database, title: 'Database Architecture', desc: 'Distributed Database' },
  ];

  return (
    <div className="min-h-screen w-full bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 30] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Landscape />
          <OrbitControls />
        </Canvas>
      </div>
      
      <div className="relative z-10 min-h-screen">
        <div className="h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white"
          >
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              Zekariyas Genene
            </h1>
            <p className="text-2xl text-green-400 mb-6">Full Stack Developer</p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 max-w-lg mx-auto mb-8"
            >
             Ethiopian developer crafting innovative digital experiences through code. I specialize in scalable web applications.
            </motion.p>
            <motion.a
              href="#specialties"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-400/10 text-green-400 rounded-full hover:bg-green-400/20 transition-colors duration-300"
            >
              Explore My Work
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>

        <div id="specialties" className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-7xl w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {specialties.map(({ icon: Icon, title, desc }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-green-400/10 hover:border-green-400/30 transition-colors duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-green-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                  <p className="text-gray-400">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}