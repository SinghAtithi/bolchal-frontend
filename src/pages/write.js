import React, { useState } from "react";
const axios = require("axios");

function write() {
      const [text, setText] = useState("");
      const [author, setAuthor] = useState("");

      const submitText = () => {
            console.log(text);
            axios.post("http://localhost:5005/api/write", {
                  text: text,
                  
            }).then((result) => {
                  setText("");
                  alert("The Post has been sent to get Verified!")
            }).catch((err) => {
                  console.log(err);
            });
      };


      return (
            <>
                  <div className="flex justify-center pt-24">
                        <textarea
                              className="textarea bg-inherit textarea-success textarea-lg min-w-max w-1/3 align-middle h-80"
                              placeholder="Write your thoughts here..."
                              value={text}
                              onChange={(e) => { setText(e.target.value); console.log(text) }}
                        ></textarea>
                  </div>
                  <div className="flex justify-center">

                        <input type="text" placeholder="Author Name" className="input input-bordered input-success bg-inherit mt-8 w-full max-w-xs" onChange={(e) => setAuthor(e.target.value)} value={author} />
                  </div>
                  <div className="flex justify-center scroll-ml-96">
                        <button className="btn mt-8  btn-success" onClick={submitText}>Submit</button>
                  </div>
            </>
      );
}

export default write;
