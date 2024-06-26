import {  Link } from "react-router-dom";

const data = [
  {
    title: "Technical Paper Sessions",
    content:
    `
    Track 1: Nanoelectronics and VLSI Design <br>
    Track 2: Communication Systems and Networks <br>
    Track 3: Machine Learning and Data Science <br>
    Track 4: Security and Privacy <br>
    Track 5: Track 5: Data and Software Engineering <br>
    Track 6: Machine Intelligence Systems <br>
    Track 7: Next-Generation Computing <br>
    Track 8: Robotics and Cybernetics <br>
    Track 9: Devices Circuits and Systems <br>
    Track 10: Control, Instrumentation, Signal Processing and Multimedia <br>
    Track 11: Antenna, Microwave Techniques, Communications, Networks and IoT <br>
    Track 12: Power Electronics and Electric Vehicles <br>
    Track 13: Biomedical Engineering and Healthcare Technologies <br>
   


    <br>

    View Additional Tracks..
  `,
    bg: "bg-accent-100",
  },
  {
    title: "Poster Presentations",
    content:
      "Poster presentations provide a platform for researchers to share, receive feedback, and connect with peers. Through visually engaging formats, they effectively communicate findings, advancing knowledge and fostering collaboration in academia.",
    bg: "bg-accent-200",
  },
  {
    title: "Worshops",
    content:
      "Workshops on latest technologies which offer immersive learning experiences, providing attendees with practical skills and insights will be conducted.",
    bg: "bg-accent-300",
  },
  {
    title: "Special Sessions",
    content:
          "The proposals for special session shall be sent to  eaic2025nitj@gmail.com",
    bg: "bg-accent-400 text-white",
  },
  {
    title: "IEEE Sponsorship",
    content:
      "The proposal has been submitted for IEEE for the technical sponsorship for this conference",
    bg: "bg-accent-500 text-white",
  },
  // {
  //   title: "Accommodation",
  //   content:
  //     "The accommodation for the delegates can be arranged in hotels (List will be available on website), guest houses and institute     hostels subject to the availability of the same on request and on  payment basis. The requirement for the preferred accommodation along with the tariff range and single/ double occupancy should be  sent to the Organizing Secretary well in advance.",
  //   bg: "bg-accent-100",
  // },
  // {
  //   title: "Souvenir",
  //   content:
  //     "An informative souvenir will be made available to all the delegates. Contributions are solicited to support this mega event, CHEMCON-2024, through advertisements",
  //   bg: "bg-accent-200",
  // },
]; // replace Array.from({ length: 12 }) with data to get layout
function OurEvents() {
  
  return (<>
<h2 className="text-4xl text-accent-50 font-bold  mb-4 bg-accent-800 w-full mt-28 py-2 text-center">Our Events</h2>
    <div className="container space-y-8 lg:max-w-7xl mx-auto px-8 sm:px-10 lg:px-8 md:mb-1 mt-10">
      <div className="text-center">
            </div>
      <Link  to="/paperdetails" smooth>

      <div className="grid md:grid-rows-2 md:grid-cols-3 justify-around gap-5 md:gap-5 ">

        {data.map((item, index) => (
          <div
          className={`py-8 px-4 max-h-[300px] overflow-hidden text-justify hover:shadow-xl hover:shadow-accent-700 border-solid rounded-xl ${item.bg} ${
            index % 7 === 0 ? "md:row-span-2 md:max-h-[620px] " : ""
          }`}
          key={index}
        >
            <div className="flex h-full ">
              <div>
                <h4 className="font-semibold mb-3 md:text-2xl text-xl">
                  {item.title}
                </h4>
                <div className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content }} />

              </div>
            </div>
          </div>
        ))}
      </div>
      </Link>

    </div>
    </>
  );
}

export default OurEvents;
