import React from "react";
import CategoryCover from "./CategoryCover";

function Welcome(props) {
  return (
    <div className="welcome-page">
      <div>
        Bienvenue sur <span className="welcome-hash">#</span>AlloReact !
      </div>
      <div className="category-cover-list">
        <CategoryCover
          category={"popular"}
          categoryTitle="Popular"
          onClick={() => props.onSelectCategory("Popular")}
        />
        <CategoryCover
          category={"upcoming"}
          categoryTitle="Upcoming"
          onClick={() => props.onSelectCategory("Upcoming")}
        />
        <CategoryCover
          category={"top_rated"}
          categoryTitle="Top Rated"
          onClick={() => props.onSelectCategory("Top")}
        />
      </div>
    </div>
  );
}

export default Welcome;
