import React from "react";
import Sdata from "./Sdata.js";
import Images from "./Images.jsx"
function Learning1(props) {
    return (
    <>
        <div className="cards">
            <div className="card">
                <Images imgsrc={props.imgsrc}/>
                <div className="card_info">
                    <span className="card_category">{props.category}</span>
                    <h3 className="card_title">{props.sname}</h3>
                    <a href={props.link} target="_blank">
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
    </>
    );
    }

export default Learning1;
