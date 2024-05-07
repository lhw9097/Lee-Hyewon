// 5월 7일 화
import { useLocation, Navigate } from "react-router-dom";
// 쿼리스트링은 URL 파라미터와 달리 별도 설정이 필요없음

const About = () => {
  const location = useLocation();
  const id = localStorage.getItem("ID");
  if (id !== "jks2024_") {
    return <Navigate to="/login" replace={true} />;
  }
  return (
    <>
      <h1>여기는 소개 페이지입니다</h1>
      <p>리액트 라우트를 사용해 봅니다</p>
      <p>쿼리스트링 : {location.search}</p>{" "}
      {/* http://localhost:3000/about?detail=true&mode=1 쓰면 about 뒤의 글자가 나오게 됨 */}
    </>
  );
};
export default About;
