import Dashboard from '@/views/ui/main/Dashboard';
import ProductSection from '../../views/ui/main/ProductSection'
import productsData from '../../Data/mainPage/cardSection/products.json'

import React from 'react';
import Frame from '@/views/ui/main/Frame';
import BlogSection from '@/views/ui/main/BlogSection';
import SkinQuiz from '@/views/ui/main/SkinQuiz';
import InstagramGallery from '@/views/ui/main/InstagramGallery';

function Home() {
  return (
    <div>
         <Dashboard />
         <ProductSection title="NEW ARRIVALS" products={productsData.newArrivals} cardWidth={289} />
         <ProductSection title="BEST SELLERS" products={productsData.bestSellers} cardWidth={289} />
         <Frame/>
         <BlogSection/>
         <SkinQuiz/>
         <InstagramGallery/>
   
    </div>
  );
}

export default Home;
