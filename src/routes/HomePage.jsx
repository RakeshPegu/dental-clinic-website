import {lazy, Suspense} from 'react'
import Skeleton from 'react-loading-skeleton'
import HeroSection from  "../components/HeroSection"
const AboutSection = lazy(()=>import ("../components/AboutSection"))
const WhyChooseUs = lazy(()=>import("../components/WhyChooseUs"))
const  EmergencySection = lazy(()=>import("../components/EmergencySection"))
const  ContactSection  = lazy(()=>import("../components/ContactSection"))
const  FAQSection  = lazy(()=>import("../components/FAQSection"))
const SmileTransformations = lazy(()=> import('../components/Result'))

function HomePage() {
  return (
    <div className='z-0'>
      <HeroSection />
      <Suspense fallback={<Skeleton height={400}/>}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<Skeleton height={300}/>}>
          <WhyChooseUs />
      </Suspense>
      <Suspense fallback={<Skeleton height={100}/>}>
         <EmergencySection />
      </Suspense>
      <Suspense fallback={<Skeleton height={100}/>}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<Skeleton height={200}/>}>
         <FAQSection />
      </Suspense>
      <Suspense fallback={<Skeleton height={200}/>}>
         < SmileTransformations/>
      </Suspense>
    </div>
  )
}

export default HomePage
