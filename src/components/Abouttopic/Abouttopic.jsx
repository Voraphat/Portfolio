import React, { useEffect } from 'react';
import '../Topic/Topic'
import Navbar from '../Navbar/Navbar'




function Abouttopic() {
  return (
    <section className='topic'>
      <Navbar/>
      <div className="cover">
        <p className="stack">About me</p>
      </div>
    </section>
  );
}

export default Abouttopic;
