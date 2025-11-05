import { Image } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

const Gallery = ({ images }) => {
  const { darkMode } = useDarkMode();
  
  return (
    <div className={`rounded-lg p-4 md:p-6 shadow-sm transition-colors duration-300 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <h3 className={`text-base md:text-lg font-semibold mb-3 md:mb-4 transition-colors ${
        darkMode ? 'text-gray-200' : 'text-gray-800'
      }`}>
        Hình ảnh công trình
      </h3>
      
      <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 md:gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className={`${image.color} rounded-lg aspect-video flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer`}
          >
            <Image className="h-8 w-8 md:h-12 md:w-12 text-white opacity-50" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
