import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import datas from './data';


function App() {

  const [data, setDate] = useState(datas);
  const [active, setActive] = useState(1);
  const checkNumber = (number) => {
    if(number<0){
      return data.length-1;
    }else if(number>=data.length){
      return 0;
    }else{
      return number;
    }
  }

  useEffect(() => {
    let slider = setInterval(() => {
      next();
    },5000);
    return () => {
      clearInterval(slider);
    }
  },[active]);

  const handleClick = () => {
    const tmp = active-1;
    setActive(checkNumber(tmp));
  }
  // useEffect(() => {
  //   addClass();
  // },[active])
  const addClass = (number) => {
    if(number===active){
      return "activeSlide";
    }else if(number === active-1 || (active === 0 && number === data.length-1)){
      return "lastSlide";
    }else{
      return "nextSlide";
    }
  }
  const next = () => {
    setActive(checkNumber(active+1));
  }
  const prev = () => {
    setActive(checkNumber(active-1))
  }
  return <>
    <section className="section">
    <div className="title">
      <h2>
        <span>/</span>
        Reviews
      </h2>
    </div>
    <div className="section-center">
      {data.map((item, index) => {
        return <article key={item.id} className={`${addClass(index)}`}>
          <img src={item.image} alt={item.name} className="person-img"/>
          <h4>{item.name}</h4>
          <p className="title">{item.title}</p>
          <p className="text">{item.quote}</p>
          <FaQuoteRight className="icon" />
        </article>
      })
      }
      <button onClick = {prev} className="prev"><FiChevronLeft/></button>
      <button onClick = {next} className="next"><FiChevronRight/></button>
    </div>
    </section>
  </>;
}

export default App;
 