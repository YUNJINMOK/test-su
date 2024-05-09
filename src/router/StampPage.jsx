import Layout from "../components/Layout";
import GrayStamp from "../assets/stampGray.svg";
import "../style/stamp.css";
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
            <img src={GrayStamp} alt="stamp" />
          </p>
          <p>
            <img src={GrayStamp} alt="stamp" />
          </p>
          <p>
            <img src={GrayStamp} alt="stamp" />
          </p>
          <p>
            <img src={GrayStamp} alt="stamp" />
          </p>
          <p>
            <img src={GrayStamp} alt="stamp" />
          </p>
          <p>
            <img src={GrayStamp} alt="stamp" />
          </p>
        </div>
      </div>
    </Layout>
  );
}
