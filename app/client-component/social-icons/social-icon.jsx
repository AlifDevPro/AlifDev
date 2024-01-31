'use client'

import React from 'react'

function SocialIcons({name, classId}) {
  return (
    <>
         <box-icon className={classId} name={name} type='logo'></box-icon>
    </>
  )
}

export default SocialIcons