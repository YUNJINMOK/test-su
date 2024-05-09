import "../style/stamp.css";
import Layout from "../components/Layout";
import GrayStamp from "../assets/stampGray.svg";
import GreenStamp from "../assets/stampGreen.svg";
import BlackStamp from "../assets/stampBlack.svg";
import DropDown from "../components/DropDown";

export default function StampPage() {
  return (
    <Layout>
      <div className="stamp-section">
        {/* 드롭다운 */}
        <DropDown />
        {/* 스탬프 */}
        <div className="stamp-box">
          <p>
            <img src={GrayStamp} alt="미완성 스탬프" />
            <img id="greenStamp" src={GreenStamp} alt="완성 스탬프" />
            <img id="blackStamp" src={BlackStamp} alt="맹인 스탬프" />
          </p>
          <p>
            <img src={GrayStamp} alt="미완성 스탬프" />
            <img id="greenStamp" src={GreenStamp} alt="완성 스탬프" />
            <img id="blackStamp" src={BlackStamp} alt="맹인 스탬프" />
          </p>
          <p>
            <img src={GrayStamp} alt="미완성 스탬프" />
            <img id="greenStamp" src={GreenStamp} alt="완성 스탬프" />
            <img id="blackStamp" src={BlackStamp} alt="맹인 스탬프" />
          </p>
          <p>
            <img src={GrayStamp} alt="미완성 스탬프" />
            <img id="greenStamp" src={GreenStamp} alt="완성 스탬프" />
            <img id="blackStamp" src={BlackStamp} alt="맹인 스탬프" />
          </p>
          <p>
            <img src={GrayStamp} alt="미완성 스탬프" />
            <img id="greenStamp" src={GreenStamp} alt="완성 스탬프" />
            <img id="blackStamp" src={BlackStamp} alt="맹인 스탬프" />
          </p>
          <p>
            <img src={GrayStamp} alt="미완성 스탬프" />
            <img id="greenStamp" src={GreenStamp} alt="완성 스탬프" />
            <img id="blackStamp" src={BlackStamp} alt="맹인 스탬프" />
          </p>
        </div>
      </div>
    </Layout>
  );
}
