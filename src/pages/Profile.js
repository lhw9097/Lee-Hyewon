// 5월 7일 화
import { useParams } from "react-router-dom";
// useParams : 리액트 라우터에서 URL 파라미터 값을 가져와기 위해 사용되는 훅(use-)
const data = {
  frontend: {
    name: "곰돌이사육사",
    description: "리액트를 좋아하는 개발자",
  },
  backend: {
    name: "달빛사냥꾼",
    description: "스프링 부트를 좋아하는 개발자",
  },
  dba: {
    name: "드루이드상디",
    description: "DBA를 꿈꾸는 개발자",
  },
};
const Profile = () => {
  const params = useParams();
  const profile = data[params.name]; // [키]를 넣으면 값이 나옴
  return (
    <>
      <h1>사용자 프로필</h1>
      {profile ? ( // 다항연산자
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다</p>
      )}
    </>
  );
};
export default Profile;
