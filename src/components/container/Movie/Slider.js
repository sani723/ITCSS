import React from 'react';
//import ReactDOM from "react-dom";

class Slider extends React.Component {

    largePosterHandler = (event) => {
        const body = document.querySelector("body");
        const imgPath = event.target.getAttribute("src");

        var img = document.createElement("img");
        img.src = imgPath;
        img.alt = "Large poster";

        var btnClose = document.createElement("a");
        btnClose.classList.add("close");
        var buttonText = document.createTextNode("x"); 
        btnClose.appendChild(buttonText); 
        btnClose.addEventListener("click", (event) => {
            event.preventDefault();
            body.removeChild(wrapper);
        });
        
        var wrapper = document.createElement("div");
        wrapper.classList.add("zoom");
        wrapper.appendChild(btnClose);
        wrapper.appendChild(img);

        body.appendChild(wrapper);


    }

    render() {
        const {posters} = this.props;
        return (
            <div className="posters">
                {posters &&
                    posters.map((imagePath, index) => (
                        <div 
                            key={index} 
                            className="posters__item"
                        >
                            <img 
                                src={imagePath} 
                                alt="Movie poster"
                                onClick={this.largePosterHandler} 
                            />
                        </div>
                    )) 
                }
            </div>
        );
    }
}

export default Slider;