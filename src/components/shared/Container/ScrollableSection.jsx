import React from 'react'
import Profile from "src/components/Profile"
import ContactUs from "src/components/ContactUs"

const ScrollableSection = () => {
  return (
    <div className="flex-1">
      <Profile/>
    <ContactUs/>
    </div>
  )
}

export default ScrollableSection
