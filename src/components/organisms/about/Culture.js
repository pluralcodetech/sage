import React from 'react'
import Image from '../../atom/Image'
import Text from '../../atom/Text'
import pica from '../../../images/Group 50.png'
import picb from '../../../images/Group 50 (1).png'

const Culture = () => {
  return (
    <div className='bg-white p-4 p-lg-5 padculture'>
      <h2 className='text-black text-center pb-xxl-4 ' data-aos="zoom-in-up" data-aos-duration="2000">Our Culture</h2>
      <div className='w-100 py-5 row gap-4 justify-content-center'>
        <div className=' col-sm-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center culture-box' data-aos="fade-up" data-aos-duration="2000">
            <div>

            <Image className="" src={pica}/>
            </div>
            
            <Text className="culture-text" children="Speed" />
        </div>

        <div className='col-sm-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center culture-box' data-aos="fade-up" data-aos-duration="2000">
            <div>

            <Image className="" src={picb}/>
            </div>
            <Text className="culture-text" children="Ambition" />

        </div>

        <div className='col-sm-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center culture-box' data-aos="fade-up" data-aos-duration="2000">
            <div>

            <Image className="" src={pica}/>
            </div>
            <Text className="culture-text" children="Agile" />

        </div>

        <div className='col-sm-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center culture-box' data-aos="fade-up" data-aos-duration="2000">
            <div>

            <Image className="" src={picb}/>
            </div>
            <Text className="culture-text" children="Teamwork" />
        </div>

      </div>
    </div>
  )
}

export default Culture
