import React, { useEffect, useState, createContext } from "react";
import MainMenu from "./MainMenu";
import "./Tag.css";
const pass = createContext();
function Tag() {
  const [Tag, setTag] = useState([]);
  const [items, setitems] = useState([]);
  

  
  const getData = async () => {
    const url = `https://api.codingninjas.com/api/v3/event_tags`;
    const req = await fetch(url);
    const event = await req.json();
    setTag(event.data.tags);
    // return event;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="tag">
      <div className="btn">
        {Tag.map(function (value, i) {
          return (
            <button
              className=""
              key={i}
              onClick={(e) => {
                if (e.target.className === "orange") {
                  e.target.className = "";
                } else {
                  e.target.className = "orange";
                }

                setitems((olditems) => {
                  return [...olditems, value];
                });
              }}
              value={value}
            >
              {value}
            </button>
          );
        })}
      </div>
      <pass.Provider value={items}>
        <MainMenu />
      </pass.Provider>
    </div>
  );
}
export default Tag;
export { pass };
