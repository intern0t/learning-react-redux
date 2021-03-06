import React from "react";

const Bookmarks = ({ bookmarked, viewTypeIsNews, onViewChange }) => {
    return (
        <div className="bookmark-section">
            You have <span className="count">{bookmarked.length}</span>{" "}
            bookmarks. Press the <span className="icon-bookmark-outline-add" />{" "}
            button to add to your bookmarked list.{" "}
            <span className="view-bookmarks" onClick={onViewChange}>
                {`View ${viewTypeIsNews ? "Bookmarks" : "News"}`}
            </span>
        </div>
    );
};

export default Bookmarks;
