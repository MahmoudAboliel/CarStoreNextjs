"use client";

// import { useState } from "react";
// import AdCard from "@/components/cards/AdCard";
// import SectionHeader from "@/components/sections/SectionHeader";
// import CustomLink from "@/components/CustomLink";
// import { categories, adsData } from "@/lib/utils";

const AdsPage = () => {
  // const [activeCategory, setActiveCategory] = useState("all");


  // // تصفية الإعلانات حسب الفئة
  // const filteredAds = activeCategory === "all" 
  //   ? adsData 
  //   : adsData.filter(ad => ad.category === activeCategory);


  return (
    <div></div>
  );
};

export default AdsPage;

// <section className="py-5 bg-gray-50">
// <div className="container mx-auto px-4">
//   <SectionHeader 
//       subtitle="latest ads"
//       title="Browse the latest ads"
//       span="In various fields"
//   />

//   {/* تصفية حسب الفئة */}
//   <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
//     <div className="flex space-x-2 mx-auto">
//       {categories.map((category) => (
//         <button
//           key={category.id}
//           onClick={() => setActiveCategory(category.id)}
//           className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
//             activeCategory === category.id
//               ? "bg-cc-red text-white"
//               : "bg-white text-gray-700 hover:bg-gray-100"
//           }`}
//         >
//           {category.name}
//         </button>
//       ))}
//     </div>
//   </div>

//   {/* قائمة الإعلانات */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//     {filteredAds.map((ad) => (
//       <AdCard key={ad.id}  
//         data={{id: ad.id, name: ad.title, ad.description, ad.}}
//       />
//     ))}
//   </div>

//   {/* زر عرض المزيد */}
//   <CustomLink 
//     label="Show more"
//     href="/ads"
//     classes="w-fit mx-auto mt-8"
//   />
// </div>
// </section>