import { SOCIAL_MEDIA_LINKS } from "../constants"

const Footer = () => {
  return (
    <div className="mb-8 mt-20" >
      <div className="flex items-center justify-center gap-8">
      {SOCIAL_MEDIA_LINKS.map((link,index)=>(
        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer " className="hover:text-sky-700 text-sky-300">
          {link.icon} 
        </a>
      ))}
      </div>
      <p className="mt-8 text-center tracking-tighter text-orange-300 text-lg">
        &copy; THE🤓NERD 2024<br/>All rights reserved.
      </p>
    </div>
  )
}

export default Footer