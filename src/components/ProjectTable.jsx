import { useState } from 'react';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';

const ProjectTable = ({ projects }) => {
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
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Bảng dữ liệu chi tiết
          </h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm dự án..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            />
            <Filter className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                STT
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider cursor-pointer hover:bg-green-600"
                onClick={() => handleSort('name')}
              >
                Công việc/Hạng mục <SortIcon field="name" />
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider cursor-pointer hover:bg-green-600"
                onClick={() => handleSort('contractor')}
              >
                Nhà thầu <SortIcon field="contractor" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Dự toán
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Thực chi
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Ngày bắt đầu
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Ngày kết thúc
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider cursor-pointer hover:bg-green-600"
                onClick={() => handleSort('progress')}
              >
                Tiến độ <SortIcon field="progress" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Trạng thái
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredProjects.map((project, index) => (
              <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {project.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {project.contractor}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {project.budget}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {project.spent}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {project.startDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {project.endDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 w-32">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          project.status === 'over' ? 'bg-red-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${Math.min(project.progress, 100)}%` }}
                      />
                    </div>
                    <span className={`text-xs font-medium ${
                      project.status === 'over' ? 'text-red-600' : 'text-green-600'
                    }`}>
                      {project.progress}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    project.status === 'over' 
                      ? 'bg-red-100 text-red-800' 
                      : project.progress >= 90
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status === 'over' ? 'Vượt dự toán' : 
                     project.progress >= 90 ? 'Gần hoàn thành' : 'Đang thực hiện'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Không tìm thấy dự án nào
        </div>
      )}

      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
        <p className="text-sm text-gray-600">
          Hiển thị <span className="font-medium">{filteredProjects.length}</span> trên{' '}
          <span className="font-medium">{projects.length}</span> dự án
        </p>
      </div>
    </div>
  );
};

export default ProjectTable;
