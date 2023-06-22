import React from "react";
import '../Css/Components.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const MainMiddleBarMiddle = ({ checkedForYou, setCheckedForYou }) => {
    return (
        <div className={checkedForYou===2?"MainMiddleBarMiddle_out_none":"MainMiddleBarMiddle_out"}>
            <div>
                <div className="MainMiddleBarMiddle_1_1">
                    Success Rate
                </div>
                <div className="MainMiddleBarMiddle_1_2">
                    %67.6
                </div>
            </div>
            <div>
            <div className="MainMiddleBarMiddle_1_1">
                    Score Points
                </div>
                <div className="MainMiddleBarMiddle_2_2">
                    256
                </div>
            </div>
        </div>
    );
};
export default MainMiddleBarMiddle;
