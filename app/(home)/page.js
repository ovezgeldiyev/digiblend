"use client";

import { useEffect, useState } from "react";
import Header from "../Base/Header";
import Footer from "../Base/Footer";
import Market from "./components/Market";
import Offer from "./components/Offer";
import Work from "./components/Work";
import Quest from "./components/Quest";
import Touch from "./components/Touch";
import Testimonials from "./components/Testimonials";
import ShowCase from "./components/ShowCase";

export default function Home() {
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
        <Market />
        <Offer />
        <Work />
        <Touch />
        <Quest />
        <Testimonials />
        <ShowCase />
        <Footer uniqFooter={uniqFooter} />
      </main>
    </>
  );
}
