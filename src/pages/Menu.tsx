import { useState } from 'react';
import { motion } from 'framer-motion';

interface MenuProps {
  darkMode: boolean;
}

export default function Menu({ darkMode }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'starters', name: 'Starters' },
    { id: 'main', name: 'Main Course' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Drinks' }
  ];

  const menuItems = [
    {
      id: 1,
      category: 'starters',
      name: 'Bruschetta',
      description: 'Toasted bread with tomatoes, garlic, and basil',
      price: '$12',
      image: 'https://images.pexels.com/photos/1532773/pexels-photo-1532773.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      category: 'starters',
      name: 'Caesar Salad',
      description: 'Crispy romaine lettuce with parmesan and croutons',
      price: '$14',
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      category: 'starters',
      name: 'Soup of the Day',
      description: 'Chef special homemade soup',
      price: '$10',
      image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      category: 'main',
      name: 'Truffle Pasta',
      description: 'Handmade pasta with black truffle sauce',
      price: '$32',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      category: 'main',
      name: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with seasonal vegetables',
      price: '$38',
      image: 'https://images.pexels.com/photos/1683545/pexels-photo-1683545.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      category: 'main',
      name: 'Beef Wellington',
      description: 'Premium beef wrapped in puff pastry',
      price: '$45',
      image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 7,
      category: 'main',
      name: 'Risotto',
      description: 'Creamy Italian rice with mushrooms',
      price: '$28',
      image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 8,
      category: 'main',
      name: 'Lamb Chops',
      description: 'Grilled lamb chops with mint sauce',
      price: '$42',
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 9,
      category: 'main',
      name: 'Vegetable Curry',
      description: 'Mixed vegetables in aromatic curry sauce',
      price: '$24',
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 10,
      category: 'desserts',
      name: 'Tiramisu',
      description: 'Classic Italian coffee-flavored dessert',
      price: '$12',
      image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 11,
      category: 'desserts',
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with molten center',
      price: '$14',
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 12,
      category: 'desserts',
      name: 'Crème Brûlée',
      description: 'Vanilla custard with caramelized sugar',
      price: '$13',
      image: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 13,
      category: 'drinks',
      name: 'Signature Cocktails',
      description: 'House special mixed drinks',
      price: '$15',
      image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 14,
      category: 'drinks',
      name: 'Fresh Juices',
      description: 'Seasonal fruit juices',
      price: '$8',
      image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 15,
      category: 'drinks',
      name: 'Premium Wine',
      description: 'Curated wine selection',
      price: '$25',
      image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className={`min-h-screen pt-32 pb-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Our <span className="text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text">Menu</span>
          </h1>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Explore our delicious selection of dishes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white shadow-lg'
                  : darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`rounded-3xl overflow-hidden ${
                darkMode ? 'bg-gray-800/50' : 'bg-gray-50'
              } backdrop-blur-lg border ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              } shadow-lg hover:shadow-2xl transition-all cursor-pointer`}
            >
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  {item.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.name}
                </h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
