import React from 'react'
import Image from '../../atom/Image'
import reach from "../../../images/Group 34.png"
import Text from '../../atom/Text'
import tel from "../../../images/phone-call 1.png";
import inout from "../../../images/Instagram Outline.png";
import email from "../../../images/envelope 2.png";
import faceout from "../../../images/Facebook Outline.png";
import twitout from "../../../images/Twitter Outline.png";
import location from '../../../images/marker 1.png'
import TextLinks from '../../atom/TextLinks';

const ReachOut = () => {
  return (
    <div className='dark-color p-4 p-lg-5'>
      <div className='row reachout align-items-center gap-4'>
        <div className='col-sm-12 col-md-12 col-lg-6 p-0 reachcol' data-aos="zoom-in-up" data-aos-duration="2000">
            <h2 className='reachtext'>Reach Out to Us</h2>
            <div className='reach-color d-flex gap-2'>
                <div className='iconw'>
                    <Image className="icons2" src={tel}/>
                </div>
                    <Text className="" children="+(234) 012-345-6789, +(234) 012-345-6789."/>
            </div>
            <div className='reach-color d-flex gap-2'>
                <div className='iconw'>
                    <Image className="icons2" src={twitout}/>
                </div>
                <Text  children={<TextLinks className="reach-color" children="sageinstitutehq"/>}/>
            </div>
            <div className='reach-color d-flex gap-2'>
                <div className='iconw'>
                    <Image className="icons2" src={inout}/>
                </div>
                <Text  children={<TextLinks className="reach-color" children="sageinstitutehq"/>}/>
            </div>
            <div className='reach-color d-flex gap-2'>
                <div className='iconw'>
                    <Image className="icons2" src={faceout}/>
                </div>
                <Text  children={<TextLinks className="reach-color" children="sageinstitutehq"/>}/>
            </div>
            <div className='reach-color d-flex gap-2'>
                <div className='iconw'>
                    <Image className="icons2" src={email}/>
                </div>
                    <Text  children={<TextLinks className="reach-color" children="mailto:support@sageinstitutehq.com"/>}/>
            </div>
            <div className='reach-color d-flex gap-2'>
                <div className='iconw'>
                    <Image className="icons2" src={location}/>
                </div>
                    <Text className="" children="4b Toyin Street Ikeja, Lagos State"/>
            </div>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-6 reachimg reachcol p-0' data-aos="fade-up" data-aos-duration="2000">
            <Image src={reach}/>
        </div>
      </div>
    </div>
  )
}

export default ReachOut
