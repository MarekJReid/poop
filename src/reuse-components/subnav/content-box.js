import React from "react";
import { Link, Route, Switch, useParams } from "react-router-dom";
import "../subnav/sub-nav-side.scss";

function ContentBox() {
  let { item } = useParams();

  return (
    <div>
      <h3>{item}+hi</h3>
    </div>
  );
}

export default ContentBox;
