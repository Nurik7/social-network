import s from "./FindUsers.module.css";
import avatarImage from "../../Images/avatar-4.png";
import React from "react";
import { NavLink } from "react-router-dom";

const FindUsers = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  if (pagesCount > 10) {
    if (props.currentPage > 5) {
      pages.push(1, "...");
      for (let i = props.currentPage - 4; i <= props.currentPage + 5; i++) {
        pages.push(i);
        if (i === props.currentPage + 5) pages.push("...", pagesCount);
        if (i === pagesCount) break;
      }
    } else {
      for (let i = 1; i <= 10; i++) {
        pages.push(i);
        if (i === 10) pages.push("...", pagesCount);
        if (i === pagesCount) break;
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }

  return (
    <div>
      <div className={s.paginationPageContainer}>
        {pages.map((p, index) => (
          <button key={index}
            disabled={p === "..."}
            className={`${s.paginationPage} ${
              props.currentPage === p && s.selectedPage
            }`}
            onClick={() => {
              props.onSetPage(p);
            }}
          >
            {p}
          </button>
        ))}
      </div>
      {props.users.map((u) => (
        <div className={s.container} key={u.id}>
          <div className={s.findUsersLeft}>
            <NavLink to={"/profile/" + u.id}>
              <img alt='some text'
                className={s.findUsersLogo}
                src={u.photos.small != null ? u.photos.small : avatarImage}
              />
            </NavLink>{" "}
            {u.followed ? (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                UNFOLLOW
              </button>
            ) : (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                FOLLOW
              </button>
            )}
          </div>
          <div className={s.findUsersRight}>
            <div className={s.findUsersInnerLeft}>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>
            <div className={s.findUsersInnerRight}>
              <div>u.location.country</div>
              <div>u.location.city</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FindUsers;
