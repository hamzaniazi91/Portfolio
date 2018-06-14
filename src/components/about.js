import React from 'react';

import about from '../assets/images/about/creative.png';
import lfzLogo from '../assets/images/about/lfz-logo.png';
import calpolyLogo from '../assets/images/about/cp-logo.png';
import kingstonLogo from '../assets/images/about/kingston-logo.png';


export default props =>{

    return(
        <section id='about'>
        <div className="container">
            <h3 className='white-color'>Who Am I?</h3>
            <hr className='white-color'/>
            <p className='text-faded'>

            Full stack/Java Software Engineer with a proven ability to develop highperformance
applications and technical innovations. With passion, education, and experience to develop websites and applications.


</p>


         {/*   <div className='row'>
            <img id="aboutImg" className='col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img' src={about} alt="About me"/>
            </div>
            <div className="text-faded center-align"><em>"Where there's a will, there's a way."</em></div>*/}
            <p className='text-faded'>Since 2016, I have served as a Senior Software Engineer for Meezan Bank Limited. where I
have been repeatedly recognised for developing innovative solutions for software and systems.
I am responsible for full lifecycle development of next-generation software, from initial
requirement gathering to design, coding, testing, documentation and implementation.
Accomplished knowledge management implementation using multiple technologies, enterprise
project lifecycle and multiple systems development and implementation for banking industry,
human resource and procurement functions
Known for excellent management-facing skills, I also excel in merging business and user needs
into high-quality, cost-effective design solutions while keeping within budgetary constraints.
Previously I have worked for more than 1 years in Cloud Solutions which was an startup. I
developed and implemented many systems there which are detailed in my resume.
</p>
            
  {/*          <h4 className='white-color'>Background</h4>
            <hr className='white-color sub'/>
            <div className="row">
            <div className="col s12 m4">
                <img src={lfzLogo} alt="LearningFuze" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                Completing LearningFuze's <em>Full Immersion Web Development Program </em>has laid the foundation for my <strong>software development</strong> career.
            </div>
        </div>
        <div className="col s12 m4">
            <img src={kingstonLogo} alt="Kingston" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                5+ years experience as a <strong>Flash Design Engineer </strong>at <em>Kingston Technology</em> has molded me into an engineer that can take a concept and develop it into a high volume product.
            </div>
        </div>
        <div className="col s12 m4">
            <img src={calpolyLogo} alt="Cal Poly" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                Earning my bachelor's degree in <strong>Electrical Engineering</strong> while applying Cal Poly's <em>Learn by Doing</em> approach is how I acquired my logical and analytical skills.
            </div>
        </div>
            </div>*/}
            
        </div>
        </section>
    );
}