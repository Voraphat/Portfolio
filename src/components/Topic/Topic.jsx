import React, { useEffect } from 'react';
import './Topic.css'
import Navbar from '../Navbar/Navbar'




function Topic() {
  return (
    <section className='topic'>
      <Navbar/>
      <div className="cover">
        <p className="stack">My Skill</p>
      </div>
    </section>
  );
}

export default Topic;
