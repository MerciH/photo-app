import React from "react";

function Heading(){
    return(
        <div >
            <nav className="heading navbar navbar-default">
                <div className="logo navbar-header">
                    <a className="navbar-brand" href="./index.html">ReLi</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><a href="./index.html">Home</a></li>
                    <li><a href="./index.html"> Potraits</a></li>
                    <li><a href="./">creative</a></li>
                    <li><a href="./">Normal</a></li>
                    <li><a href="./">Spring</a></li>
                    <li><a href="./">Summer</a></li>
                    <li><a href="./">Autumn</a></li>
                    <li><a href="./">Winter</a></li>
                </ul>
            </nav>
        </div>
    );

}

export default Heading;