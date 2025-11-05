import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useDarkMode } from '../context/DarkModeContext';

const ProgressChart = ({ data }) => {
  const { darkMode } = useDarkMode();
  
  return (
    <div className={`rounded-lg p-4 md:p-6 shadow-sm transition-colors duration-300 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <h3 className={`text-base md:text-lg font-semibold mb-3 md:mb-4 transition-colors ${
        darkMode ? 'text-gray-200' : 'text-gray-800'
      }`}>
        Biểu đồ tiến độ thi công
      </h3>
      
      <ResponsiveContainer width="100%" height={250} className="md:h-[300px]">
        <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="month" 
            stroke="#6b7280"
            style={{ fontSize: '10px' }}
          />
          <YAxis 
            stroke="#6b7280"
            style={{ fontSize: '10px' }}
            label={{ value: 'Tiến độ (%)', angle: -90, position: 'insideLeft', style: { fontSize: '10px' } }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '10px'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#16a34a" 
            strokeWidth={2}
            dot={{ fill: '#16a34a', r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgressChart;
