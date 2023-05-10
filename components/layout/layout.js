import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  let [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    let fetcher = async () => {
      let res = await fetch("/api/user");
      let data = await res.json();
      setIsLogin(data.isLogin);
    };
    fetcher();
  }, []);

  return (
    <>
      <Header isLogin={isLogin} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
