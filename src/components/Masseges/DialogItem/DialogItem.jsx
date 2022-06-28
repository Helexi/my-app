import React from "react";
import { Link } from "react-router-dom";
import './DialogItem.css'

export const DialogItem = ({dialog}) => {
  const linkPath = '/massege/' + dialog.id;

  return (
    <li className="dialog dialog-active">
      <Link to={linkPath}>{dialog.name}</Link>
    </li>
  );
};
