// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import Cards from "./Cards";
import "./Home.css";
// import { listListing } from "../actions/listingActions";

const Home = () => {
  // const dispatch = useDispatch();
  // const listingList = useSelector((state) => state.listingList);
  // const { loading, error, listings } = listingList;

  // useEffect(() => {
  //   dispatch(listListing());
  // }, [dispatch]);

  return (
    <div className="home">
      <Banner />
      {/* //     {loading ? (
  //       <h2>Loading...</h2>
  //     ) : error ? (
  //       <h3>{error}</h3>
  //     ) : (
  //       <div className="home_section">
  //         {listings.map((listing) => (
  //           <Cards
  //             src={listing.img}
  //             title={listing.title}
  //             decription={listing.decription}
  //             price={listing.price}
  //           />
  //         ))}
  //       </div>
  //     )} */}
      <div className="home_section">
        <Cards
          src="https://a0.muscache.com/im/pictures/miso/Hosting-13381106/original/52cb1b81-a134-4c71-9ce3-7903f13bc5a9.jpeg?im_w=720"
          title="Entire cottage in Robertson, South Africa"
          decription="The space
        During the course of 2018, a 22km game fence was completed so that the cottages are now part of the game reserve (hence the reason for no pets allowed). Abundant bird life, some blue wildebeest, black and copper springbok are amongst the wildlife that will be your fellow residents during your stay."
          price="R6000/5days"
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/miso/Hosting-13381106/original/a346ce80-661a-483a-9126-6e1778712292.jpeg?im_w=720"
          title="Entire cottage in Robertson, South Africa"
          decription="The space
        During the course of 2018, a 22km game fence was completed so that the cottages are now part of the game reserve (hence the reason for no pets allowed). Abundant bird life, some blue wildebeest, black and copper springbok are amongst the wildlife that will be your fellow residents during your stay."
          price="R2300/1night"
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/5f6401b8-55a7-4611-8e17-b2c9137f19e4.jpg?im_w=1200"
          title="Entire cottage in Robertson, South Africa"
          decription="The space
        During the course of 2018, a 22km game fence was completed so that the cottages are now part of the game reserve (hence the reason for no pets allowed). Abundant bird life, some blue wildebeest, black and copper springbok are amongst the wildlife that will be your fellow residents during your stay."
          price="R2000/1day"
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/miso/Hosting-48679728/original/8e1b567b-1874-48a4-ba5b-301289ab4e00.png?im_w=720"
          title="Entire cottage in Robertson, South Africa"
          decription="The space
        During the course of 2018, a 22km game fence was completed so that the cottages are now part of the game reserve (hence the reason for no pets allowed). Abundant bird life, some blue wildebeest, black and copper springbok are amongst the wildlife that will be your fellow residents during your stay."
          price="R500/12hours"
        />
      </div>

      <div className="home_section">
        <Cards
          src="https://a0.muscache.com/im/pictures/miso/Hosting-678527031984365827/original/83495630-17f4-4374-ad47-d653eb5494b0.jpeg?im_w=720"
          title="Entire cottage in Robertson, South Africa"
          decription="The space
        During the course of 2018, a 22km game fence was completed so that the cottages are now part of the game reserve (hence the reason for no pets allowed). Abundant bird life, some blue wildebeest, black and copper springbok are amongst the wildlife that will be your fellow residents during your stay."
          price="R3400/2nights"
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/8ed47c5c-e6cd-46a5-98ad-530a6e3bc404.jpg?im_w=720"
          title="Sasi Bush Lodge Jujube Two-sleeper Luxury Tent"
          decription="The space
        During the course of 2018, a 22km game fence was completed so that the cottages are now part of the game reserve (hence the reason for no pets allowed). Abundant bird life, some blue wildebeest, black and copper springbok are amongst the wildlife that will be your fellow residents during your stay."
          price="R4500/1night"
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/miso/Hosting-917291368541108558/original/2f31daf6-2881-4b39-8b93-c9113bd2e8ad.jpeg?im_w=720"
          title="Entire cottage in Robertson, South Africa"
          decription="The space
        During the course of 2018, a 22km game fence was completed so that the cottages are now part of the game reserve (hence the reason for no pets allowed). Abundant bird life, some blue wildebeest, black and copper springbok are amongst the wildlife that will be your fellow residents during your stay."
          price="R7500/4days"
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/19554712-f253-4ec0-9405-e8653d778bac.jpg?im_w=720"
          title="Entire cottage in Robertson, South Africa"
          decription="The space
        During the course of 2018, a 22km game fence was completed so that the cottages are now part of the game reserve (hence the reason for no pets allowed). Abundant bird life, some blue wildebeest, black and copper springbok are amongst the wildlife that will be your fellow residents during your stay."
          price="R4200/2days"
        />
      </div>
    </div>
  );
};

export default Home;
