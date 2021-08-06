import { PROPERTY_TYPES } from "@babel/types";
import React from "react";

export default function Phonetics(props) {
  return (
    <div>
      <a href={props.phonetic.audio} target="_blank">
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
