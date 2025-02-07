import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Code, Database,  Layout, Terminal, Settings } from 'lucide-react';

export default function Skills() {
  const skillsData = [
    { name: 'Python', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Language' },
    { name: 'React', level: 88, category: 'Backend' },
    { name: 'Next.js', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 82, category: 'API' },
    { name: 'PHP', level: 80, category: 'Backend' },
  ];

  const categories = [
    { icon: Layout, name: 'Frontend', skills: ['HTML', 'Tailwind CSS', 'Next.js', 'React'] },
    { icon: Terminal, name: 'Backend', skills: ['PHP', 'Python', 'Node.js', 'NestJS',] },
    { icon: Database, name: 'Database', skills: ['Python', 'MySql', 'PostgreSQL', 'MongoDB'] },
    { icon: Code, name: 'Languages', skills: ['Python', 'JavaScript', 'SQL', 'TypeScript'] },
    { icon: Settings, name: 'Tools', skills: ['VS Code', 'PyCharm', 'Git', 'Linux'] },
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
            Skills & Expertise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical skills and proficiency levels across different domains
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map(({ icon: Icon, name, skills }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg border border-green-400/10 hover:border-green-400/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold">{name}</h3>
              </div>
              <ul className="space-y-2">
                {skills.map((skill) => (
                  <li key={skill} className="text-gray-400">{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-900 p-6 rounded-lg"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">Proficiency Levels</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skillsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#fff',
                  }}
                />
                <Bar
                  dataKey="level"
                  fill="#4ade80"
                  animationDuration={2000}
                  label={{ position: 'top', fill: '#fff' }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}