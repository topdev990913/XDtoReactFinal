import React, { useState } from "react";
import "../Css/Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HighLightEditMainBar from "./highlight/HighLightEditMainBar";
import {
    ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import search_Icon from '../assets/search.png';
import $ from 'jquery';
const MainBarEdit = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);
    const toggle1 = () => setDropdownOpen1(!dropdownOpen1);
    const toggle2 = () => setDropdownOpen2(!dropdownOpen2);
    const [checkedInput, setCheckedInput] = useState(true);
    console.log("checkedInput", checkedInput)
    return (
        <div className="MainBar_Edit_out">
            <div className="MainBarEdit_Header">
                Editor
            </div>
            <div className="d-flex MainBar_Edit_Search">
                <input type="text" alt="search" className="searchBar_Style" placeholder="" onClick={() => {setCheckedInput(false)}}/>
                <img src={search_Icon} alt="search_Icon" className={$(".searchBar_Style").is(":focus")?"search_Icon_none":"search_Icon"} />
                <div className="d-flex">
                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle className="MainTopHeader_button" caret>
                            Level
                        </DropdownToggle>
                        <DropdownMenu className="Dropdown_style">
                            <DropdownItem className="Dropdown_item_color">All</DropdownItem>
                            <DropdownItem className="Dropdown_item_color">Grandmaster</DropdownItem>
                            <DropdownItem className="Dropdown_item_color">Expert</DropdownItem>
                            <DropdownItem className="Dropdown_item_color">Journeyman</DropdownItem>
                            <DropdownItem className="Dropdown_item_color">Apprentice</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                    <ButtonDropdown isOpen={dropdownOpen1} toggle={toggle1} style={{ marginLeft: "10px" }}>
                        <DropdownToggle className="MainTopHeader_button" caret>
                            Success Rate
                        </DropdownToggle>
                        <DropdownMenu className="Dropdown_style">
                            <DropdownItem className="Dropdown_item_color">All</DropdownItem>
                            <DropdownItem className="Dropdown_item_color1">%75 - %100</DropdownItem>
                            <DropdownItem className="Dropdown_item_color2">%50 - %75</DropdownItem>
                            <DropdownItem className="Dropdown_item_color3">%25 - %50</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                    <ButtonDropdown isOpen={dropdownOpen2} toggle={toggle2} style={{ marginLeft: "10px" }}>
                        <DropdownToggle className="MainTopHeader_button" caret>
                            Category
                        </DropdownToggle>
                        <DropdownMenu className="Dropdown_style">
                            <DropdownItem className="Dropdown_item_color">All</DropdownItem>
                            <DropdownItem className="Dropdown_item_color">Football</DropdownItem>
                            <DropdownItem className="Dropdown_item_color">Basketball</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </div>
            </div>
            <div className="MainBar_Edit_Highlight_Card_out">
                <HighLightEditMainBar />
                <HighLightEditMainBar />
                <HighLightEditMainBar />
                <HighLightEditMainBar />
                <HighLightEditMainBar />
            </div>
        </div>


    );
};
export default MainBarEdit;
