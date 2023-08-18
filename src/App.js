import React from "react";
import Banner from "./banner";
import { Header, Content, Footer } from "./func-components";
import Calender from "./class-components";
import { Calculator2 } from "./calculator";

function App(){
  return (
    <>
      <Header/>
      <p><center><Calender/></center></p>
      <Content/>
      <Calculator2/>
      <Banner/>
      <Footer/>
    </>
  )
}
export default App