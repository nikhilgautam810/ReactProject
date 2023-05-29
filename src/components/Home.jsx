import React, { Fragment } from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube
,AiFillInstagram,} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className="home" id="home">
        <main>
            <h1>Nexus Software</h1>
            <p>Unleashing the power of technology</p>
        </main>

    </div>

    <div className="home2" id="contact">
      <img src={vg} alt="Graphics" />
      <div>
        <p>
        Embrace the power of innovation. 
        Unleash your digital potential. 
        Choose our software company, 
        where expertise meets passion, 
        and together, we'll shape the future 
        of software solutions. Let's embark
         on this exciting journey together and 
         redefine what's possible in the world of 
         technology.
        </p>
      </div>
    </div>


    <div className="home3" id="about">
      <div>

          <h1>Who we are?</h1>
          <p>Welcome to our software company, 
            where innovation meets excellence! 
            With a passion for crafting cutting-edge 
            solutions, we are committed to delivering 
            the software of your dreams. 
            Whether you're seeking a sleek 
            mobile application, a robust web platform, 
            or a sophisticated enterprise system, 
            we have the expertise to bring your vision
            to life.

            At our core, we believe in pushing 
            the boundaries of what's possible in the
            digital realm. Our team of brilliant minds
              thrives on challenges, constantly seeking 
              out new technologies and methodologies to
              revolutionize the software landscape. We 
              understand that every project is unique,
                and we tailor our approach to meet your
                specific needs, ensuring a truly personalized 
                experience.</p>
        </div>
    </div>

    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>

        <article>
          <div style={{animationDelay:"0.3s"}}>
          <AiFillGoogleCircle/>
          <p>Google</p>
          </div>

          <div style={{animationDelay:"0.5s"}}>
          <AiFillAmazonCircle/>
          <p>Amazon</p>
          </div>

          <div style={{animationDelay:"0.7s"}}>
          <AiFillYoutube/>
          <p>Youtube</p>
          </div>

          <div style={{animationDelay:"1s"}}>
          <AiFillInstagram/>
          <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home