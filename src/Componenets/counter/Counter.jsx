import React from 'react';
import './Counter.css';

function Counter() {
  return (
    <div id="hot-deal" className="section">
      <div >
        <div className="row">
          <div className="col-md-12">
            <div className="hot-deal">
              <ul className="hot-deal-countdown list-inline">
                <li className="list-inline-item">
                  <div>
                    <h3>02</h3>
                    <span>Days</span>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div>
                    <h3>10</h3>
                    <span>Hours</span>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div>
                    <h3>34</h3>
                    <span>Mins</span>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div>
                    <h3>60</h3>
                    <span>Secs</span>
                  </div>
                </li>
              </ul>
              <h2 className="text-uppercase">hot deal this week</h2>
              <p>New Collection Up to 50% OFF</p>
              <a className="btn btn-primary cta-btn" href="#">Shop now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
