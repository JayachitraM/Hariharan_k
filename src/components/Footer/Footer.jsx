import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../../data/personal';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: personalInfo.github,
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      href: personalInfo.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      href: `mailto:${personalInfo.email}`,
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-dark-800 border-t border-white/10 relative">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Left - Brand */}
          <div className="text-center md:text-left">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-heading font-bold mb-2"
            >
              <span className="text-white">Hari</span>
              <span className="gradient-text">haran K</span>
            </motion.div>
            <p className="text-gray-400 text-sm">
              Software Developer & QA Engineer
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass-card-hover rounded-full text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Right - Back to Top */}
          <div className="text-center md:text-right">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-4 py-2 glass-card-hover rounded-lg text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowUp size={16} className="mr-2" />
              Back to Top
            </motion.button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex items-center mb-4 md:mb-0">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-2 text-red-400"
              >
                <Heart size={16} fill="currentColor" />
              </motion.span>
              <span>React + Tailwind CSS</span>
            </div>
            
            <div className="text-center md:text-right">
              <p>© {currentYear} Designed & Developed by Hariharan K</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;


// import { motion } from 'framer-motion';
// import { Heart, GitHubLogoIcon, Linkedin, Mail, ArrowUp } from 'lucide-react';
// import { personalInfo } from '../../data/personal';

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     {
//       icon: <GitHubLogoIcon size={20} />,
//       href: personalInfo.github,
//       label: 'GitHub'
//     },
//     {
//       icon: <Linkedin size={20} />,
//       href: personalInfo.linkedin,
//       label: 'LinkedIn'
//     },
//     {
//       icon: <Mail size={20} />,
//       href: `mailto:${personalInfo.email}`,
//       label: 'Email'
//     }
//   ];

//   return (
//     <footer className="bg-dark-800 border-t border-white/10">
//       <div className="container-custom py-12">
//         <div className="grid md:grid-cols-3 gap-8 items-center">
//           {/* Left - Brand */}
//           <div className="text-center md:text-left">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="text-2xl font-heading font-bold mb-2"
//             >
//               <span className="text-white">Hari</span>
//               <span className="gradient-text">haran K</span>
//             </motion.div>
//             <p className="text-gray-400 text-sm">
//               Software Developer & QA Engineer
//             </p>
//           </div>

//           {/* Center - Social Links */}
//           <div className="flex justify-center space-x-6">
//             {socialLinks.map((social) => (
//               <motion.a
//                 key={social.label}
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.1, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="p-3 glass-card-hover rounded-full text-gray-400 hover:text-cyan-400 transition-colors"
//                 aria-label={social.label}
//               >
//                 {social.icon}
//               </motion.a>
//             ))}
//           </div>

//           {/* Right - Back to Top */}
//           <div className="text-center md:text-right">
//             <motion.button
//               onClick={scrollToTop}
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-flex items-center px-4 py-2 glass-card-hover rounded-lg text-gray-400 hover:text-cyan-400 transition-colors"
//             >
//               <ArrowUp size={16} className="mr-2" />
//               Back to Top
//             </motion.button>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="mt-8 pt-8 border-t border-white/10">
//           <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
//             <div className="flex items-center mb-4 md:mb-0">
//               <span>   Made with</span>
//               {/* <motion.span
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ duration: 1, repeat: Infinity }}
//                 className="mx-2 text-red-400"
//               >
//                 <Heart size={16} fill="currentColor" />
//               </motion.span> */}
//               <span>React + Tailwind CSS</span>
//             </div>
            
//             <div className="text-center md:text-right">
//               <p>Designed & Developed by Hariharan K</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
//     </footer>
//   );
// };

// export default Footer;