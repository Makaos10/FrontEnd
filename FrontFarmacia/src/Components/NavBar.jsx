import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User,} from 'lucide-react';

// Componente Navbar
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-green-600">
              Farma
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600">Inicio</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Medicamentos</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Cuidado personal</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Ofertas</a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="flex items-center px-4 py-2 border border-green-600 text-green-600 rounded hover:bg-green-50">
              <ShoppingCart size={18} className="mr-2" />
              Carrito
            </button>
            <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              <User size={18} className="mr-2" />
              Iniciar sesión
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded">Inicio</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded">Medicamentos</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded">Cuidado personal</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded">Ofertas</a>
            <button className="w-full mt-2 px-3 py-2 border border-green-600 text-green-600 rounded">
              🛒 Carrito
            </button>
            <button className="w-full mt-2 px-3 py-2 bg-green-600 text-white rounded">
              Iniciar sesión
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;