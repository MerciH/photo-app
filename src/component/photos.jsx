import React, {useState} from "react";


function Images(){
    const [currentImage, setChangeCount] = useState(1);
    function changePhoto(){
            var current = currentImage;
            setChangeCount( current === 9 ? 1 : (current + 1));
    }
    var current = `/photos/${'' + currentImage}.JPG`;
    return(

        <div className="container">
            <h1>Gallery</h1>
            <div className="photos">
                <img class="img-responsive img-portfolio img-hover" src ={current}  alt="art 1"/>
            </div>
            <button
                    onClick={changePhoto}
                    title="Next"
                    color="brown"> Next
                </button>
        </div>
    );

}

export default Images;
