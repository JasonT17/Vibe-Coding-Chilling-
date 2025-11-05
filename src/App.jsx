import Header from './components/Header';
import Filters from './components/Filters';
import StatCard from './components/StatCard';
import ProgressChart from './components/ProgressChart';
import Gallery from './components/Gallery';
import ProjectTable from './components/ProjectTable';
import { statsData, chartData, projectsData, galleryImages } from './data/mockData';
import { useDarkMode } from './context/DarkModeContext';

function App() {
  const { darkMode } = useDarkMode();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-50'}`}>
      <Header />
      
      <main className={`container mx-auto px-3 md:px-4 py-4 md:py-6 space-y-4 md:space-y-6 ${
        darkMode ? 'bg-black' : ''
      }`}>
        {/* Filters */}
        <Filters />
        
        {/* Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {statsData.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>

        {/* Chart and Gallery Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="lg:col-span-2">
            <ProgressChart data={chartData} />
          </div>
          <div className="lg:col-span-1">
            <Gallery images={galleryImages} />
          </div>
        </div>

        {/* Project Table */}
        <ProjectTable projects={projectsData} />
      </main>

      {/* Footer */}
      <footer className={`border-t mt-8 md:mt-12 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
      }`}>
        <div className="container mx-auto px-3 md:px-4 py-4 md:py-6">
          <p className={`text-center text-xs md:text-sm transition-colors ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © 2025 W's Dashboard. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
