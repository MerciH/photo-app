/* eslint-disable no-template-curly-in-string */
import React, {useState} from "react";
import image1 from"./photos/1.JPG";
import image2 from"./photos/2.JPG";
import image3 from"./photos/3.JPG";
import image4 from"./photos/4.JPG";
import image5 from"./photos/5.JPG";
import image6 from"./photos/6.JPG";
import image7 from"./photos/7.JPG";
import image8 from"./photos/8.JPG";
import image9 from"./photos/9.JPG";

var currentImage = 1;
var  image_ = 'image1';

function afterClick(){
    return (
        currentImage === 9 ? 1 : (currentImage + 1),
        image_ = "image" + { currentImage},
        console.log(image_)
    );
}

function Notes(){
    return(
        
        <div className="note">
            <h1>Gallery</h1>
            <div className="photos">
                <img class="img-responsive img-portfolio img-hover" src={image1} alt="art 1"/>
            </div>
            <button
                    onClick={afterClick}
                    title="Next"
                    color="brown"> Next
                </button>
        </div>
    );

}

export default Notes;
