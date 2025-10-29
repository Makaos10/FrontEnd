import React from 'react';
import ProductoCarrousel from '../Components/ProductoCarrousel';
import CarrouselPubli from '../Components/CarrouselPubli';
import BannerCarrousel from '../Components/BannerCarrousel';

function Inicio() {
  const masVendidosProductos = [
    { image: 'imgg/Abrilar Jarabe 100 ML.jpg', name: 'Abrilar Jarabe 100ml', price: '180' },
    { image: 'imgg/Bio grip C soluble.webp', name: 'Bio Grip C Soluble 1 Sobre', price: '270' },
    { image: 'imgg/Dolex 500 MG 5 Capsulas Blandas.webp', name: 'Dolex 500 mg 5 cápsulas blandas', price: '230' },
    { image: 'imgg/Novemina Fuerte 10 comp.webp', name: 'Novemina fuerte 10 comp.', price: '210' },
    { image: 'imgg/Zolben 500 mg 12 Comp..webp', name: 'Zolben 500 mg 12 comp', price: '190' },
    { image: 'imgg/Vimax Masticalble 50 MG 8 comp.jpg', name: 'Vimax Masticable 50 mg 8 comp.', price: '350' }
  ];

  const suplementosProductos = [
    { image: 'imgg/Abrilar Jarabe 100 ML.jpg', name: 'Abrilar Jarabe 100ml', price: '180' },
    { image: 'imgg/Bio grip C soluble.webp', name: 'Bio Grip C Soluble 1 Sobre', price: '270' },
    { image: 'imgg/Dolex 500 MG 5 Capsulas Blandas.webp', name: 'Dolex 500 mg 5 cápsulas blandas', price: '230' },
    { image: 'imgg/Novemina Fuerte 10 comp.webp', name: 'Novemina fuerte 10 comp.', price: '210' },
    { image: 'imgg/Zolben 500 mg 12 Comp..webp', name: 'Zolben 500 mg 12 comp', price: '190' },
    { image: 'imgg/Vimax Masticalble 50 MG 8 comp.jpg', name: 'Vimax Masticable 50 mg 8 comp.', price: '350' }
  ];

  return (
    <>
      <CarrouselPubli />

      <ProductoCarrousel 
        title="Medicamentos más vendidos" 
        products={masVendidosProductos}
      />

      <BannerCarrousel />

      <ProductoCarrousel 
        title="Suplementos" 
        products={suplementosProductos}
      />
    </>
  );
}

export default Inicio;
