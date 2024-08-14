import React from 'react'
import './Calm.css'
export const Calm = () => {
  return (
    <>
    <div className="calmContainer">
        <div className="heading">
            <p>Calm Level Test</p>
        </div>
        <div className="question">
            <p>Are you navigating through stressful times, unsure of its impact on your well-being?</p>
        </div>
        <div className="suggestions">
            <p>Take a pause and explore your stress levels with our stress quiz. Each question offers a window into your inner</p>
            <p>state, guiding you towards a clearer understanding of your wellness journey.</p>
        </div>
        <div className="buttonUnwind">
            <button >Unwind and Assess</button>
        </div>
        <div className="restAssured">
            <p>**Rest assured, your results are completely anonymous.**</p>
        </div>
    </div>
    </>
  )
}
