import React from 'react'
import DashboardLayoutBasic from './components/SideBar'
import AboutCourses from './components/courses/AboutCourses'
export const Dashboard = () => {
  return (
    <div className='clr-white'>
    <DashboardLayoutBasic/>
    <AboutCourses/>
    </div>
   
  )
}
