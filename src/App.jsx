import {createBrowserRouter, RouterProvider} from 'react-router'
import Layout from './components/LayoutPage'
import HomePage from './routes/HomePage'
import ServicesPage from './routes/services'
import ServiceDetail from './routes/serviceDetail'
import LocationPage from './routes/location'
import BookingPage from './routes/bookingPage'
import PrivacyPolicy from './routes/privacyPolicyPage'
import TermsAndConditions from './routes/termsAndCondition'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children: [
        {
          path:"",
          element:<HomePage/>
        },
        {
          path:"services",
          element:<ServicesPage/>
        },
        {
          path:"services/:id",
          element:<ServiceDetail/>
        },
        {
          path: "booking",
          element:<BookingPage/>

        },
        {
          path:"privacy_policy",
          element: <PrivacyPolicy/>

        },
        {
          path:"terms_condition",
          element:<TermsAndConditions/>
        },
        {
          path:"location",
          element:<LocationPage/>
        },
        {
          path:"privacy",
          element:<div className="py-32 text-center font-heading text-2xl">Privacy Policy Page</div>
        },
        {
          path:"terms",
          element:<div className="py-32 text-center font-heading text-2xl">Terms & Conditions Page</div>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
