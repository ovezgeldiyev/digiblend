"use client";

import { useEffect, useState } from "react";
import Header from "../Base/Header";
import Footer from "../Base/Footer";
import Growth from "./components/Growth";
import Touch from "./components/Touch";
import Quest from "./components/Quest";
import Challange from "./components/Challange";
import Office from "./components/Office";


export default function Overview() {
  useEffect(() => {
    setUniqFooter(true);
  }, []);
  const [uniqFooter, setUniqFooter] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    setMenu(false);
    document.body.classList.remove("active");
  }, []);
  return (
    <>
      <main className="main sm">
        <Header menu={menu} setMenu={setMenu} />
        <Growth />
        <Challange/>
        <Quest />
        <Touch />
        <Office/>
        <Footer />
      </main>
    </>
  );
}
