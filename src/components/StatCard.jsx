import { TrendingUp } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

const StatCard = ({ title, value, unit, subtitle, bgColor, textColor }) => {
  const { darkMode } = useDarkMode();
  
  // Dark mode color mapping
  const darkBgColors = {
    'bg-green-100': 'bg-green-900/30',
    'bg-blue-100': 'bg-blue-900/30',
    'bg-orange-100': 'bg-orange-900/30',
    'bg-purple-100': 'bg-purple-900/30',
  };
  
  const darkTextColors = {
    'text-green-800': 'text-green-200',
    'text-blue-800': 'text-blue-200',
    'text-orange-800': 'text-orange-200',
    'text-purple-800': 'text-purple-200',
  };
  
  const currentBgColor = darkMode ? darkBgColors[bgColor] : bgColor;
  const currentTextColor = darkMode ? darkTextColors[textColor] : textColor;
  
  return (
    <div className={`${currentBgColor} rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300`}>
      <div className="flex items-start justify-between mb-2">
        <h3 className={`text-xs md:text-sm font-semibold ${currentTextColor}`}>{title}</h3>
        <TrendingUp className={`h-3 w-3 md:h-4 md:w-4 ${currentTextColor}`} />
      </div>
      
      <div className={`text-2xl md:text-3xl font-bold ${currentTextColor} mb-1`}>
        {value}
        <span className="text-base md:text-lg ml-1">{unit}</span>
      </div>
      
      <p className={`text-[10px] md:text-xs ${currentTextColor} opacity-80`}>{subtitle}</p>
    </div>
  );
};

export default StatCard;
