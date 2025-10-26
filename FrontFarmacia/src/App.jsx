import React from 'react';
import NavBar from './Components/NavBar';
import ProductoCarrousel from './Components/ProductoCarrousel';
import Footer from './Components/Footer';

function App() {
  // Productos en oferta
  const ofertaProductos = [
    { image: 'imgg/Para.webp', name: 'Paracetamol 500mg', price: '300' },
    { image: 'imgg/Ibu.webp', name: 'Ibuprofeno 400mg', price: '250' },
    { image: 'imgg/amox.webp', name: 'Amoxicilina 500mg (16 comprimidos)', price: '320' },
    { image: 'imgg/Omep.jpg', name: 'Omeprazol 20mg', price: '230' },
    { image: 'imgg/Loratra.webp', name: 'Loratadina 10mg', price: '199' },
    { image: 'imgg/Redoxon.webp', name: 'Redoxon Naranja 1g', price: '100' }
  ];

  // Productos más vendidos
  const masVendidosProductos = [
    { image: 'imgg/Abrilar Jarabe 100 ML.jpg', name: 'Abrilar Jarabe 100ml', price: '180' },
    { image: 'imgg/Bio grip C soluble.webp', name: 'Bio Grip C Soluble 1 Sobre', price: '270' },
    { image: 'imgg/Dolex 500 MG 5 Capsulas Blandas.webp', name: 'Dolex 500 mg 5 cápsulas blandas', price: '230' },
    { image: 'imgg/Novemina Fuerte 10 comp.webp', name: 'Novemina fuerte 10 comp.', price: '210' },
    { image: 'imgg/Zolben 500 mg 12 Comp..webp', name: 'Zolben 500 mg 12 comp', price: '190' },
    { image: 'imgg/Vimax Masticalble 50 MG 8 comp.jpg', name: 'Vimax Masticable 50 mg 8 comp.', price: '350' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main>
        <ProductoCarrousel 
          title="Medicamentos en oferta (Uruguay)" 
          products={ofertaProductos}
        />
        <ProductoCarrousel 
          title="Medicamentos más vendidos" 
          products={masVendidosProductos}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;