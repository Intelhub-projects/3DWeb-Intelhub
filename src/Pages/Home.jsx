import React from "react";
// import { Game, Laptop,Drone, Acc, Mobile } from "../assets/images";
import { Acc, Laptop, Game, drone, Mobile } from "../assets/images";

const Home = () => {
  return (
    <>
    <section class="grid-body container p-1">
      <div class="grid-container">
        <div class="grid-container-1 ">
          <h2>
            AUDIO <br />
            <span class="spans">STUDIO</span>
            <span>3</span>
            <br />
            <span class="spans">WIRELESS</span>
          </h2>

          <h4>Hear the music</h4>

          <p>Not The Noise</p>

          <button type="submit">View All</button>
        </div>

        <div class="grid-container-2 ">
          <div class="grid-inner-1">
            <h3>New Age Electric</h3>

            <h2>SCOOTERS</h2>

            <p>
              Last Call for up to <span class="spanded">$250</span> off
            </p>

            <button type="submit">View All</button>
          </div>

          <div class="grid-inner-2">
            <h3>ENHANCE YOUR</h3>

            <h2>ENTERTAINMENT</h2>

            <p>
              Now at <span class="span">$250</span>
            </p>

            <button type="submit">View All</button>
          </div>
        </div>
      </div>
    </section>

    <section class="flex container">

   <div class="flex-container">

    <div class="flex-img-box">
        <h2>super deals</h2>
    </div>

    <div class="flex-img-box">
        <img src={Game} alt="" />
    </div>

    <div class="flex-img-box">
        <img src={Laptop} alt=""/>
    </div>

    <div class="flex-img-box">
        <img src={drone} alt=""/>
    </div>

    <div class="flex-img-box">
        <img src={Acc} alt="" />
    </div>

    <div class="flex-img-box">
        <img src={Mobile} alt=""/>
    </div>

    <div class="flex-img-box">
        {/* <img src="../assets/images/flex 6.jpg" alt=""> */}
    </div>
    
   </div>

   </section>


    </>
  );
};

export default Home;
