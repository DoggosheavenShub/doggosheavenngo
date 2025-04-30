

function StatsSection() {
  return (
    <section className="w-full py-12 bg-[#1F7DBA] text-white">
      <div className="max-w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex gap-4 justify-center items-center">
          <div className="bg-white rounded-full p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
            <img src="./s1.svg" alt="Volunteers icon" />
          </div>
          <div>
            {/* <h3 className="text-2xl sm:text-3xl font-bold mb-1">60 +</h3> */}
            <p className="uppercase text-xs font-bold tracking-wider">BOARDING</p>
          </div>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <div className="bg-white rounded-full p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
            <img src="./s2.svg" alt="Donations icon" />
          </div>
          <div>
            {/* <h3 className="text-2xl sm:text-3xl font-bold mb-1">4.2K</h3> */}
            <p className="uppercase text-xs font-bold tracking-wider">VET APPROVED FOOD</p>
          </div>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <div className="bg-white rounded-full p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
            <img src="./s3.svg" alt="Adoptions icon" />
          </div>
          <div>
            {/* <h3 className="text-2xl sm:text-3xl font-bold mb-1">540 +</h3> */}
            <p className="uppercase text-xs font-bold tracking-wider">GROOMING</p>
          </div>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <div className="bg-white rounded-full p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
            <img src="./s4.svg" alt="Checkups icon" />
          </div>
          <div>
            {/* <h3 className="text-2xl sm:text-3xl font-bold mb-1">800</h3> */}
            <p className="uppercase text-xs font-bold tracking-wider">PLAY SPACE</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection

