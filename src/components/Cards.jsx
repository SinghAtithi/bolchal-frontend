import React, { useEffect, useState } from "react";
import axios from "axios";

function Cards(props) {
    const [imageUrl, setImageUrl] = useState(
        "https://wallpaperaccess.com/full/352320.jpg"
    );

    // useEffect(() => {
    //     axios
    //         .get(
    //             "https://api.unsplash.com/photos/random?query=nature&count=10&client_id=bIqZlu3Zb7L8swVJcM5NHXdaPPTcUtyMuUStBmF6e34"
    //         )
    //         .then((res) => {
    //             console.log(res.data[0].urls.regular);
    //             const imageURL = res.data[0].urls.regular;
    //             setImageUrl(imageURL);
    //         });
    // }, []);

    return (
        <div className="card w-1/5 mx-12 my-12 flex-wrap bg-base-100 shadow-xl image-full ">
            <figure>
                <img src={imageUrl} alt="Shoes" />
            </figure>
            <div className="card-body m-auto">
                <p>{props.content}</p>
                <div className="card-actions justify-end flex ml-auto">
                    <p>{`- ${props.author}`}</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;
