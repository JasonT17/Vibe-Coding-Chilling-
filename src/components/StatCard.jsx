import { TrendingUp } from 'lucide-react';

const StatCard = ({ title, value, unit, subtitle, bgColor, textColor }) => {
  return (
    <div className={`${bgColor} rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow`}>
      <div className="flex items-start justify-between mb-2">
        <h3 className={`text-xs md:text-sm font-semibold ${textColor}`}>{title}</h3>
        <TrendingUp className={`h-3 w-3 md:h-4 md:w-4 ${textColor}`} />
      </div>
      
      <div className={`text-2xl md:text-3xl font-bold ${textColor} mb-1`}>
        {value}
        <span className="text-base md:text-lg ml-1">{unit}</span>
      </div>
      
      <p className={`text-[10px] md:text-xs ${textColor} opacity-80`}>{subtitle}</p>
    </div>
  );
};

export default StatCard;
