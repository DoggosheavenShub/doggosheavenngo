
function HelpSection({onContactClick}) {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-[#94699c] relative">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Lend a Paw, Change a Life<span className="text-amber-500">.</span>
          </h2>

          <p className="text-white text-sm font-bold">
            Join us in making a difference today. Your support helps rescue animals, provide care, and give them the
            chance to find loving homes.
          </p>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">How You Can Help:</h3>
            <p className="text-lg font-bold text-white">Three are three ways you can bring positive change in the lives of our cute buddies:</p>
            <div className="flex items-start gap-3">
              <div className="min-w-4 mt-1">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <p className="font-bold text-white mr-1">	Walk-in our facility and take home the bundle of joy that boops you back</p>
                
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="min-w-4 mt-1">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <p className="font-bold text-white mr-1">Sponsor a doggo or two and be their financial support.</p>
                
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="min-w-4 mt-1">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <p className="font-bold text-white mr-1">Contribute one time or each month to help us run the facility.</p>
               
              </div>
            </div>
          </div>

          <div className="mt-10">
          
               <button onClick={onContactClick} className="text-[white] py-4 px-8 cursor-pointer bg-blue-500 font-bold rounded-l-full rounded-tr-full">
                  <a>Contact us</a>
              </button>
         
          </div>
        </div>

        {/* Dog image - hidden on mobile, visible on larger screens */}
        <div className="hidden md:block absolute bottom-0 right-0 md:right-10 lg:right-42 z-0">
          <img
            src="https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/67349fde31bfbc8a38137972_optimized_1025"
            alt="Rottweiler dog"
            className="h-[50vh] md:h-[70vh] lg:h-[90vh] rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default HelpSection
