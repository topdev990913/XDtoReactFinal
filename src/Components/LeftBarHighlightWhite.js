import React from "react";
import "../Css/Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import LeftBarHighlightCardWhite from "./LeftBarHighlightCardWhite";
const LeftBarHighlightWhite = () => {
    return (
        <div className="LeftBarHighlight_out_white">
            <div className="LeftBarHighlight_header_text_white">
                Highlights
            </div>
            <LeftBarHighlightCardWhite />
            <LeftBarHighlightCardWhite />
            <LeftBarHighlightCardWhite />
        </div>


    );
};
export default LeftBarHighlightWhite;
