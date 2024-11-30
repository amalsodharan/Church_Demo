import React from 'react'
import './Saint.css';
import bishop from './bishop.jpeg';

function Saint() {
  return (
    <div className='saint-main'>
      <div className="saint-head">
        <h1>Our Patron Saint</h1>
        <hr />
      </div>
      <div className="saint-content">
        <div className="content-left">
            <div className="left-head">
                <h3>St.Ignatius Elias III (1867-1932)</h3>
            </div>
            <div className="left-body">
                <h4>Mor Ignatius Elias III (ܐܝܓܢܛܝܘܣ ܐܠܝܐܣ ܬܠܝܬܝܐ) was the 119th legitimate successor to St. Peter on the Holy Patriarchal See of Antioch. The second son of Chorepiscopus Abraham and Maryam, he was born in Mardin and christened Nasri.   </h4>
                <h4>On 1 December 1930, Elias received a request from Lord Irwin, Viceroy of India, to help resolve a schism within the Malankara Church. Despite cautions from his doctor and eldest sister, Elias left Mosul on 6 February 1931. Elias arrived in Malankara on 21 March and remained in India until February 1932 when he died at the Church of St. Ignatius Monastery Manjinikkara on 13 February where his remains were interred . </h4>
                <h4>55 years after his death, in 1987, his successor Patriarch Ignatius Zakka I officially declared him a Saint. His feast day is observed on 13 February.            </h4>
            </div>
            <div className="left-but">
                <button className='ser-but'>Learn more</button>
            </div>
        </div>
        <div className="content-right">
            <img src={bishop} alt="bishop" className='bish-img' />
        </div>
      </div>
    </div>
  )
}

export default Saint
