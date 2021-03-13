import React from "react";

import { useParams } from "react-router-dom";

function Course() {
  let { cid } = useParams();
  return (
    <div>
      <h1> Course id = {cid}</h1>
    </div>
  );
}

export default Course;
