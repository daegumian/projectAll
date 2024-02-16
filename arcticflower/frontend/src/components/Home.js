import { Link } from "react-router-dom";
import "../CSS/Home.css"; // Home.css 파일을 가져옵니다.

const Home = () => {
  return (
    <div className='home-container'>
      <div className='intro-section'>
        <h1>환영합니다!</h1>
        <p>
          이곳은 복리의 힘!을 활용한{" "}
          <p>
            <strong>arcticflower</strong>{" "}
          </p>
          홈페이지입니다.
        </p>
        <p>여러 가지 기능을 테스트하고 사용해 보세요!</p>
      </div>

      <div className='links-section'>
        <h2>다른 페이지로 이동</h2>
        <div>
          <Link to='/chart'>차트 보기</Link>
        </div>
        <div>
          <Link to='/order'>거래 생성</Link>
        </div>
        <div>
          <Link to='/settings'>거래 환경설정</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
