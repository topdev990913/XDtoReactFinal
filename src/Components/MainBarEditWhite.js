import React, { useState } from "react";
import "../Css/Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
    ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import HighLightEditMainBarWhite from "./highlight/HighLightEditMainBarWhite";
import search_Icon from '../assets/search_white.png';
import $ from 'jquery';
const MainBarEditWhite = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);
    const toggle1 = () => setDropdownOpen1(!dropdownOpen1);
    const toggle2 = () => setDropdownOpen2(!dropdownOpen2);
    const [checkedInput, setCheckedInput] = useState(true);
    console.log("checkedInput", checkedInput)
    return (
        <div className="MainBar_Edit_out_white">
            <div className="MainBarEdit_Header_white">
                    Editor
            </div>
            <div className="d-flex MainBar_Edit_Search">
                <input type="text" alt="search" className="searchBar_Style_white" placeholder="" onClick={() => {setCheckedInput(false)}} />
                <img src={search_Icon} alt="search_Icon" className={$(".searchBar_Style_white").is(":focus")?"search_Icon_none":"search_Icon"} />
                <div className="d-flex">
                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle className="MainTopHeader_button_white" caret>
                            Level
                        </DropdownToggle>
                        <DropdownMenu className="Dropdown_style_white">
                            <DropdownItem className="Dropdown_item_color_white">All</DropdownItem>
                            <DropdownItem className="Dropdown_item_color_white">Grandmaster</DropdownItem>
                            <DropdownItem className="Dropdown_item_color_white">Expert</DropdownItem>
                            <DropdownItem className="Dropdown_item_color_white">Journeyman</DropdownItem>
                            <DropdownItem className="Dropdown_item_color_white">Apprentice</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                    <ButtonDropdown isOpen={dropdownOpen1} toggle={toggle1} style={{ marginLeft: "10px" }}>
                        <DropdownToggle className="MainTopHeader_button_white" caret>
                            Success Rate
                        </DropdownToggle>
                        <DropdownMenu className="Dropdown_style_white">
                            <DropdownItem className="Dropdown_item_color_white">All</DropdownItem>
                            <DropdownItem className="Dropdown_item_color_white">%75 - %100</DropdownItem>
                            <DropdownItem className="Dropdown_item_color_white">%50 - %75</DropdownItem>
                            <DropdownItem className="Dropdown_item_color_white">%25 - %50</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                    <ButtonDropdown isOpen={dropdownOpen2} toggle={toggle2} style={{ marginLeft: "10px" }}>
                        <DropdownToggle className="MainTopHeader_button_white" caret>
                            Category
                        </DropdownToggle>
                        <DropdownMenu className="Dropdown_style_white">
                            <DropdownItem className="Dropdown_item_color_white">All</DropdownItem>
                            <DropdownItem className="Dropdown_item_color_white">Football</DropdownItem>
                            <DropdownItem className="Dropdown_item_color_white">Basketball</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </div>
            </div>
            <div className="MainBar_Edit_Highlight_Card_out">
                <HighLightEditMainBarWhite />
                <HighLightEditMainBarWhite />
                <HighLightEditMainBarWhite />
                <HighLightEditMainBarWhite />
                <HighLightEditMainBarWhite />
            </div>
        </div>


    );
};
export default MainBarEditWhite;
