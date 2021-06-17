import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Data.css";

function Data(props) {
  const [Data, setData] = useState([]);
  // const url = `https://api.codingninjas.com/api/v3/events/`;
  const photo =
    "https://e7.pngegg.com/pngimages/931/209/png-clipart-computer-icons-symbol-avatar-logo-person-with-helmut-miscellaneous-black.png";
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        `https://api.codingninjas.com/api/v3/events/`,
        {
          params: {
            event_category: props.cat,
            event_sub_category: props.subcat,
            tag_list: props.tag.toString(),
            offset: 2,
          },
        }
      );
     
      setData(request.data.data.events);
      return request;
    };
    fetchData();
  }, [props]);
  const showperice = (price) => {
    if (price === 0) {
      return <span>Free</span>;
    } else {
      return <span>{price}</span>;
    }
  };
if(Data.length===0){
 return <h2>No Events Found</h2>
}else{
  return (
    <div className="ex_box">
      <div className="ex_box2">
      
        {Data.map((val, i) => {
          return (
            <>
              <div key={i}  className="event_card">
                <img key={i} src={val.cover_picture}  alt="" />
                <h3 style={{height: "7vh"}}>{val.name}</h3>

                <div  className="timming">
                  <div>
                    <span>Starts on</span>
                    <span>{new Date(1000 * val.event_start_time).toLocaleString()}
                    </span>
                  </div>
                  <div >
                    <span>Entry Fee</span>
                    <span> {showperice(val.fees)}</span>
                  </div>
                  <div>
                    <span>Venue</span>
                    <span>{val.venue}</span>
                  </div>
                
                </div>
                <div  className="desc" >{val.short_desc}</div>
                
                <div  className="img">
                  <div className="user">
                  {val.registered_users.top_users.map(function (val, i) {
                    if (val.image_url != null) {
                      return <img key={i} src={val.image_url} alt="profile" />;
                    } else {
                      return <img key={i} src={photo} alt="profile" />;
                    }
                  })}
                  </div>
                <span >User Registered <strong>{val.seats_filled}</strong></span>
                  <button style={{float:"right"}}>Register</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
      }
}

export default Data;
