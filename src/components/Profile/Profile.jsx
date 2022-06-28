import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPosts } from "./MyPosts/MyPosts";
import './Profile.css';

export const Profile = () => {
  return (
    <div className='profile'>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};