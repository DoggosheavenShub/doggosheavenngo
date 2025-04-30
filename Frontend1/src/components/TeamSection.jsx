import { Facebook, Instagram, Youtube, Twitter } from "lucide-react"

function TeamSection() {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
        <div>
          <img src="./foot.svg" className="h-16"/>
         </div>
        </div>

        <p className="text-amber-500 uppercase tracking-wider font-medium text-center mb-4">- OUR TEAM -</p>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
          Loyal, Passionate, and Driven<span className="text-blue-500">.</span>
        </h2>

        <p className="text-gray-400 text-lg font-bold text-center mb-16">
                 United by the love for doggos
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16">
          {/* Team Member 1 */}
          <div className="flex flex-col rounded-lg md:flex-row gap-8">
  <div className="md:w-1/2 overflow-hidden rounded-tl-[60px] rounded-bl-[60px] rounded-tr-none rounded-br-none">
    <img
      src="https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/673b0d8f995899838cc52ef9_optimized_963_c963x1348-0x0"
      alt="Emma Johnson"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="md:w-1/2 flex text-center flex-col justify-center">
    <h3 className="text-xl font-bold text-gray-800 mb-2">Shubhranshu Srivastava</h3>
    <p className="text-amber-500 uppercase tracking-wider text-xs font-medium mb-4"> FOUNDER</p>
    {/* <p className="text-gray-600 text-sm mb-6 text-center">
    full time doggo lover	
    </p> */}
   
  </div>
</div>


          {/* Team Member 2 */}
          <div className="flex flex-col text-center md:flex-row gap-8">
          <div className="md:w-1/2 overflow-hidden rounded-tl-[60px] rounded-bl-[60px] rounded-tr-none rounded-br-none">
    <img
      src="./kushagra.jpeg"
      alt="Emma Johnson"
      className="w-full h-full object-cover"
    />
  </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Kushagra Garg</h3>
              <p className="text-amber-500 text-xs uppercase tracking-wider font-medium mb-4">CO-FOUNDER</p>
              {/* <p className="text-gray-600 text-sm mb-6 text-center">
                and Canine Minister.
              </p> */}
           
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col text-center md:flex-row gap-8">
   
            <div className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Praveen</h3>
              <p className="text-amber-500 text-xs uppercase tracking-wider font-medium mb-4">ADOPTION COORDINATOR</p>
             
             
            </div>

            <div className="md:w-1/2 overflow-hidden rounded-tr-[60px] rounded-br-[60px] rounded-tl-none rounded-bl-none">
  <img
    src="./praveen.jpeg"
    alt="Emma Johnson"
    className="w-full h-full object-cover"
  />
</div>

          </div>

          {/* Team Member 4 */}
          <div className="flex flex-col text-center md:flex-row gap-8">
         
            <div className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Susheel </h3>
              <p className="text-amber-500 text-xs uppercase tracking-wider font-medium mb-4">VETERINARY SPECIALISTS</p>
            
             
            </div>

            <div className="md:w-1/2 overflow-hidden rounded-tr-[60px] rounded-br-[60px] rounded-tl-none rounded-bl-none">
  <img
    src="Susheel.jpeg"
    alt="Emma Johnson"
    className="w-full h-full object-cover"
  />
</div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
