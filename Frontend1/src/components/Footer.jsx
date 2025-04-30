const Footer = ({onPetClick, onAboutClick, onHelpClick,onTeamClick, onTestimonialClick, onContactClick}) => {
  return (
    <footer className="bg-[#292929] text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row flex-wrap py-8 md:py-16 justify-between">
          <div className="w-full md:w-[33%] px-4 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="">
                <img src="./whitedoggo.png" alt="Logo" className="h-12 md:h-15" />
              </div>
            </div>
            <p className="text-sm mb-6">
            We provide 27x7 help for your Furry companions so that you have a peace of mind!
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-[65%] flex flex-col md:flex-row gap-8 md:gap-4">
            <div className="w-full md:w-[30%]">
              <h3 className="text-yellow-500 font-medium mb-4">NAVIGATION</h3>
              <ul className="space-y-2">
                <li>
                  <a onClick={onPetClick} className="hover:text-yellow-500 transition-colors">
                    Pets
                  </a>
                </li>
                <li>
                  <a  onClick={onAboutClick} className="hover:text-yellow-500 transition-colors">
                    About us
                  </a>
                </li>
                <li>
                  <a  onClick={onHelpClick} className="hover:text-yellow-500 transition-colors">
                    How You Can Help
                  </a>
                </li>
              </ul>
            </div>

            {/* Information Links */}
            <div className="w-full md:w-[30%]">
              <h3 className="text-yellow-500 font-medium mb-4">INFORMATION</h3>
              <ul className="space-y-2">
                <li>
                  <a  onClick={onTeamClick} className="hover:text-yellow-500 transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <a  onClick={onTestimonialClick} className="hover:text-yellow-500 transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a  onClick={onContactClick} className="hover:text-yellow-500 transition-colors">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="w-full md:w-[40%]">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="text-yellow-500 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span>+91 84484 61071</span>
                </li>
                <li className="flex items-center">
                  <div className="text-yellow-500 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span>help@doggosheaven.org</span>
                </li>
                <li className="flex items-center">
                  <div className="text-yellow-500 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span>Block J, VATIKA INDIA NEXT, Plot 11, near Vatika V'lante, Sector 83, Gurugram, Haryana 122004</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between border-t-2 border-gray-300 items-center pt-4">
          <div className="text-gray-300 font-bold text-xs mb-2 md:mb-0">© CREATED BY Doggo's Heaven</div>
          <div className="text-gray-300 font-bold text-xs">ALL RIGHTS RESERVED</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
