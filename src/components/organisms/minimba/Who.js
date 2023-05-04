import React from 'react'
import Text from '../../atom/Text'
import Image from '../../atom/Image'
import pic from '../../../images/Group 24.png'

const Who = () => {
 
  return (
    <div className='training p-4 p-lg-5 padculture'>
      <h2 className='text-black text-center' data-aos="zoom-in-up" data-aos-duration="2000">Who is the Mini-MBA designed for?</h2>
      <div className='w-100 py-5 row gap-3 justify-content-center'>
        <div className='who-box col-sm-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" data-aos-duration="2000">
            <div>

            <Image className="" src={pic}/>
            </div>
            <Text className="" children="Small Business Owners" />
            <Text className="who-text px-4" children="You are a small business owner looking to learn the skills needed to run and grow your enterprise." />
        </div>

        <div className='who-box col-sm-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" data-aos-duration="2000">
            <div>

            <Image className="" src={pic}/>
            </div>
            <Text className="" children="Managers" />
            <Text className="who-text px-4" children="You manage one or more departments within a company and you are looking to sharpen your team." />
        </div>

        <div className='who-box col-sm-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" data-aos-duration="2000">
            <div>

            <Image className="" src={pic}/>
            </div>
            <Text className="" children="Freelancers / Solopreneurs" />
            <Text className="who-text px-4" children="You like the freedom of working for yourself and you need the skills to grow and manage your income." />
        </div>

        <div className='who-box col-sm-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" data-aos-duration="2000">
            <div>

            <Image className="" src={pic}/>
            </div>
            <Text className="" children="Corporate Leaders" />
            <Text className="who-text px-4" children="You are the head of finance, tech, human resource, operations etc and you need to up-skill rapidly." />
        </div>

      </div>
    </div>
  )
}

export default Who
