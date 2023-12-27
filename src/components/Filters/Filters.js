import React from "react";
import classes from "./Filters.module.css";

function Filters({ filter, onFilterChange }) {
  return (
    <div className={classes.filterContainer}>
      <div
        className={
          filter === "mi" ? classes.filterCardSelected : classes.filterCard
        }
        onClick={() => onFilterChange("mi")}
      >
        <div className={classes.filterHeader}>For Monthly Income</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          fill="currentColor"
          class="bi bi-cash"
          viewBox="0 0 16 16"
        >
          <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
          <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z" />
        </svg>
        <div className={classes.filterDescription}>
          Earn a monthly income based on your investment
        </div>
      </div>
      <div
        className={
          filter === "cg" ? classes.filterCardSelected : classes.filterCard
        }
        onClick={() => onFilterChange("cg")}
      >
        <div className={classes.filterHeader}>For Capital Gain</div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          fill="currentColor"
          class="bi bi-arrow-up-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
        </svg>
        <div className={classes.filterDescription}>
          Earn capital gain on your investment
        </div>
      </div>
    </div>
  );
}

export default Filters;
