import React from 'react'
import FaqCard from './FaqCard';
import FaqList from './FaqList';
import 'boxicons'

const Faq = () => {
    const faq = FaqList.map((list) => {
        return <FaqCard key={list.id} list={list} />;
      });
  return (
    <div className="p-4 p-lg-5 mb-5 bg-white">
      <div className="text-center cert">
        <h2 className="py-2 faqh2">
          Frequently Asked Questions
        </h2>
      </div>
      <div className='px-0 px-lg-5'>

      {faq}
      </div>
    </div>
  )
}

export default Faq
