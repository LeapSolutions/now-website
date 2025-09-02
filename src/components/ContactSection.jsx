import React from "react";
import emil from "../assets/images/contactAssets/emil.png";
import karl from "../assets/images/contactAssets/karl.png";
import daniel from "../assets/images/contactAssets/daniel.png";
import liveChat from "../assets/images/contactAssets/liveChat.png";
import cardBlue from "../assets/images/contactAssets/contactCardBlue.png";
import cardYellow from "../assets/images/contactAssets/contactCardYellow.png";

const contacts = [
  {
    name: "Emil Krog kruse",
    email: "ekk@NOW.dk",
    image: emil,
    bg: cardBlue,
  },
  {
    name: "Karl D. Mortensen",
    email: "kdm@NOW.dk",
    image: karl,
    bg: cardYellow,
  },
  {
    name: "Teknisk support",
    email: "tek@NOW.dk",
    image: daniel,
    bg: cardBlue,
  },
  {
    name: "Live Chat",
    image: liveChat,
    bg: cardYellow,
    isLiveChat: true,
  },
];

const ContactCard = ({ name, email, image, bg, isLiveChat }) => (
  <div className="w-full max-lg:mt-22 ">
    <div
      className="flex flex-col items-center justify-center text-white  rounded-xl relative overflow-visible h-full min-h-[320px]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <img
        src={image}
        alt={name}
        className="w-[120px] h-[120px] rounded-full object-cover absolute -top-16"
      />
      <div className=" text-center space-y-5">
        <p className="font-semibold text-3xl">{name}</p>
        {!isLiveChat && (
          <a
            href={`mailto:${email}`}
            className="text-xl flex items-center justify-center gap-3 hover:text-gray-200 transition-colors duration-300 ease-in-out"
          >
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.60175 4.20114C2.14997 3.47258 3.02158 3 4 3H20C20.9784 3 21.85 3.47258 22.3982 4.20113L12 11.7635L1.60175 4.20114Z"
                fill="#ffffff"
              />
              <path
                d="M1 6.2365V18C1 19.6523 2.34772 21 4 21H20C21.6523 21 23 19.6523 23 18V6.23649L13.1763 13.381C12.475 13.891 11.525 13.891 10.8237 13.381L1 6.2365Z"
                fill="#ffffff"
              />
            </svg>
            {email}
          </a>
        )}
        {isLiveChat && (
          <button className="bg-white text-black rounded-lg px-4 py-1 mt-2 text-sm">
            Chat med os
          </button>
        )}
      </div>
    </div>
  </div>
);

const ContactSection = () => {
  return (
    <section id="kontakt" className=" scroll-mt-[15px] lg:scroll-mt-[100px]  py-32 text-center px-6 ">
      <div className="lg:mb-32">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 font-primary">
          Spørgsmål? Vi sidder klar til at hjælpe
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-12 text-gray-700 max-w-4xl mx-auto font-secondary">
          Har du spørgsmål om funktioner, priser eller hvordan du kommer i gang
          med NOW? Vores team sidder klar til at hjælpe - kontakt os gerne for
          en hurtig afklaring.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 sm:px-4 md:px-6 lg:px-24s">
        {contacts.map((contact, index) => (
          <ContactCard key={index} {...contact} />
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
