import { useState } from 'react';
import { ChevronDown, Filter } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

const Filters = () => {
  const { darkMode } = useDarkMode();
  const [isExpanded, setIsExpanded] = useState(true);
  
  const [filters, setFilters] = useState({
    reportType: 'Hợp nhất',
    unit: 'PVN Holding',
    year: new Date().getFullYear(),
    period: 'Quý I',
    q1Version: 'Hợp nhất Trước Kiểm toán',
    q2Version: 'Hợp nhất Sau Kiểm toán',
    q3Version: 'Hợp nhất Trước Kiểm toán',
    q4Version: 'Hợp nhất Sau Kiểm toán',
  });

  const reportTypes = ['Hợp nhất', 'Riêng lẻ', 'Tổng hợp'];
  const units = ['PVN Holding', 'PVN 1', 'PVN 2', 'PVN 3'];
  const years = [2023, 2024, 2025, 2026];
  const periods = ['Quý I', 'Quý II', 'Quý III', 'Quý IV', 'Năm'];
  const versions = [
    'Hợp nhất Trước Kiểm toán',
    'Hợp nhất Sau Kiểm toán',
    'Riêng lẻ Trước Kiểm toán',
    'Riêng lẻ Sau Kiểm toán'
  ];

  return (
    <div className={`rounded-lg shadow-sm transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'
    }`}>
      {/* Header */}
      <div 
        className={`flex items-center justify-between p-4 cursor-pointer transition-colors ${
          darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-2">
          <Filter className={`h-4 w-4 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
          <h3 className={`font-semibold uppercase text-sm ${
            darkMode ? 'text-gray-200' : 'text-gray-800'
          }`}>
            Bộ lọc
          </h3>
        </div>
        <ChevronDown className={`h-5 w-5 transition-transform ${
          isExpanded ? 'rotate-180' : ''
        } ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
      </div>

      {/* Filter Content */}
      {isExpanded && (
        <div className={`p-4 pt-0 border-t transition-colors ${
          darkMode ? 'border-gray-800' : 'border-gray-200'
        }`}>
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Loại báo cáo */}
            <div>
              <label className={`block text-xs mb-1.5 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Loại báo cáo
              </label>
              <select
                value={filters.reportType}
                onChange={(e) => setFilters({...filters, reportType: e.target.value})}
                className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 text-gray-200' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                {reportTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Đơn vị */}
            <div>
              <label className={`block text-xs mb-1.5 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Đơn vị
              </label>
              <select
                value={filters.unit}
                onChange={(e) => setFilters({...filters, unit: e.target.value})}
                className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 text-gray-200' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                {units.map(unit => (
                  <option key={unit} value={unit}>{unit}</option>
                ))}
              </select>
            </div>

            {/* Năm */}
            <div>
              <label className={`block text-xs mb-1.5 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Năm
              </label>
              <select
                value={filters.year}
                onChange={(e) => setFilters({...filters, year: e.target.value})}
                className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 text-gray-200' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            {/* Kỳ báo cáo */}
            <div>
              <label className={`block text-xs mb-1.5 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Kỳ báo cáo
              </label>
              <select
                value={filters.period}
                onChange={(e) => setFilters({...filters, period: e.target.value})}
                className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 text-gray-200' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                {periods.map(period => (
                  <option key={period} value={period}>{period}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 2 - Phiên bản báo cáo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Quý 1 */}
            <div>
              <label className={`block text-xs mb-1.5 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Phiên bản báo cáo Quý 1
              </label>
              <select
                value={filters.q1Version}
                onChange={(e) => setFilters({...filters, q1Version: e.target.value})}
                className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 text-gray-200' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                {versions.map(version => (
                  <option key={version} value={version}>{version}</option>
                ))}
              </select>
            </div>

            {/* Quý 2 */}
            <div>
              <label className={`block text-xs mb-1.5 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Phiên bản báo cáo Quý 2
              </label>
              <select
                value={filters.q2Version}
                onChange={(e) => setFilters({...filters, q2Version: e.target.value})}
                className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 text-gray-200' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                {versions.map(version => (
                  <option key={version} value={version}>{version}</option>
                ))}
              </select>
            </div>

            {/* Quý 3 */}
            <div>
              <label className={`block text-xs mb-1.5 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Phiên bản báo cáo Quý 3
              </label>
              <select
                value={filters.q3Version}
                onChange={(e) => setFilters({...filters, q3Version: e.target.value})}
                className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 text-gray-200' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                {versions.map(version => (
                  <option key={version} value={version}>{version}</option>
                ))}
              </select>
            </div>

            {/* Quý 4 */}
            <div>
              <label className={`block text-xs mb-1.5 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Phiên bản báo cáo Quý 4
              </label>
              <select
                value={filters.q4Version}
                onChange={(e) => setFilters({...filters, q4Version: e.target.value})}
                className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 text-gray-200' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                {versions.map(version => (
                  <option key={version} value={version}>{version}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
