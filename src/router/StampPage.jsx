import Layout from "../components/Layout";
import GrayStamp from "../assets/stampGray.svg";
import "../style/stamp.css";

export default function StampPage() {
  return (
    <Layout>
      <div className="stamp-section">
        <div className="stamp-dropmenu">드롭다운메뉴바만들기</div>
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
