import { useState } from "react"

function MainHero() {
  const [showPopup, setShowPopup] = useState(false)

  const openPopup = () => setShowPopup(true)
  const closePopup = () => setShowPopup(false)

  return (
    <section
      className="w-full pb-4 h-[90vh] md:h-[100vh] bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 md:px-16 relative overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: "url(./cover.png)" }}
    >
      <div className="max-w-6xl mx-auto h-full flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="md:w-1/2 z-10 flex items-center h-full ">
          <div>
            <p className="text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-4">- Treats and boops -</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
             Finding hoomans 
              <br />
              for  furry paws!
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8">
            Add a doggo to your family photo.
            </p>
            <button className="text-[black] cursor-pointer bg-white font-bold rounded-l-full px-10 py-2 rounded-tr-full" onClick={openPopup}>
                        Donate
              </button>
          
          </div>
        </div>
      </div>

    
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60" onClick={closePopup}></div>

          {/* Popup Content */}
          <div className="bg-white rounded-lg shadow-2xl relative z-10 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] pt-8 overflow-auto flex flex-col">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
              onClick={closePopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Popup Content */}
            <div className="flex flex-col items-center justify-center h-full">
              <img src="./Qr.png" alt="Adopt a pet" className="h-[200px] sm:h-[300px] md:h-[400px]" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default MainHero
