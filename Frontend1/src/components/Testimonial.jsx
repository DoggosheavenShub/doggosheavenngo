"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

function TestimonialsSection() {
  
  const testimonials = [

    {
      id: 1,
      name: "Gaurav sharma",
      image:
        "./kaju.jpeg",
      petAdopted: "Kaju (Cat)",
      quote:
        "This place is a true heaven for doggos. The boarding area and park is very nice, ensuring every pet feels comfortable and safe during their stay. Place also has a vet to look after the pups as needed. What truly sets this place apart is the dedicated and caring staff who treat every animal like family, providing personalized attention and love.During my visit, I was deeply impressed by their commitment to animal welfare and decided to adopt a pet. That’s when I met Kajju. The adoption process was smooth and well-organized, with the staff ensuring Kajju was the perfect match for me. He came home healthy and well-socialized. Would recommend 10/10",
    },
    {
      id: 2,
      name: "Swati Agarwal",
      image:
        "./o1.png",
      petAdopted: "Rani (Dog)",
      quote:
        "I never expected to find my new best friend online, but that's exactly what happened! While browsing, I stumbled upon an adorable litter of puppies in Delhi. Despite being told they were only available for local adoption, I couldn't resist asking Sayam if he'd make an exception for me in Dehradun.To my delight, Sayam agreed to deliver a puppy to me after a brief introduction. I requested a shy and reserved female pup, and Sayam assured me that the puppies were well-cared for and up-to-date on their vaccinations.What struck me most was Sayam's unwavering dedication to finding the puppies a loving home. When he couldn't find a suitable transporter, he selflessly took time out of his busy schedule to personally deliver Rani to Dehradun.I'm forever grateful for Sayam's compassion and commitment to animal welfare. His kindness has brought immense joy to my life, and I'm thrilled to welcome Rani, my new furry companion!Fast-forward to today, Rani has blossomed into a loving and playful young girl who adores her family. My son has found a partner-in-crime, and they spend their days playing and fighting. We recently celebrated Kukur Tihar at Rani's grandfather's home, and I've shared a heartwarming photo from that special day.",
    },
   
  ]

  
  const [currentIndex, setCurrentIndex] = useState(0)


  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
        <div>
          <img src="./foot.svg" className="h-16"/>
         </div>
        </div>

        <p className="text-amber-500 text-xs uppercase tracking-wider font-medium mb-4">- SUCCESS STORIES -</p>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Loyal Hearts, Forever Homes<span className="text-amber-500">.</span>
        </h2>

        <p className="text-gray-600 text-lg font-bold mb-12">
          Read the heartwarming stories of those who gave a second chance to animals in need.
        </p>

        <div className="relative">
        <div className="relative flex flex-col items-center">


<button
  onClick={goToPrevious}
  className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-gray-300 hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-colors"
  aria-label="Previous testimonial"
>
  <ChevronLeft className="w-6 h-6" />
</button>  


<div className="flex flex-col items-center px-12">
  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
    <img
      src={currentTestimonial.image || "/placeholder.svg"}
      alt={currentTestimonial.name}
      className="object-cover w-full h-full"
    />
  </div>

  <h3 className="text-2xl font-bold text-gray-800 mb-2">{currentTestimonial.name}</h3>
  <p className="text-gray-500 mb-4">
    Pet Adopted: <span className="font-medium">{currentTestimonial.petAdopted}</span>
  </p>

  <blockquote className="text-gray-600 italic text-center max-w-2xl mb-8">
    "{currentTestimonial.quote}"
  </blockquote>

  <p className="text-[#489CBE] font-bold mb-8">{currentTestimonial.date}</p>

 
  <div className="flex justify-center mt-6 gap-2">
    {testimonials.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentIndex(index)}
        className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-amber-500" : "bg-gray-300"}`}
        aria-label={`Go to testimonial ${index + 1}`}
      />
    ))}
  </div>
</div>


<button
  onClick={goToNext}
  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-gray-300 hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-colors"
  aria-label="Next testimonial"
>
  <ChevronRight className="w-6 h-6" />
</button>
</div>

        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
