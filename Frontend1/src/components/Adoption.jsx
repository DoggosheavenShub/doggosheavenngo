

import { useState } from "react"
import { Weight } from "lucide-react"

function AdoptionSection() {
  const [activeTab, setActiveTab] = useState("dogs")

  const pets = {
    dogs: [
      {
        id: 1,
        name: "Kaju",
        image:
          "./kaju.jpeg",
        weight: "35",
        age: "2",
        treat: "Chicken treats",
        description: "Kaju is always ready for an adventure and loves being around people.",
      },
      {
        id: 2,
        name: "Rani",
        image:
          "./rani.jpeg",
        weight: "9",
        age: "1",
        treat: "Salmon snacks",
        description: "Rani is a loyal companion who brings calm and warmth to her family.",
      },
      {
        id: 3,
        name: "Mowgli",
        image:
          "./mogli.jpeg",
        weight: "20",
        age: "1",
        treat: "Salmon snacks",
        description: "Meet Mowgli, a spirited 1.5-year-old pup adopted by our manager. True to his jungle-inspired name, he’s curious, adventurous, and always ready to explore—bringing wild joy and warmth into his new home.",
      },
     
    ],
 
 
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
          <div>
            <img src="./foot.svg" className="h-12 md:h-16" alt="Paw print" />
          </div>
        </div>

        <p className="text-amber-500 uppercase tracking-wider font-medium text-center mb-4">- ADOPT NOW -</p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-gray-800">
          Every Animal Deserves a Loving Home<span className="text-blue-500">.</span>
        </h2>

        <p className="text-gray-600 text-base md:text-lg text-center mb-8 md:mb-12">
          Let us make our house a home: Bring a doggo and make it whole.
        </p>

        <div className="border-b border-[#aba9a9] mb-8 md:mb-12">
          <div className="flex justify-center">
            <button
              className={`px-4 sm:px-8 py-3 sm:py-4 font-medium ${activeTab === "dogs" ? "text-gray-800 border-b-2 border-blue-500" : "text-[#aba9a9]"}`}
              onClick={() => handleTabChange("dogs")}
            >
              Dogs
            </button>
          
           
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {pets[activeTab].map((pet) => (
            <div key={pet.id} className="bg-white overflow-hidden shadow-sm">
            <div className="p-4">
  <div className="w-full h-62 overflow-hidden">
    <img
      src={pet.image || "/placeholder.svg"}
      alt={pet.name}
      className="w-full h-auto object-cover object-top"
    />
  </div>
</div>

              <div className="p-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{pet.name}</h3>
                <div className="w-12 md:w-14 h-1 bg-[#489CBE] mb-4"></div>

                <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 text-[#afadad]">
                  <div className="text-center flex gap-1 md:gap-2 items-center justify-center">
                    <div className="flex justify-center mb-1">
                      <Weight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">{pet.weight}</p>
                      <p className="text-xs md:text-sm">lbs</p>
                    </div>
                  </div>

                  <div className="text-center flex gap-1 md:gap-2 items-center justify-center">
                    <div className="flex justify-center mb-1">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">{pet.age}</p>
                      <p className="text-xs md:text-sm">years</p>
                    </div>
                  </div>

                  <div className="text-center flex gap-1 md:gap-2 items-center justify-center">
                    <div className="flex justify-center mb-1">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6M12 12L4 4m8 8l8-8" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#afadad] font-medium text-sm md:text-base">{pet.treat.split(" ")[0]}</p>
                      <p className="text-[#afadad] text-xs md:text-sm">{pet.treat.split(" ")[1]}</p>
                    </div>
                  </div>
                </div>

                <p className="text-[#afadad] text-sm md:text-base">{pet.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdoptionSection
