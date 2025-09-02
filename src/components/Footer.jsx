import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import nowLogo from '../assets/icons/now-white.svg'; 

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#001926] to-[#003366] text-white px-6 py-22 md:px-28">
      <div className="w-full px-7  grid grid-cols-1 md:grid-cols-4 gap-14  ">
        
       
        <div>
          <img src={nowLogo} alt="NOW logo" className="h-10 mb-4" />
          <p className="text-sm max-w-sm leading-relaxed text-gray-300">
            NOW er et dansk system til tidsregistrering og ressourceplanlægning – udviklet til virksomheder, der har brug for et brugervenligt værktøj i hverdagen
          </p>
        </div>

      
        <div>
          <h3 className="font-semibold text-lg mb-4 font-secondary">Hurtig navigation</h3>
          <ul className="space-y-2 text-md text-white font-secondary">
            <li><a href="#" className="hover:text-gray-200">Funktioner</a></li>
            <li><a href="#" className="hover:text-gray-200">Priser</a></li>
            <li><a href="#" className="hover:text-gray-200">Kontakt</a></li>
            <li><a href="#" className="hover:text-gray-200">Login</a></li>
            <li><a href="#" className="hover:text-gray-200">Opret gratis konto</a></li>
          </ul>
        </div>

    
        <div>
          <h3 className="font-semibold text-lg mb-4 font-secondary ">Kontakt os</h3>
          <ul className="space-y-2 text-md">
            <li className="flex items-center gap-2 text-white hover:text-gray-200 font-secondary ">
              <FaPhoneAlt className="text-white " />
              <a href="tel: +45 12 34 56 78">+45 12 34 56 78</a>
            </li>
            <li className="flex items-center gap-2 text-white hover:text-gray-200 font-secondary">
              <FaEnvelope className="text-white" />
              <a href="mailto:kontakt@now.dk"> kontakt@now.dk</a>
            </li>
            <li className="flex items-center gap-2 text-white font-secondary">
              <FaMapMarkerAlt className="text-white" />
              Aalborg, Danmark
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold text-lg mb-4 font-secondary">Politikker & Retningslinjer</h3>
          <ul className="space-y-2 text-md text-white font-secondary">
            <li><a href="#" className="hover:text-gray-200">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-200">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

    
      <div className="mt-12 border-t border-white/10 pt-6 text-xs flex flex-col md:flex-row justify-between items-center text-gray-300">
        <p>@ 2025 copyright NOW</p>
        <p>Udviklet af Leap solutions ApS</p>
      </div>
    </footer>
  );

}

  export default Footer;