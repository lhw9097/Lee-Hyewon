// 5월 7일 화
import { Link } from "react-router-dom";

const Home = () => {
  const age = 100; // 매개변수처럼 나이 전달
  return (
    <>
      <h1>여기가 홈입니다</h1>
      <p>가장 먼저 보이는 페이지입니다</p>
      <Link to="/about">소개 페이지로 이동</Link>
      <p>
        <Link to="/profiles/frontend">Frontend 프로필 보기</Link>
      </p>
      <p>
        <Link to="/profiles/backend">Backend 프로필 보기</Link>
      </p>
      <p>
        <Link to="/profiles/dba">DBA 프로필 보기</Link>
      </p>
      <p>
        <Link to={`/age/${age}`}>나이 전달하기</Link>{" "}
        {/* 그냥 백틱(``) 넣으면 에러 있으니 {} 안에 넣을 것 */}
      </p>
      <p>
        <Link to="/articles" 
      </p>
    </>
  );
};
export default Home;
