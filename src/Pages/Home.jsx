import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${query}`
        );
        setCharacters(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="flex flex-col items-center w-full h-screen mt-7">
      <div className="search w-[80%] flex items-center justify-center">
        <input
          type="text"
          placeholder={"Search Character"}
          // className={"input"}
          className="w-96 h-8 border-2 border-gray-700 rounded-md text-center"
          onChange={(event) => setQuery(event.target.value)}
          value={query}
        />
      </div>
      <div className="results grid grid-cols-2 gap-6 mt-10 lg:grid lg:grid-cols-5 lg:gap-6 md:grid md:grid-cols-3 md:gap-6">
        {characters.map((character) => {
          const { id, name, image } = character;
          return (
            <div key={id} className="mb-5">
              <Link
                to={`${id}`}
                style={{ textDecoration: "none" }}
                className="flex flex-col justify-center items-center"
              >
                <img src={image} alt={name} className=" rounded-full size-48" />
                <h4 className="mt-2 font-bold">{name}</h4>
              </Link>
              {/* <Outlet></Outlet> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
