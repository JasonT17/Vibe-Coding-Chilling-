import { useState } from 'react';
import { ChevronDown, Filter } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

const Filters = () => {
  const { darkMode } = useDarkMode();
  const [isExpanded, setIsExpanded] = useState(true);
  
  const [filters, setFilters] = useState({
    reportType: 'Hợp nhất',
    selectedUnits: [],
    year: new Date().getFullYear(),
    period: 'Quý I',
    q1Version: 'Hợp nhất Trước Kiểm toán',
    q2Version: 'Hợp nhất Sau Kiểm toán',
    q3Version: 'Hợp nhất Trước Kiểm toán',
    q4Version: 'Hợp nhất Sau Kiểm toán',
  });
  
  const [showUnitDropdown, setShowUnitDropdown] = useState(false);

  const reportTypes = ['Hợp nhất', 'Công ty Mẹ'];
  const units = [
    { id: 'all', name: 'Chọn tất cả' },
    { id: 'bcc', name: 'BCC Oil vs Gas' },
    { id: 'bsr', name: 'BSR' },
    { id: 'butru', name: 'Bù trữ' },
    { id: 'dqs', name: 'DQS' },
    { id: 'ptsc', name: 'PTSC' },
    { id: 'pvn-holding-conso', name: 'PVN Holding (Conso)' },
    { id: 'pvoil', name: 'PVOil' },
    { id: 'pvpower', name: 'PVPower' },
    { id: 'pvtrans', name: 'PVTrans' },
    { id: 'vnpoly', name: 'VNPoly' },
    { id: 'pvep', name: 'PVEP' },
    { id: 'pvfcco', name: 'PVFCCo' },
    { id: 'pvgas', name: 'PVGAS' },
    { id: 'pvmr', name: 'PVMR' },
    { id: 'pvn-holding', name: 'PVN Holding' },
    { id: 'pvc', name: 'PVC' },
    { id: 'pvcfc', name: 'PVCFC' },
    { id: 'pvchem', name: 'PVCHEM' },
    { id: 'pvcombank', name: 'PVCombank' },
    { id: 'pvd', name: 'PVD' },
  ];
  const years = [2023, 2024, 2025, 2026];
  const periods = ['Quý I', 'Quý II', 'Quý III', 'Quý IV'];
  const versions = [
    'Hợp nhất Sau Kiểm toán',
    'Hợp nhất Trước Kiểm toán'
  ];

  const handleUnitToggle = (unitId) => {
    if (unitId === 'all') {
      if (filters.selectedUnits.length === units.length - 1) {
        setFilters({...filters, selectedUnits: []});
      } else {
        const allUnitIds = units.filter(u => u.id !== 'all').map(u => u.id);
        setFilters({...filters, selectedUnits: allUnitIds});
      }
    } else {
      const newSelected = filters.selectedUnits.includes(unitId)
        ? filters.selectedUnits.filter(id => id !== unitId)
        : [...filters.selectedUnits, unitId];
      setFilters({...filters, selectedUnits: newSelected});
    }
  };

  const getUnitDisplayText = () => {
    if (filters.selectedUnits.length === 0) return 'PVN Holding';
    if (filters.selectedUnits.length === units.length - 1) return 'Chọn tất cả';
    return `${filters.selectedUnits.length} đơn vị được chọn`;
  };

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

            {/* Đơn vị - Multi-select */}
            <div className="relative">
              <label className={`block text-xs mb-1.5 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Đơn vị
              </label>
              <button
                type="button"
                onClick={() => setShowUnitDropdown(!showUnitDropdown)}
                className={`w-full px-3 py-2 rounded-lg border text-sm text-left focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors flex items-center justify-between ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 text-gray-200' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <span>{getUnitDisplayText()}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${showUnitDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showUnitDropdown && (
                <div className={`absolute z-50 w-full mt-1 rounded-lg border shadow-lg max-h-60 overflow-auto ${
                  darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
                }`}>
                  {units.map(unit => (
                    <label
                      key={unit.id}
                      className={`flex items-center px-3 py-2 cursor-pointer hover:bg-opacity-50 transition-colors ${
                        darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={unit.id === 'all' ? filters.selectedUnits.length === units.length - 1 : filters.selectedUnits.includes(unit.id)}
                        onChange={() => handleUnitToggle(unit.id)}
                        className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <span className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                        {unit.name}
                      </span>
                    </label>
                  ))}
                </div>
              )}
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
