import React from 'react'
import MainContent from '../MainContent/MainContent'
import Navbar from '../Navbar/Navbar'
import {useColorMode,Button} from "@chakra-ui/react"

export default function HomePage() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div>
      <header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </header>
        <Navbar/>
        <MainContent/>

    </div>
  )
}
