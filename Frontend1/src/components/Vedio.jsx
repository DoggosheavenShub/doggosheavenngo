const VideoSection = () => {
  return (
    <div className="w-full py-8 md:py-16 px-4 md:px-8 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 max-w-7xl mx-auto">
        {/* Video container */}
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="w-full h-auto max-h-[80vh] object-contain"
            playsInline // Improves mobile experience
          >
            <source src="./v1.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content container */}
        <div className="w-full md:w-1/2 px-2 sm:px-4 md:px-8 py-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-600 mb-3 md:mb-4">Doggo's Heaven</h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-amber-500">Doggos Heaven</span>, we believe that every dog deserves a
            life full of joy, care, and unconditional love. We're more than just a destination for pets — we're a second
            home where every wagging tail is celebrated and every furry face is treated like family.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mt-3 md:mt-4">
            Built by passionate animal lovers, <span className="font-semibold text-amber-500">Doggos Heaven</span> is
            designed to create the perfect balance of comfort, safety, and happiness. Our mission is to provide an
            environment where dogs feel free, nurtured, and truly understood.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mt-3 md:mt-4">
            From the moment your dog steps through our doors, they become part of our family — surrounded by kindness,
            expert care, and endless affection.
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoSection
