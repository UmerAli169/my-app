import Dashboard from '@/views/ui/main/Dashboard';
import ProductSection from '../../views/ui/main/ProductSection'
import productsData from '../../Data/mainPage/cardSection/products.json'

import React from 'react';
import Frame from '@/views/ui/main/Frame';
import BlogSection from '@/views/ui/main/BlogSection';

function Home() {
  return (
    <div>
         <Dashboard />
         <ProductSection title="NEW ARRIVALS" products={productsData.newArrivals} cardWidth={289} />
         <ProductSection title="BEST SELLERS" products={productsData.bestSellers} cardWidth={289} />
         <Frame/>
         <BlogSection/>
   
    </div>
  );
}

export default Home;
