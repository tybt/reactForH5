import Img_1 from "../../../asserts/images/love_03.png";
import Img_2 from "../../../asserts/images/comment.png";
import Img_3 from "../../../asserts/images/transfer_03.png";
import "./RightSlider.scss";
interface Props {}

const RightSlider = (props: Props) => {
  return (
    <div className="rightBar flexCenterColumn">
      <div className="m_b20">
        <img className="userImg" src={Img_3} alt="" />
      </div>
      <div className="flexCenterColumn">
        <img className="img_icon " src={Img_1} alt="" />
        <div className="count">1234</div>
      </div>
      <div className="flexCenterColumn">
        <img className="img_icon" src={Img_2} alt="" />
        <div className="count">1234</div>
      </div>
      <div className="flexCenterColumn">
        <img className="img_icon" src={Img_3} alt="" />
        <div className="count">1234</div>
      </div>
    </div>
  );
};

export default RightSlider;
