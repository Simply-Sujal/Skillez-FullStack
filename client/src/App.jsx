import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Error from './pages/Error'
import Logout from './pages/Logout'
import AdminLayout from './components/layouts/AdminLayout'
import AdminUsers from './pages/AdminUsers'
import AdminContacts from './pages/AdminContacts'
import AdminUpdate from './pages/AdminUpdate'
import ProjectBuilding from './ServicesPage/DifferentDomainForms/ProjectBuilding'
import ResumeReview from './ServicesPage/DifferentDomainForms/ResumeReview'
import ResumeBuilding from './ServicesPage/DifferentDomainForms/ResumeBuilding'
import MockInterview from './ServicesPage/DifferentDomainForms/MockInterview'
import ProjectInfo from './ServicesPage/ProjectBuildingInfo/ProjectInfo'
import ResumeBuildInfo from './ServicesPage/ResumeBuildingInfo/ResumeBuildInfo'
import ResumeReviewInfo from './ServicesPage/ResumeReviewInfo/ResumeReviewInfo'
import MockInterViewInfo from './ServicesPage/MockInterviewInfo/MockInterViewInfo'
import AfterBuyingService from './pages/AfterBuyingService'
import PrivacyPolicy from './Legal/PrivacyPolicy'
import Disclaimer from './Legal/Disclaimer'
import SendOtp from './pages/sendOtp'
import PasswordReset from './pages/PasswordReset'
import TermsAndConditions from './Legal/TermsandCondition'
import BlogPage from './pages/BlogPage'
import MainReadingPage from './Blog/MainReadingPage'
import Intern from './pages/Intern'
import Event from './pages/Event'
import IndividualEventPage from './Events/IndividualEventPage'
// import DiscountOffer from './components/DiscountOffer'
import LinkedinInfo from './ServicesPage/LinkedinServiceInfo/LinkedinInfo'
import IndividualIntershipPage from './Internship/IndividualInternshipPage'
import FreeLinkedinService from './ServicesPage/LinkedinServiceInfo/FreeLinkedinService'

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <DiscountOffer /> */}
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<Register />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog/:topic' element={<MainReadingPage />} />
          <Route path='/internship' element={<Intern />} />
          <Route path='/internship/:internshipName' element={<IndividualIntershipPage />} />
          <Route path='/event' element={<Event />} />
          <Route path='/event/:eventName' element={<IndividualEventPage />} />

          {/* Infomation About Every Services  */}
          <Route path='/projectinfo' element={<ProjectInfo />} />
          <Route path='/resumebuildinginfo' element={<ResumeBuildInfo />} />
          <Route path='/resumereviewinfo' element={<ResumeReviewInfo />} />
          <Route path='/mockinterviewinfo' element={<MockInterViewInfo />} />
          <Route path='/linkedinInfo' element={<LinkedinInfo />} />

          {/* Different Service Form  */}
          <Route path="/projectform" element={<ProjectBuilding />} />
          <Route path="/resumereviewform" element={<ResumeReview />} />
          <Route path='/resumebuildingform' element={<ResumeBuilding />} />
          <Route path='/mockInterviewform' element={<MockInterview />} />


          {/* After submitting the form  */}
          <Route path='/thankyouforbuying' element={<AfterBuyingService />} />

          {/* Linkedin Buy Link free service  */}
          <Route path='/linkedinservicefree' element={<FreeLinkedinService />} />


          {/* Legal policies  */}
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/disclaimer' element={<Disclaimer />} />
          <Route path='/termsandcondition' element={<TermsAndConditions />} />


          {/* OTP Verification */}
          <Route path='/sendOtp' element={<SendOtp />} />
          <Route path='/password-reset' element={<PasswordReset />} />

          {/* Admin Pannel  */}
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
