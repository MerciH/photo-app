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

function Notes(){
    const [currentImage, setChangeCount] = useState(1);
    let picture;
    function changePhoto(){
        return (
            currentImage === 9 ? 1 : (currentImage + 1),
            setChangeCount( currentImage)
        );
    }
    return(
        
        <div className="note">
            <h1>Gallery</h1>
            <div className="photos">
                {  picture = "image" + {currentImage}};
                <img class="img-responsive img-portfolio img-hover" src={picture} alt="art 1"/>
            </div>
            <button
                    onClick={changePhoto}
                    title="Next"
                    color="brown"> Next
                </button>
        </div>
    );

}

export default Notes;
