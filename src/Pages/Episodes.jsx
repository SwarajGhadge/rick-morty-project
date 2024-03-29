import React, { useEffect, useState } from "react";
// import Card from "../components/Card/Card";
import InputGroup from "../components/InputGroup";
const Episodes = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { air_date, episode, name } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="mt-4 text-center">
        <h1 className="text-xl md:text-3xl lg:text-3xl">
          Episode name :{" "}
          <span className="text-xl md:text-3xl lg:text-3xl text-violet-800">
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h5 className="text-xl mt-2">
          Air Date:{" "}
          <span className="text-xl ">
            {air_date === "" ? "Unknown" : air_date}
          </span>
        </h5>
      </div>
      <div className="w-[80%] flex flex-col justify-center items-center mt-5 md:w-[90%] md:flex md:flex-row md:justify-cemter md:items-start md:mt-8 lg:w-[90%]">
        <div className="lg:w-[20%]">
          <h4 className="text-xl">Pick Episode</h4>
          <InputGroup name="Episode" changeID={setID} total={51} />
        </div>

        <div className="w-full mt-6 text-center grid grid-cols-3 md:w-full md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 lg:w-[80%]">
          {results.map((d) => {
            const { id, image, name } = d;
            return (
              <div
                key={id}
                className="flex flex-col mb-4 justify-between items-center md:flex md:flex-col"
              >
                <img
                  src={image}
                  alt={name}
                  className="rounded-full size-20 md:size-40 lg:size-48"
                />
                <h4>{name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Episodes;
