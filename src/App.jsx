import Header from './components/Header';
import StatCard from './components/StatCard';
import ProgressChart from './components/ProgressChart';
import Gallery from './components/Gallery';
import ProjectTable from './components/ProjectTable';
import { statsData, chartData, projectsData, galleryImages } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsData.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>

        {/* Chart and Gallery Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-gray-600">
            © 2025 W's Dashboard. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
