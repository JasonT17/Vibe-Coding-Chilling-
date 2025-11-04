import { Image } from 'lucide-react';

const Gallery = ({ images }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Hình ảnh công trình
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className={`${image.color} rounded-lg aspect-video flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer`}
          >
            <Image className="h-12 w-12 text-white opacity-50" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
