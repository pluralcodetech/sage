import React from 'react'
import Image from '../../atom/Image'
import group1 from '../../../images/Group 5.png'
import group2 from '../../../images/Group 5 (1).png'

const Learn = () => {
  return (
    <div className='px-4 px-lg-5 py-3 py-lg-5 learn'>
        <h2 className='text-black text-center py-lg-5'>What You Will Learn</h2>
      <div className='row gap-3 pt-3 py-lg-3 justify-content-between'>
        <div className='col-sm-12 col-md-12 col-lg-6 learnone d-flex gap-3'>
            <div>
                <Image src={group1} />
            </div>
            <div>

            <h3>Week 1</h3>
            <ul>
                <li>Intro to UI/UX design & tools</li>
                <li>Understanding how tool work</li>
                <li>Layers, Assets, Page & Design</li>
                <li>Move, Frame,Slice,Shapes,Pen & Pencil</li>
                <li>Text & Effect</li>
                <li>Pan & Comment</li>
                <li>Color Theory & style</li>
            </ul>
            </div>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-6 learntwo d-flex gap-3'>
        <div>
                <Image src={group2} />
            </div>
            <div>

            <h3>Week 2</h3>
            <ul>
                <li>Applying Design Principle</li>
                <li>Contrast, Hierarchy,Focal Point</li>
                <li>Alignment & Balance</li>
                <li>Class Exercise</li>
            </ul>
            </div>
        </div>
      </div>
      <div className='row gap-3 pt-3 py-lg-3 justify-content-between'>
        <div className='col-sm-12 col-md-12 col-lg-6 learntwo week3 d-flex gap-3'>
            <div>
                <Image src={group1} />
            </div>
            <div>

            <h3>Week 3</h3>
            <ul>
                <li>Group v component</li>
                <li>Masking</li>
                <li>Layer Blending Mode</li>
                <li>Constraint V Auto Layout</li>
                <li>Inspect</li>
                <li>Export</li>
                <li>Class exercise</li>
                
            </ul>
            </div>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-6 learnone week4 d-flex gap-3'>
        <div>
                <Image src={group2} />
            </div>
            <div>

            <h3>Week 4</h3>
            <ul>
                <li>Keyboard Shortcut</li>
                <li>Layout Grid</li>
                <li>Wireframing</li>
                <li>Exercise</li>
            </ul>
            </div>
        </div>
      </div>
      <div className='row gap-3 pt-3 py-lg-3 justify-content-between'>
        <div className='col-sm-12 col-md-12 col-lg-6 learnone d-flex gap-3'>
            <div>
                <Image src={group1} />
            </div>
            <div>

            <h3>Week 5 & 6</h3>
            <ul>
                <li>Building Basic App UI</li>
                <li>Prototype</li>
                <li>Recap</li>
                <li>Building basic website ui</li>
            </ul>
            </div>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-6 learntwo d-flex gap-3'>
        <div>
                <Image src={group2} />
            </div>
            <div>

            <h3>Week 7, 8 & 9</h3>
            <ul>
                <li>Spliting into groups</li>
                <li>Building Advance App UI</li>
                <li>Prototype Advance App UI</li>
                <li>Building Advance Web UI</li>
                <li>Prototype Advance web UI</li>
                <li>Starting A Career as a UI Designer</li>
                <li>Questions & Answers</li>
            </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Learn
