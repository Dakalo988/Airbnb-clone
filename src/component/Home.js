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
          src="https://a0.muscache.com/im/pictures/6b008ffe-2029-439c-88de-9ca47255339e.jpg?im_w=720"
          title="Entire cottage in Robertson, South Africa"
          decription="The space
        During the course of 2018, a 22km game fence was completed so that the cottages are now part of the game reserve (hence the reason for no pets allowed). Abundant bird life, some blue wildebeest, black and copper springbok are amongst the wildlife that will be your fellow residents during your stay."
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/6b008ffe-2029-439c-88de-9ca47255339e.jpg?im_w=720"
          title="Entire cottage in Robertson, South Africa"
          decription="The space
        During the course of 2018, a 22km game fence was completed so that the cottages are now part of the game reserve (hence the reason for no pets allowed). Abundant bird life, some blue wildebeest, black and copper springbok are amongst the wildlife that will be your fellow residents during your stay."
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/6b008ffe-2029-439c-88de-9ca47255339e.jpg?im_w=720"
          title="Entire cottage in Robertson, South Africa"
          decription="The space
        During the course of 2018, a 22km game fence was completed so that the cottages are now part of the game reserve (hence the reason for no pets allowed). Abundant bird life, some blue wildebeest, black and copper springbok are amongst the wildlife that will be your fellow residents during your stay."
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/6b008ffe-2029-439c-88de-9ca47255339e.jpg?im_w=720"
          title="Entire cottage in Robertson, South Africa"
          decription="The space
        During the course of 2018, a 22km game fence was completed so that the cottages are now part of the game reserve (hence the reason for no pets allowed). Abundant bird life, some blue wildebeest, black and copper springbok are amongst the wildlife that will be your fellow residents during your stay."
        />
      </div>

      <div className="home_section">
        <Cards
          src="https://a0.muscache.com/im/pictures/6b008ffe-2029-439c-88de-9ca47255339e.jpg?im_w=720"
          title="Entire cottage in Robertson, South Africa"
          decription="The space
        During the course of 2018, a 22km game fence was completed so that the cottages are now part of the game reserve (hence the reason for no pets allowed). Abundant bird life, some blue wildebeest, black and copper springbok are amongst the wildlife that will be your fellow residents during your stay."
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/6b008ffe-2029-439c-88de-9ca47255339e.jpg?im_w=720"
          title="Entire cottage in Robertson, South Africa"
          decription="The space
        During the course of 2018, a 22km game fence was completed so that the cottages are now part of the game reserve (hence the reason for no pets allowed). Abundant bird life, some blue wildebeest, black and copper springbok are amongst the wildlife that will be your fellow residents during your stay."
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/6b008ffe-2029-439c-88de-9ca47255339e.jpg?im_w=720"
          title="Entire cottage in Robertson, South Africa"
          decription="The space
        During the course of 2018, a 22km game fence was completed so that the cottages are now part of the game reserve (hence the reason for no pets allowed). Abundant bird life, some blue wildebeest, black and copper springbok are amongst the wildlife that will be your fellow residents during your stay."
        />
        <Cards
          src="https://a0.muscache.com/im/pictures/6b008ffe-2029-439c-88de-9ca47255339e.jpg?im_w=720"
          title="Entire cottage in Robertson, South Africa"
          decription="The space
        During the course of 2018, a 22km game fence was completed so that the cottages are now part of the game reserve (hence the reason for no pets allowed). Abundant bird life, some blue wildebeest, black and copper springbok are amongst the wildlife that will be your fellow residents during your stay."
        />
      </div>
    </div>
  );
};

export default Home;
