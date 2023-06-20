import React from "react";
import "../Css/Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MatchDetailsBoxWhite from "./MatchDetailsBoxWhite";
import AnalysisBoxWhite from "./AnalysisBoxWhite";
const MainMiddleBarBodyWhite = ({checkedForYou, setCheckedForYou}) => {
    return (
        <div className="d-flex flex-wrap">
            <div className="MatchDetails_out">
                <div className="MatchDetails_header_text_white">
                    Match Details
                </div>
                <MatchDetailsBoxWhite checkedForYou={checkedForYou} setCheckedForYou={setCheckedForYou} />
            </div>
            <div className="Analysis_out">
                <div className="MatchDetails_header_text_white">
                    Analysis
                </div>
                <AnalysisBoxWhite checkedForYou={checkedForYou} setCheckedForYou={setCheckedForYou}/>
            </div>
        </div>
    );
};
export default MainMiddleBarBodyWhite;
