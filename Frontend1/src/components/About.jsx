

import { Plus, Minus } from "lucide-react"
import { useState } from "react"
import { forwardRef } from "react"

const AboutSection = forwardRef((props, ref) => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: "Commitment to Compassion",
      content: "We treat every animal with kindness and respect. Compassion guides our every action and decision.",
    },
    {
      title: "Focus on Health and Happiness",
      content:
        "We prioritize the well-being of pets through proper care. Our aim is a healthy and joyful life for every animal.",
    },
    {
      title: "Building Loving Connections",
      content: "We connect pets with loving families. Our goal is lifelong, heartwarming companionships.",
    },
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-18 items-center">
        <div className="h-full w-full">
          <img
            src="https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/673b0c969e0dbc5d3198ab4d_optimized_1396_c1396x930-0x0"
            alt="Person with rabbit"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="py-8 md:py-12 px-4 md:px-0 md:mt-12 max-w-full md:max-w-[80%]">
          <img src="./foot.svg" className="h-10 md:h-12 mb-4" alt="Paw print" />

          <p className="text-amber-500 text-xs uppercase tracking-wider font-medium mb-4">- ABOUT US -</p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
            What Makes Us Care About Pets<span className="text-amber-500">.</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg mb-6">Our love for animals drives everything we do.</p>

          <p className="text-gray-400 text-base md:text-lg mb-8">
          Dogs are man’s best friend. And we are theirs. Started with the aim of providing support to paw-parents, now we are on a mission to make every dog meet their hooman(s). A humble abode that accommodates dogs of all breeds facilitates well being of dogs and takes care of their needs.
          </p>

          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="border-b">
                <button
                  className="w-full flex items-center justify-between p-4 font-medium text-gray-800 hover:text-gray-600"
                  onClick={() => toggleItem(index)}
                >
                  <span className="font-bold text-xl md:text-2xl">{item.title}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && <div className="px-4 pb-4 text-gray-600">{item.content}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});



export default AboutSection

