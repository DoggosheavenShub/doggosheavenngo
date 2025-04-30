import React from "react";

const Vedio = () => {
  return (
    <div className="w-full  py-16 px-8 flex items-center justify-center bg-white">
      <div className="w-full md:w-[50%] rounded-lg overflow-hidden ">
        <video
          autoPlay
          muted
          loop
          className="w-full h-auto max-h-[80vh] object-contain"
        >
          <source src="./v1.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full md:w-[50%] px-4 md:px-8 py-6">
  <h1 className="text-3xl md:text-4xl font-bold text-amber-600 mb-4">
    Doggo's Heaven
  </h1>

  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
    At <span className="font-semibold text-amber-500">Doggos Heaven</span>, we believe that every dog deserves a life full of 
    joy, care, and unconditional love. We’re more than just a destination for pets — 
    we’re a second home where every wagging tail is celebrated and every furry face 
    is treated like family.
  </p>

  <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
    Built by passionate animal lovers, <span className="font-semibold text-amber-500">Doggos Heaven</span> is designed to create the 
    perfect balance of comfort, safety, and happiness. Our mission is to provide an 
    environment where dogs feel free, nurtured, and truly understood.
  </p>

  <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
    From the moment your dog steps through our doors, they become part of our family — 
    surrounded by kindness, expert care, and endless affection.
  </p>
</div>

    </div>
  );
};

export default Vedio;
