import { useGlobalStore } from '@/utils/store'
import HomePage from '@/views/web/HomePage'
import Landingpage from '@/views/web/landing'
import { useMediaQuery } from 'react-responsive'



export default function Home() {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
const {userDetails,landingPage,setLandingPage} = useGlobalStore(state => state)


  return (
    
    landingPage ? <Landingpage /> : <HomePage />
  )
}
