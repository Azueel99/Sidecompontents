import React from "react";
import Counter from "../cliente/page";

export const metadata = {
  title: "Contador De clicks",
  description: "Contador Manual",
};

const HibridoPage = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default HibridoPage;

//CSR SSR SSG

//CSR = CLIENT SIDE RENDERING

//SSR = SERVER SIDE RENDERING

//SSG = STATIC SITE GENERATION
