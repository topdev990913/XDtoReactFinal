import React from "react";
import "../Css/Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HighLightAvatar from "./highlight/HighLightAvatar";
import HighLightMiddleWhite from "./highlight/HighLightMiddleWhite";
import HighLightEndWhite from "./highlight/HighLightEndWhite";
const LeftBarHighlightCardWhite = () => {
    return (
        <div className="LeftBarHighlightCard_out_white">
            <HighLightAvatar />
            <HighLightMiddleWhite />
            <HighLightEndWhite />
        </div>


    );
};
export default LeftBarHighlightCardWhite;
