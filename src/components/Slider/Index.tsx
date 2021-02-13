import React from 'react'
import { Slider } from 'antd';
import './Index.scss'
interface Props {
  
}

const Index = (props: Props) => {
  return (
    <div className="commonSlider">
      <Slider defaultValue={30}></Slider>
    </div>
  )
}

export default Index
