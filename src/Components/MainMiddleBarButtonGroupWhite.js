import React from "react";
import '../Css/Components.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Button } from "reactstrap";
const MainMiddleBarButtonGroupWhite = ({ checkedForYou, setCheckedForYou }) => {
    console.log("Button_group", checkedForYou)
    return (
        <div className={checkedForYou === 2? "MainMiddleBarButtonGroup_out_none" : "MainMiddleBarButtonGroup_out"}>
            <Button type="submit" color="info" className="MainMiddleBarButton_1_white" outline>Subscribe</Button>
            <Button type="submit" color="info" className="MainMiddleBarButton_2_white" outline>Follow</Button>
        </div>
    );
};
export default MainMiddleBarButtonGroupWhite;
