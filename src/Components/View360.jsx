import React, { useState } from 'react';
import ThreeSixty from "react-360-view";


export default function View360() {

  return (
    <div>
        <section className="degree-section common-padding">
    <div className="container-fluid common-spacing">
      <div className="row align-items-center g-3">
        <div className="col-lg-3">
          <div className="wrap">
            <ul className="timeline">
              <li>Scrambler <br /><span>On Road Price</span> <br /><span>₹ 2,08,829</span>
              </li>
              <li>Roadster</li>
              <li>Adventure</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 text-center">
        <ThreeSixty
    amount={36}
    imagePath={"https://via.placeholder.com/600x400.png"}
    fileName="chair_{index}.jpg?v1"
    autoplay
    loop
    spinReverse
/>

        </div>
        <div className="col-lg-3">
          <div className="selection">
            <div className="d-flex align-items-center select">
              <div className="palette-one" />
              <p>Single Tone <br />Bold Black</p>
            </div>
            <div className="d-flex align-items-center select mt-1">
              <div className="palette-two" />
              <p>Single Tone <br />Bold Black</p>
            </div>
            <div className="d-flex align-items-center select mt-1">
              <div className="palette-three" />
              <p>Single Tone <br />Bold Black</p>
            </div>
            <div className="d-flex align-items-center select mt-1">
              <div className="palette-four" />
              <p>Single Tone <br />Bold Black</p>
            </div>
            <div className="d-flex align-items-center select mt-1">
              <div className="palette-five" />
              <p>Single Tone <br />Bold Black</p>
            </div>
            <div className="d-flex align-items-center select mt-1">
              <div className="palette-six" />
              <p>Single Tone <br />Bold Black</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
