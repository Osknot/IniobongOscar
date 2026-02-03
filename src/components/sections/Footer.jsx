import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub, FaTiktok } from "react-icons/fa";
export const Footer = () => {
    return (


<footer className="bg-black/90 backdrop-blur-md text-gray-500 py-8">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

    {/* Logo / Name */}
    <div className="mb-4 md:mb-0 text-white font-bold text-lg">
      Iniobong Oscar
    </div>

    {/* Social Icons */}
    <div className="flex space-x-6">
      <a href="https://www.tiktok.com/@ini_oscar_" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors text-xl">
        <FaTiktok />
      </a>
      <a href="https://www.facebook.com/share/1GR21ik3i7/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors text-xl">
        <FaFacebookF />
      </a>
      <a href="https://www.linkedin.com/in/iniobongoscar" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors text-xl">
        <FaLinkedinIn />
      </a>
      <a href="https://www.instagram.com/ini__oscar?igsh=bTBtdmtnOG40Ymhr&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors text-xl">
        <FaInstagram />
      </a>
      <a href="hhttps://github.com/Osknot" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors text-xl">
        <FaGithub />
      </a>
    </div>
  </div>

  {/* Copyright */}
  <div className="mt-6 text-center text-gray-600 text-sm">
    © 2026 Iniobong Oscar. All rights reserved.
  </div>
</footer>


    )
}