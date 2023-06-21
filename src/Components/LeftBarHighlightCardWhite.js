import React from "react";
import "../Css/Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HighLightMiddleWhite from "./highlight/HighLightMiddleWhite";
import HighLightEndWhite from "./highlight/HighLightEndWhite";
import HighLightAvatarWhite from "./highlight/HighLightAvatarWhite";
const LeftBarHighlightCardWhite = () => {
    return (
        <div className="LeftBarHighlightCard_out_white">
            <HighLightAvatarWhite />
            <HighLightMiddleWhite />
            <HighLightEndWhite />
        </div>


    );
};
export default LeftBarHighlightCardWhite;
