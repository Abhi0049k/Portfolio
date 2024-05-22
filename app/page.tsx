"use client"
import Projects from "@/components/Projects";
import { BackgroundBoxes } from "@/components/BackgroundBoxes";
import { Header } from "@/components/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [pageHeight, setPageHeight] = useState(0);

  console.log(pageHeight);

  useEffect(() => {
    // Function to update pageHeight state
    const updatePageHeight = () => {
      setPageHeight(window.innerHeight);
    };

    // Update page height on mount and on window resize
    updatePageHeight();
    window.addEventListener('resize', updatePageHeight);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', updatePageHeight);
    };
  }, []);
  return (
    <>
      <Header />
      <Projects />
      <BackgroundBoxes />
    </>
  );
}
