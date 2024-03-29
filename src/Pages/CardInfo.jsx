import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardInfo = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="text-center h-[75vh] w-full flex flex-col justify-center items-center">
      <h1 className="text-center mb-4 text-2xl font-bold md:text-3xl lg:text-3xl">
        {name}
      </h1>
      <img className="" src={image} alt="" />
      {(() => {
        if (status === "Dead") {
          return (
            <div className=" ">
              <span className="text-xl font-semibold ">Status</span> : {status}
            </div>
          );
        } else if (status === "Alive") {
          return (
            <div className="">
              <span className="text-xl font-semibold ">Status</span> : {status}
            </div>
          );
        } else {
          return (
            <div className="">
              <span className="text-xl font-semibold ">Status</span> : {status}
            </div>
          );
        }
      })()}
      <div className="content">
        <div className="">
          <span className="text-xl font-semibold">Gender : </span>
          {gender}
        </div>
        <div className="">
          <span className="text-xl font-semibold">Location: </span>
          {location?.name}
        </div>
        <div className="">
          <span className="text-xl font-semibold">Origin: </span>
          {origin?.name}
        </div>
        <div className="">
          <span className="text-xl font-semibold">Species: </span>
          {species}
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
