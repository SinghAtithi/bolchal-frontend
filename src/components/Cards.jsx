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
    //             console.log(res.data[0].urls);
    //             const imageURL = res.data[0].urls.small;
    //             setImageUrl(imageURL);
    //         });
    // }, []);

    return (
        <div className="card  scale-75 max-w-md my-12 text-lg  bg-base-100 opacity-70 shadow-xl mx-8 image-full ">
            <figure>
                <img
                    src={imageUrl}
                    alt="Shoes"
                    className="image-full scale-125"
                />
            </figure>
            <div className="card-body m-auto">
                <p className="whitespace-normal break-words">
                    <pre>{props.content}</pre>
                </p>
                <div className="card-actions justify-end flex ml-auto">
                    <p className="">{`- ${props.author}`}</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;
