import React from "react";
import "./PostStyleSheet.scss";
import jeason from "../../../assets/jeason.jpg";
const Post = ({post}) => {

  console.log(post,"kkk")
  return (
      <div className="post-container">
        <div className="post-header">
          <div className="post-user">
            <img className="img-profile" src={jeason} />
            <span>oury</span>
            <span>{post.title}</span>
          </div>
          <div className="post-opt">
            <i class="fas fa-align-justify"></i>
          </div>
        </div>
         {post.body && <div className="post-body">
          <img className="img-post" src={jeason} />
        </div>}
        <div className="post-comment">
          {post.comment}
        </div>
        <div className="post-footer">
          <span>liker</span>
          <div>
            <span style={{ paddingRight: "10px" }}>commenter</span>
            <span>partage</span>
          </div>
          <span>{post.date}</span>
        </div>
      </div>
  );
};
export default Post;
