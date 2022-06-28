import React from "react";
import './Masseges.css'
import { DialogItem } from "./DialogItem/DialogItem";
import { Massege } from "./Massege/Massege";

export const Masseges = (props) => {
  return (
    <div className="All-masseges">
      <div className="dialogs-items">
    <ul>
      { props.dialogs.map(dialog => {
        return <DialogItem dialog={dialog} key={dialog.id}/>
      }) }
    </ul>
      </div>
      <div className="masseges-items">
       { props.masseges.map(massege => {
        return <Massege massege={massege} key={massege.id}/>
       })}
      </div>
    </div>
  )
};