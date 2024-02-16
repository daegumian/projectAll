import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className='home-container'>
      <div className='intro-section'>
        <h1>환영합니다!</h1>
        <p>
          이곳은 하루에 한 문장씩 두 언어를 동시에 공부해보는{" "}
          <p>
            <strong>icantwoit.</strong>{" "}
          </p>
          <strong style={{ marginLeft: "260px", fontSize: "35px" }}>
            아이캔투잇.
          </strong>
          <p>홈페이지 입니다.</p>
          <p>매일매일 일타이피!</p>
        </p>
        <p>차근차근 외워볼까요!</p>
      </div>

      <div className='links-section'>
        <h2>다른 페이지로 이동</h2>
        <div>
          <Link to='/sentence'>문장 생성</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
