import React from 'react'
import './Dynasty.css';
import b1 from './bishop1.jpg';
import b2 from './bishop2.jpg';
import b3 from './bishop3.jpg';

function Dynasty() {
  return (
    <div className='dyn-main'>
      <div className="dyn-head">
        <h1>Our Hierarchy</h1>
        <hr />
      </div>
      <div className="dyn-content">
        <div className="dyn-con">
            <h1>Patriarch</h1>
            <img src={b1} alt="Bishop1" />
            <h3>H.H. Moran Mor Ignatius Aphrem II</h3>
            <p>The 123rd Patriarch of the Holy See of Antioch & All the East adorning the Throne of St. Peter and and the Supreme Pontiff of the Universal Syrian Orthodox Church.</p>
        </div>
        <div className="dyn-con">
            <h1 className='dyn-con2'>Catholicose</h1>
            <img src={b2} alt="Bishop2" />
            <h3>H.B. Mor Baselios Thomas I</h3>
            <p>The Syriac Orthodox Catholicose (Maphrian) of India and spiritual head of the Jacobite Syriac Orthodox Christians in Malankara, who is second in rank to the supreme spiritual head, the Patriarch of Antioch.</p>
        </div>
        <div className="dyn-con">
            <h1>Archbishop</h1>
            <img src={b3} alt="Bishop3" />
            <h3>H.E. Mor Titus Yeldho</h3>  
            <p>Archbishop and Patriarchal Vicar of the Malankara Archdiocese of the Syriac Orthodox Church in North America.Archbishop and Patriarchal Vicar of the Malankara Archbishop and Patriarchal Vicar of the Malankara </p>
        </div>
      </div>
    </div>
  )
}

export default Dynasty
