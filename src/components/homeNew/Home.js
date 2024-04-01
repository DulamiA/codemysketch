import React from 'react'
import IntroImage from '../../images/intro-image.png';
import Image1 from '../../images/howItWorks-image1.svg';
import Image2 from '../../images/howItWorks-image2.svg';
import Image3 from '../../images/howItWorks-image3.svg';
import Image4 from '../../images/keyFeatures-image1.svg';
import Image5 from '../../images/keyFeatures-image2.svg';
import Image6 from '../../images/keyFeatures-image3.svg';
import Image7 from '../../images/keyFeatures-image4.svg';
import Image8 from '../../images/keyFeatures-image5.svg';
import Image9 from '../../images/tryForFree.svg';
import './Home.css';
import NavBar from '../NavBar/NavIndex';
import Footer from '../Footer copy/FooterIndex';
// import NavComponent from "../navigation/navigation";
// import FooterComponent from "../footer/footer";

function Home(props) {  
  return (
    <div>
      <NavBar/>
      <div className='content-margin'>
        <div className='home-content' style={{marginBottom:'70px', marginTop:'50px'}}>
          <div className='text'>
            <h1 className='heading'>We have the code for your UI sketch</h1>
            <p className='subheading'>Mobile & Web App Code Generator For Hand Drawn UI Sketches</p>
            <div className='buttons'>
              <button className='green-button' onClick={()=>{props.history.push('/uploadSketch')}}>Try For Free</button>
              <button className='gray-button' onClick={()=>{props.history.push('/howToUse')}}>How To Use</button>
            </div>
          </div>
          <div className='image'>
            <img 
              className='responsive'
              alt="intro"
              src={IntroImage}
            />
          </div>
        </div>
      </div>
      <div className='how-it-works'>
        <div className='content-margin'>
          <div className='how-it-works-content'>
            <div >
              <span className='how-it-works-subheading'>How it</span>
              <h1 style={{marginTop:'0px'}} className='heading'>Works</h1>
            </div>
            <div className='how-it-works-devs'>
              <div className='how-it-works-devcontent'>
                <img 
                  className='how-it-works-image'
                  alt="intro"
                  src={Image1}
                />
                <p>1. Upload UI Sketches</p>
              </div>
              <div className='how-it-works-devcontent'>
                <img 
                  className='how-it-works-image'
                  alt="intro"
                  src={Image2}
                />
                <p>2. Code Genaration</p>
              </div>
              <div className='how-it-works-devcontent'>
                <img 
                  className='how-it-works-image'
                  alt="intro"
                  src={Image3}
                />
                <p>3. Download the code</p>
              </div>
            </div>
            <button className='how-it-works-btn' onClick={()=>{props.history.push('/uploadSketch')}}>Begin The Journey</button>
          </div>
        </div>
      </div>
      <div>
        <div className='key-features-heading'>
          <span className='how-it-works-subheading'>CodeMySketch</span>
          <h1 style={{marginTop:'0px'}} className='heading'>Key Features</h1>
        </div>
        <Card1
          heading={'Quick image scanning capability'}
          imagesrc={Image4}
          para={'Sketch the UI and upload a snapshot through the app. Take a breath and wait for a moment, the app will sync with your mind.'}
        />
        <Card2
          heading={'Seamless process of the sketch into a code'}
          imagesrc={Image5}
          para={'Making Prototypes is now on your hand. The WebApp will process your sketch into a code without any hassle. Provide your sketch only, the App will handle others.'}
        />
        <Card1
          heading={'Generate code for your language choice'}
          imagesrc={Image6}
          para={'Now you can download the code in HTML/CSS, react JS and many more. For mobile, we support React Native & flutter. Upload the code and chose your preferred language to generate the code. That easy!'}
        />
        <Card2
          heading={'Work with multiple sketches'}
          imagesrc={Image7}
          para={'Does your project have multiple sketches? No problem, the app will generate all them into one project.'}
        />
        <Card1
          heading={'Share your UI idea with co-workers instantly'}
          imagesrc={Image8}
          para={'The place where you in, does not matter. Now you can share your UI’s code with your co-worker.'}
        />
      </div>
      <div className='content-margin'>
        <div className='home-content try-for-free-content'>
          <div className='image2'>
            <img 
              className='responsive'
              alt="intro"
              src={Image9}
            />
          </div>
          <div className='text'>
            <span className='how-it-works-subheading' style={{ color:'white'}}>Transform Your Ideas into Reality.</span>
            <h1 className='heading' style={{color:'white', marginTop:'0px', marginBottom:'20px'}}>Try for Free Today!</h1>
            <div className='buttons'>
              <button className='green-button' onClick={()=>{props.history.push('/uploadSketch')}}>Try For Free</button>
              <button className='gray-button'>Pricing Plans</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

function Card1({heading, imagesrc, para}){
  return(
    <div className='content-margin'>
      <div className='home-content'>
        <div className='text'>
          <h1 className='subheading2'>{heading}</h1>
          <p className='subheading'>{para}</p>
        </div>
        <div className='image image2'>
          <img 
            className='responsive'
            alt="intro"
            src={imagesrc}
          />
        </div>
      </div>
    </div>
  )
}

function Card2({heading, imagesrc, para}){
  return(
    <div className='content-margin'>
      <div className='home-content'>
        <div className='image image2'>
          <img 
            className='responsive'
            alt="intro"
            src={imagesrc}
          />
        </div>
        <div className='text' style={{textAlign:'right'}}>
          <h1 className='subheading2'>{heading}</h1>
          <p className='subheading'>{para}</p>
        </div>
      </div>
    </div>
  )
}

export default Home
