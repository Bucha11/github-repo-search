import React, { useState } from "react";
import { fetchData } from "../../redux/reducer";
import { useDispatch } from "react-redux";
import s from "./SearchBar.module.css";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [orgName, setOrgName] = useState("");

  return (
    <div className={s.searchBar}>
      <input
        type="text"
        placeholder="Input organization name"
        onChange={(e) => {
          setOrgName(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          dispatch(fetchData(orgName));
        }}
      >
        Enter
      </button>
    </div>
  );
};
