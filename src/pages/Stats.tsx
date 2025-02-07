import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';

export default function Stats() {
  const projectData = [
    { month: 'Jan', projects: 2, commits: 120 },
    { month: 'Feb', projects: 4, commits: 180 },
    { month: 'Mar', projects: 3, commits: 160 },
    { month: 'Apr', projects: 5, commits: 220 },
    { month: 'May', projects: 4, commits: 190 },
    { month: 'Jun', projects: 6, commits: 280 },
  ];

  const techStackData = [
    { name: 'Frontend', value: 45 },
    { name: 'Backend', value: 30 },
    { name: 'DevOps', value: 25 },
  ];

  const performanceData = [
    { subject: 'Speed', A: 90 },
    { subject: 'Reliability', A: 85 },
    { subject: 'Security', A: 88 },
    { subject: 'Code Quality', A: 92 },
    { subject: 'Documentation', A: 85 },
  ];

  const COLORS = ['#4ade80', '#60a5fa', '#f472b6'];

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
            Development Metrics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Comprehensive analysis of project performance, technology distribution, and development patterns
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-900 p-6 rounded-lg"
          >
            <h2 className="text-xl font-semibold mb-4">Project Timeline</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={projectData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                  <XAxis dataKey="month" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      border: 'none',
                      borderRadius: '0.5rem',
                      color: '#fff',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="projects"
                    stroke="#4ade80"
                    strokeWidth={2}
                    name="Projects"
                  />
                  <Line
                    type="monotone"
                    dataKey="commits"
                    stroke="#60a5fa"
                    strokeWidth={2}
                    name="Commits"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-900 p-6 rounded-lg"
          >
            <h2 className="text-xl font-semibold mb-4">Technology Distribution</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={techStackData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {techStackData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-900 p-6 rounded-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performanceData}>
                <PolarGrid stroke="#1f2937" />
                <PolarAngleAxis dataKey="subject" stroke="#fff" />
                <PolarRadiusAxis stroke="#fff" />
                <Radar
                  name="Performance"
                  dataKey="A"
                  stroke="#4ade80"
                  fill="#4ade80"
                  fillOpacity={0.3}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#fff',
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}