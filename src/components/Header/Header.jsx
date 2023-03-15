import CustomContainer from 'components/Custom/CustomContainer/CustomContainer'
import { CustomNavLink } from 'components/Custom/CustomNavLink/CustomNavLink.styled'
import HeaderSection from 'components/Custom/HeaderSection/HeaderSection'
import { CustomTitle } from 'components/Custom/HeaderSection/HeaderSection.styled'
import LightMode from 'components/LightMode/LightMode'

import React from 'react'

const Header = () => {
  return (
    <HeaderSection>
      <CustomContainer>
        <CustomTitle >
          <CustomNavLink to="/" >
            <h1>Genesis Courses</h1>
          </CustomNavLink>
          <LightMode />
        </CustomTitle>
      </CustomContainer>
    </HeaderSection>
  )
}

export default Header