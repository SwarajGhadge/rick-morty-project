import React from "react";

const InputGroup = ({ name, changeID, total }) => {
  return (
    <div className="">
      <select
        onChange={(e) => changeID(e.target.value)}
        className="form-select lg:w-[200px] mt-2 border-2 border-black border-solid "
        id={name}
      >
        <option value="1">Choose...</option>
        {[...Array(total).keys()].map((x, index) => {
          return (
            <option
              value={x + 1}
              key={index}
              className="size-15 overflow-scroll "
            >
              {name} - {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
