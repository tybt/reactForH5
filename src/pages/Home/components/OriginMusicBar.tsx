import img1 from '../../../asserts/images/douyin_03.png'
import './OriginMusicBar.scss'
import Slider  from '../../../components/Slider/Index'
interface Props {
  
}

const OriginMusicBar = (props: Props) => {
  return (
    <div className="OriginMusicBar">
      <div style={{marginTop:"20rem"}}>1111</div>
      <img className="douyin" src={img1} alt="" />
      <Slider></Slider>
    </div>
  )
}

export default OriginMusicBar
