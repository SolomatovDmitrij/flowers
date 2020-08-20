import { Link } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout'
import image1 from './s1200.jpeg'

const HomePage = () => {
  return (
    <MainLayout>
      <p>
        Здесь будет какой-то вводный текст
      </p>
      <img src={image1} alt="" /> 


    </MainLayout>
  )
}

export default HomePage
