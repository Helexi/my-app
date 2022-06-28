import React from "react";
import './Massege.css'

export const Massege = ({massege}) => {
  return (
    <div className="massege massege-active">
      {massege.massege}
    </div>
  );
};
