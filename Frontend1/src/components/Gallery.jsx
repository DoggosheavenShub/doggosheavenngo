// import { useState } from "react";

// function GallerySection() {
//   const galleryImages = [
//     {
//       id: 1,
//       src: "https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/673b1893550232c45440dd8f_optimized_1396_c1396x930-0x0",
//       alt: "Dog in shelter",
//     },
//     {
//       id: 2,
//       src: "https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/673b18b3550232c45440de47_optimized_1396_c1396x930-0x0",
//       alt: "Couple with dog",
//     },
//     {
//       id: 3,
//       src: "https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/673b18c2ece0e84849bc17b8_optimized_930_c930x1395-0x0",
//       alt: "Rabbit",
//     },
//     {
//       id: 4,
//       src: "https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/673b18d69e0dbc5d3198d4da_optimized_1140_c1140x1140-0x0",
//       alt: "Cat",
//     },
//     {
//       id: 5,
//       src: "https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/673b18e9550232c45440def3_optimized_1091",
//       alt: "Small pets",
//     },
//     {
//       id: 6,
//       src: "https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/673b18f9550232c45440df2f_optimized_1322_c1322x983-0x0",
//       alt: "Cats on counter",
//     },
//   ];

//   const currentImages = galleryImages;

//   return (
//     <section className="w-full py-6 px-4 bg-gray-100">
//       <div className="max-w-8xl mx-auto">
//         {/* Fixed height applied here */}
//         <div className=" flex flex-col space-y-4 h-auto md:flex-row w-full space-x-6 md:h-[300px] min-[960px]:h-[350px]">
      

//           <div className="w-full md:w-[50%] h-[200px] sm:h-[400px] md:h-auto  flex space-x-4">
//             <div className="w-[60%] h-full">
//               <img
//                 src={currentImages[0].src || "/placeholder.svg"}
//                 alt={currentImages[0].alt}
//                 className="w-full h-full object-cover "
//               />
//             </div>

//             {/* First column of two stacked images */}
//             <div className="w-[40%] flex flex-col space-y-6 h-full">
//               <div className="h-1/2">
//                 <img
//                   src={currentImages[1].src || "/placeholder.svg"}
//                   alt={currentImages[1].alt}
//                   className="w-full h-full object-cover "
//                 />
//               </div>
//               <div className="h-1/2">
//                 <img
//                   src={currentImages[2].src || "/placeholder.svg"}
//                   alt={currentImages[2].alt}
//                   className="w-full h-full object-cover "
//                 />
//               </div>
//             </div>
//           </div>

//           <div className=" w-full md:w-[50%] h-[200px] sm:h-[400px] md:h-auto flex space-x-4">
//             {/* Right large image */}
//             <div className="w-[60%] h-full">
//               <img
//                 src={currentImages[3].src || "/placeholder.svg"}
//                 alt={currentImages[3].alt}
//                 className="w-full h-full object-cover "
//               />
//             </div>

//             {/* Second column of two stacked images */}
//             <div className="w-[40%] flex flex-col space-y-6 h-full">
//               <div className="h-1/2">
//                 <img
//                   src={currentImages[4].src || "/placeholder.svg"}
//                   alt={currentImages[4].alt}
//                   className="w-full h-full object-cover "
//                 />
//               </div>
//               <div className="h-1/2">
//                 <img
//                   src={currentImages[5].src || "/placeholder.svg"}
//                   alt={currentImages[5].alt}
//                   className="w-full h-full object-cover "
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default GallerySection;

function GallerySection() {
  const galleryImages = [
    {
      id: 1,
      src: "g1.jpeg",
      alt: "Dog in shelter",
    },
    {
      id: 2,
      src: "g2.jpeg",
      alt: "Couple with dog",
    },
    {
      id: 3,
      src: "g3.jpeg",
      alt: "Rabbit",
    },
    {
      id: 4,
      src: "g7.jpeg",
      alt: "Cat",
    },
    {
      id: 5,
      src: "g5.jpeg",
      alt: "Small pets",
    },
    {
      id: 6,
      src: "g6.jpeg",
      alt: "Cats on counter",
    },
  ]

  const currentImages = galleryImages

  return (
    <section className="w-full py-6 px-4 bg-gray-100">
      <div className="max-w-8xl mx-auto">
        {/* Main container with proper spacing for all screen sizes */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-4 lg:gap-6 w-full md:h-[300px] lg:h-[350px] xl:h-[400px]">
          {/* First column */}
          <div className="w-full h-[300px] sm:h-[350px] md:w-1/2 md:h-full flex gap-4">
            <div className="w-[60%] h-full">
              <img
                src={currentImages[0].src || "/placeholder.svg"}
                alt={currentImages[0].alt}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>

            {/* First column of two stacked images */}
            <div className="w-[40%] flex flex-col gap-4 h-full">
              <div className="h-1/2">
                <img
                  src={currentImages[1].src || "/placeholder.svg"}
                  alt={currentImages[1].alt}
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
              <div className="h-1/2">
                <img
                  src={currentImages[2].src || "/placeholder.svg"}
                  alt={currentImages[2].alt}
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
            </div>
          </div>

          {/* Second column */}
          <div className="w-full h-[300px] sm:h-[350px] md:w-1/2 md:h-full flex gap-4">
            {/* Right large image */}
            <div className="w-[60%] h-full">
              <img
                src={currentImages[3].src || "/placeholder.svg"}
                alt={currentImages[3].alt}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>

            {/* Second column of two stacked images */}
            <div className="w-[40%] flex flex-col gap-4 h-full">
              <div className="h-1/2">
                <img
                  src={currentImages[4].src || "/placeholder.svg"}
                  alt={currentImages[4].alt}
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
              <div className="h-1/2">
                <img
                  src={currentImages[5].src || "/placeholder.svg"}
                  alt={currentImages[5].alt}
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GallerySection

