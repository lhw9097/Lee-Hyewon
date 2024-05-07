// 5월 7일 화
import { useParams, Link, useNavigate } from "react-router-dom";
// useParams : URL 파라미터 뽑아내는 것
const Age = () => {
  const { age } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1>전달받은 나이는 {age}입니다</h1>
      <Link to="/about">소개</Link>
      <p style={{ textDecoration: "underline" }} onClick={() => navigate(-1)}>
        소개페이지로 이동
      </p>
    </>
  );
};
export default Age;
