import React, { useEffect, useState } from "react";
import Cards from "@/components/Cards";
import axios from "axios";

function verifyposts() {
    const [posts, setPosts] = useState([]);

    const [update, setUpdate] = useState(false);

    const removePost = (id) => {
        axios
            .post("http://localhost:5005/api/removePost", {
                id: id,
                userName: "admin",
            })
            .then((res) => {
                console.log(res);
            });
        // remove the post from posts where id = id
        setPosts(posts.filter((post) => post._id !== id));
    };

    const verifyPost = (id) => {
        console.log(id);
        axios
            .post("http://localhost:5005/api/verifyPost", { id: id })
            .then((res) => {
                console.log(res);
            });
        setPosts(posts.filter((post) => post._id !== id));
    };

    const fetchPosts = () => {
        axios
            .get("http://localhost:5005/api/getUnverifiedPosts")
            .then((response) => {
                console.log(response.data);
                setPosts(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchPosts();
    }, [update]);

    return (
        <div className="flex flex-row flex-wrap justify-center">
            {posts.map((post) => {
                return (
                    <div className="mx-auto">
                        <Cards content={post.content} author={post.userName} />
                        <div className="mx-auto -mt-8 mb-8 flex">
                            <button
                                className="btn btn-error w-28 mx-16"
                                onClick={(e) => {
                                    e.preventDefault();
                                    removePost(post._id);
                                }}
                            >
                                Remove
                            </button>
                            <button
                                className="btn btn-success mx-16 w-28"
                                onClick={(e) => {
                                    e.preventDefault();
                                    verifyPost(post._id);
                                }}
                            >
                                Verify
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default verifyposts;
