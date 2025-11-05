import { useState } from 'react';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

const ProjectTable = ({ projects }) => {
  const { darkMode } = useDarkMode();
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [filterText, setFilterText] = useState('');

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedProjects = [...projects].sort((a, b) => {
    if (!sortField) return 0;
    
    let aVal = a[sortField];
    let bVal = b[sortField];
    
    if (sortField === 'progress') {
      return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
    }
    
    return sortDirection === 'asc' 
      ? String(aVal).localeCompare(String(bVal))
      : String(bVal).localeCompare(String(aVal));
  });

  const filteredProjects = sortedProjects.filter(project =>
    project.name.toLowerCase().includes(filterText.toLowerCase()) ||
    project.contractor.toLowerCase().includes(filterText.toLowerCase())
  );

  const SortIcon = ({ field }) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? 
      <ChevronUp className="h-4 w-4 inline ml-1" /> : 
      <ChevronDown className="h-4 w-4 inline ml-1" />;
  };

  return (
    <div className={`rounded-lg shadow-sm overflow-hidden transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white'
    }`}>
      <div className={`p-4 md:p-6 border-b transition-colors ${
        darkMode ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0 mb-4">
          <h3 className={`text-base md:text-lg font-semibold transition-colors ${
            darkMode ? 'text-gray-200' : 'text-gray-800'
          }`}>
            Bảng dữ liệu chi tiết
          </h3>
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Tìm kiếm dự án..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className={`w-full md:w-auto pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-xs md:text-sm transition-colors ${
                darkMode ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
            />
            <Filter className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead className={`text-white transition-colors ${
            darkMode ? 'bg-gray-800' : 'bg-green-700'
          }`}>
            <tr>
              <th className="px-2 py-2 text-left text-[10px] font-semibold uppercase">
                STT
              </th>
              <th 
                className={`px-2 py-2 text-left text-[10px] font-semibold uppercase cursor-pointer transition-colors ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-green-600'
                }`}
                onClick={() => handleSort('name')}
              >
                CÔNG VIỆC/HẠNG MỤC <SortIcon field="name" />
              </th>
              <th 
                className={`px-2 py-2 text-left text-[10px] font-semibold uppercase cursor-pointer transition-colors ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-green-600'
                }`}
                onClick={() => handleSort('contractor')}
              >
                NHÀ THẦU <SortIcon field="contractor" />
              </th>
              <th className="px-2 py-2 text-left text-[10px] font-semibold uppercase">
                DỰ TOÁN
              </th>
              <th className="px-2 py-2 text-left text-[10px] font-semibold uppercase">
                THỰC CHI
              </th>
              <th className="px-2 py-2 text-left text-[10px] font-semibold uppercase">
                NGÀY BẮT ĐẦU
              </th>
              <th className="px-2 py-2 text-left text-[10px] font-semibold uppercase">
                NGÀY KẾT THÚC
              </th>
              <th 
                className={`px-2 py-2 text-left text-[10px] font-semibold uppercase cursor-pointer transition-colors ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-green-600'
                }`}
                onClick={() => handleSort('progress')}
              >
                TIẾN ĐỘ <SortIcon field="progress" />
              </th>
              <th className="px-2 py-2 text-left text-[10px] font-semibold uppercase">
                TRẠNG THÁI
              </th>
            </tr>
          </thead>
          <tbody className={`divide-y transition-colors ${
            darkMode ? 'divide-gray-700' : 'divide-gray-200'
          }`}>
            {filteredProjects.map((project, index) => (
              <tr key={project.id} className={`transition-colors ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
              }`}>
                <td className={`px-2 py-2 whitespace-nowrap text-xs ${
                  darkMode ? 'text-gray-300' : 'text-gray-900'
                }`}>
                  {index + 1}
                </td>
                <td className={`px-2 py-2 text-xs ${
                  darkMode ? 'text-gray-300' : 'text-gray-900'
                }`}>
                  {project.name}
                </td>
                <td className={`px-2 py-2 text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.contractor}
                </td>
                <td className={`px-2 py-2 whitespace-nowrap text-xs ${
                  darkMode ? 'text-gray-300' : 'text-gray-900'
                }`}>
                  {project.budget}
                </td>
                <td className={`px-2 py-2 whitespace-nowrap text-xs ${
                  darkMode ? 'text-gray-300' : 'text-gray-900'
                }`}>
                  {project.spent}
                </td>
                <td className={`px-2 py-2 whitespace-nowrap text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.startDate}
                </td>
                <td className={`px-2 py-2 whitespace-nowrap text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.endDate}
                </td>
                <td className="px-2 py-2 whitespace-nowrap">
                  <div className="flex items-center space-x-1">
                    <div className={`rounded-full h-2 w-20 ${
                      darkMode ? 'bg-gray-600' : 'bg-gray-200'
                    }`}>
                      <div
                        className={`h-2 rounded-full transition-all ${
                          project.status === 'over' ? 'bg-red-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${Math.min(project.progress, 100)}%` }}
                      />
                    </div>
                    <span className={`text-[10px] font-medium ${
                      project.status === 'over' ? 'text-red-600' : 'text-green-600'
                    }`}>
                      {project.progress}%
                    </span>
                  </div>
                </td>
                <td className="px-2 py-2 whitespace-nowrap">
                  <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium ${
                    project.status === 'over' 
                      ? 'bg-red-100 text-red-800' 
                      : project.progress >= 90
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status === 'over' ? 'Vượt' : 
                     project.progress >= 90 ? 'Hoàn thành' : 'Đang làm'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredProjects.length === 0 && (
        <div className={`text-center py-12 ${
          darkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          Không tìm thấy dự án nào
        </div>
      )}

      <div className={`px-6 py-4 border-t transition-colors ${
        darkMode ? 'border-gray-800 bg-black/30' : 'border-gray-200 bg-gray-50'
      }`}>
        <p className={`text-sm ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Hiển thị <span className="font-medium">{filteredProjects.length}</span> trên{' '}
          <span className="font-medium">{projects.length}</span> dự án
        </p>
      </div>
    </div>
  );
};

export default ProjectTable;
