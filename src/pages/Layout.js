import { Outlet } from "react-router-dom";
// 중첩된 라우트와 Outlet은 페이지까리 공통적으로 보여줘야 하는 레이아웃이 있을 때도 유용하게 사용
const Layout = () => {
  return (
    <>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        Header
      </header>
      <main>
        <Outlet />
      </main>
      <footer style={{ background: "gray", padding: 16, fontSize: 24 }}>
        Footer
      </footer>
    </>
  );
};
export default Layout;