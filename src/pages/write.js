import React, { useState } from "react";
const axios = require("axios");

function write() {

      const submitText = () => {
            console.log(text);
            axios.post("http://localhost:5005/api/write", {
                  text: text,
            });
      };


      const [text, setText] = useState("");
      return (
            <>
                  <div className="flex justify-center pt-24">
                        <textarea
                              className="textarea bg-inherit textarea-success textarea-lg min-w-max w-1/3 align-middle h-80"
                              placeholder="Write your thoughts here..."
                              onChange={(e) => { setText(e.target.value) }}
                        ></textarea>
                  </div>
                  <div className="flex justify-center scroll-ml-96">
                        <button className="btn mt-12  btn-success" onClick={submitText}>Submit</button>
                  </div>
            </>
      );
}

export default write;
