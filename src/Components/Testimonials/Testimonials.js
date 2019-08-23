import React from 'react';
import './styles.css'

class Testimonials extends React.Component {

  render() {
    return (
        <div className="testimonySegment">
          <h3 className="brandFont testTitle">Testimonials</h3>
          <div className="testimonyContainer">
            <div className="testimony">"I thank ExpectCare for making his last months as comfortable as possible.. I highly and without reservation recommend their services"
            <div className="sigBreak"></div>
            <div className="testAuthor brandFont">-Michael</div>
            </div>
            <div className="testimony2">"When you were providing  caregivers for my mother during her final months, it meant so much to my siblings and me that you were available, overseeing the care she was given. I knew that I could always contact you and that you would be immediately responsive to any situation and need. As I faced the challenge of balancing my own personal and professional life, your special private service helped me deal with my most important responsibility to care for my mother"
            <div className="sigBreak"></div>
            <div className="testAuthor brandFont">-Helen</div>
            </div>
            <div className="testimony">"ExpectCare has provided assistance by furnishing qualified caregivers at anytime when I need them. They have always been able to meet amy needs. This has allowed me to continue to operate my business in a normal manner and still provide the additional care that my mom needs."
            <div className="sigBreak"></div>
            <div className="testAuthor brandFont">-David</div>
            </div>
        </div>
        </div>
      
    )
  }
}

export default Testimonials