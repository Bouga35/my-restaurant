

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
          Experience Fine Dining
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Savor the perfect blend of traditional and modern cuisine in an elegant atmosphere
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors">
            View Menu
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
            Make Reservation
          </button>
        </div>
      </div>
    </section>
  );
}