// 5월 7일 화
import { useParams } from "react-router-dom";
const Article = () => {
  const { id } = useParams();
  return (
    <>
      <h2>게시글 : {id}</h2>
      <Article />
    </>
  );
};
export default Article;
