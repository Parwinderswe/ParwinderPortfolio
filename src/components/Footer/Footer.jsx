import { FaNewspaper } from "react-icons/fa";
import QuickLinks from "./QuickLinks";
import Seltters from "./Seltters";
import { AiOutlineMail } from "react-icons/ai";
import { FiLinkedin, FiGithub } from "react-icons/fi";

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
        <div className='px-4 pt-12 pb-1 text-gray-600 bg-gray-50 dark:bg-gray-900 dark:text-gray-100'>
            <div className='grid grid-cols-1 gap-12 mb-16 md:grid-cols-3'>
                <div>
                <h3 className='mb-4 text-xl font-bold'>Parwinder</h3>
                <p className='mb-6 '>Software engineer specializing in modern web technologies. Building high-performance applications that solve real problems.</p>
                <div className='flex space-x-2'>
                    {socialLinks.map((link,index)=>(
                        <a 
                        key={index}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className='transition-colors hover:text-purple-600 '>{link.icon}</a>
                    ))}
                </div>
            </div>
            
               <QuickLinks/>
               <Seltters/>
</div>
        </div>
    )
}

export default Footer;