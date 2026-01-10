import { FaNewspaper } from "react-icons/fa";
import QuickLinks from "./QuickLinks";
import { AiOutlineMail } from "react-icons/ai";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Footer =()=>{
    const socialLinks = [
        {
          icon: <FiLinkedin className="size-6"/>,
          href: "https://www.linkedin.com/in/your-linkedin-username",
        },
        {
          icon: <FiGithub className="size-6" />,
          href: "https://github.com/your-github-username",
        },
        {
          icon: <AiOutlineMail className="size-6" />,
          href: "mailto:Parwkaur84@gmail.com",
        },
      ];
    return(
        <div className='pt-12 pb-1 text-gray-600 bg-brand-cream dark:bg-gray-900 dark:text-gray-100'>
            <div className='container grid grid-cols-1 gap-12 px-4 mx-auto mb-12 md:grid-cols-3'>
                <div>
                <h3 className='mb-4 text-xl font-bold'>Parwinder Kaur</h3>
                <p className='mb-6 '>Full-stack software engineer focused on React, Java, and SQL-backed systems. I build reliable products with clean architecture and measurable impact.</p>
            </div>
            
               <div className="grid grid-cols-2 gap-8 md:contents">
               <QuickLinks/>
               <div className="text-left">
                <h3 className='mb-4 text-xl font-bold'>Contact</h3>
                <ul className='space-y-2'>
                  <li className='flex items-center gap-2'>
                    <AiOutlineMail className="text-brand-teal" />
                    <a href="mailto:Parwkaur84@gmail.com" className='transition-colors hover:text-brand-gold'>Parwkaur84@gmail.com</a>
                  </li>
                  <li className='flex items-center gap-2'>
                    <IoLocationOutline className="text-brand-teal" />
                    <span>Malerkotla, Punjab</span>
                  </li>
                </ul>
                <div className='flex mt-4 space-x-2'>
                    {socialLinks.map((link,index)=>(
                        <a 
                        key={index}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className='transition-colors hover:text-brand-gold '>{link.icon}</a>
                    ))}
                </div>
               </div>
               </div>
</div>
        </div>
    )
}

export default Footer;
