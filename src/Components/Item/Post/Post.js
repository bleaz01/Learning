import React from "react";
import "./PostStyleSheet.scss";
import jeason from "../../../assets/jeason.jpg";
const Post = () => {
  return (
    <div className="post">
      <div className="post-container">
        <div className="post-header">
          <div className="post-user">
            <img className="img-profile" src={jeason} />
            <span>oury</span>
          </div>
          <div className="post-opt">
            <i class="fas fa-align-justify"></i>
          </div>
        </div>
        <div className="post-body">
          <img className="img-post" src={jeason} />
        </div>
        <div className="post-footer">
          <span>liker</span>
          <div>
            <span style={{ paddingRight: "10px" }}>commenter</span>
            <span>partage</span>
          </div>
        </div>
      </div>

      <div className="post-container">
        <div className="post-header">
          <div className="post-user">
            <img className="img-profile" src={jeason} />
            <span>oury</span>
          </div>
          <div className="post-opt">
            <i class="fas fa-align-justify"></i>
          </div>
        </div>
        <div className="post-body">
          <img className="img-post" src={jeason} />
        </div>
        <div className="post-footer">
          <span>liker</span>
          <div>
            <span style={{ paddingRight: "10px" }}>commenter</span>
            <span>partage</span>
          </div>
        </div>
      </div>

      <div className="post-container">
        <div className="post-header">
          <div className="post-user">
            <img className="img-profile" src={jeason} />
            <span>oury</span>
          </div>
          <div className="post-opt">
            <i class="fas fa-align-justify"></i>
          </div>
        </div>
        <div className="post-body">
          <img className="img-post" src={jeason} />
        </div>
        <div className="post-footer">
          <span>liker</span>
          <div>
            <span style={{ paddingRight: "10px" }}>commenter</span>
            <span>partage</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
