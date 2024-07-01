import React from 'react'
import './Programs.css'
import Graduate1 from '../../assets/Graduate 1.jpg'
import Graduate2 from '../../assets/Graduate 2.jpg'
import Graduate3 from '../../assets/Graduate 3.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={Graduate1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Graduate2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Graduate3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Post Graduation </p>
        </div>
      </div>
    </div>
  )
}

export default Programs
