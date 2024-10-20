import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductShowcase = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const fallbackBikes = [
    {
      id: 1,
      title: "Mountain Explorer Pro",
      description: "Advanced mountain bike with full suspension",
      price: "$2,499",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Urban Commuter Elite",
      description: "Perfect for city riding with integrated lights",
      price: "$1,899",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Road Master Carbon",
      description: "Lightweight carbon frame road bike",
      price: "$3,299",
      image: "/api/placeholder/400/300"
    }
  ];

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await axios.get(
          'https://bikeindex.org:443/api/v3/search?page=1&per_page=20&location=IP&distance=10&stolenness=all'
        );

        const transformedBikes = response.data.bikes.map(bike => ({
          id: bike.id,
          title: bike.title || 'Premium Bicycle',
          description: bike.frame_model || 'High-performance bike with advanced features',
          price: '$' + (Math.floor(Math.random() * 2000) + 1000).toLocaleString(),
          image: bike.large_img || "/common_bicycle.jpg"
        }));

        setBikes(transformedBikes);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching bikes:', err);
        setBikes(fallbackBikes); 
        setError('Failed to fetch bikes. Showing sample data instead.');
        setLoading(false);
      }
    };

    fetchBikes();
  }, []);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 6); 
  };

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Premium Bikes</h2>
        
        {error && (
          <div className="text-amber-600 text-center mb-4">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bikes.slice(0, visibleCount).map((bike) => (
              <div key={bike.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <div className="relative h-48">
                  <img
                    src={bike.image}
                    alt={bike.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/api/placeholder/400/300";
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
                    {bike.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{bike.title}</h3>
                  <p className="text-gray-600 mb-4">{bike.description}</p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {visibleCount < bikes.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMore}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;
