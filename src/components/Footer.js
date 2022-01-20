import React from 'react'
import SocialLinks from '../constants/socialLinks'
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks className="footer-icons" />
        <p>
          &copy;{new Date().getFullYear()} MDXBlog. All rigths reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
