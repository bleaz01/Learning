import React from "react";
import "./PostStyleSheet.scss";
import jeason from "../../../assets/jeason.jpg";
import { faCommentMedical } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@material-ui/core";
const Post = ({post}) => {

  let comments = post.comments
  // console.log(post,"kkk")

  console.log(comments,"commment")
  return (
      <div className="post-container">
        <div className="post-header">
          <div className="post-user">
            <img className="img-profile" src={jeason} />
            <span className="user-name">oury</span>
            <span className='post-title'>{`✏️  ${post.title}`}</span>
          </div>
          <div className="post-opt">
            <i class="fas fa-align-justify"></i>
          </div>
        </div>
       
         {post.body && <div className="post-body">
          <img className="img-post" src={jeason} />
        </div>}
        <div className="post-footer">
          <div className="post-comment">
              {post.comment}
          </div>
          <div className="post-actue"> 
            <span>liker</span>
              <div>
                <span style={{ paddingRight: "10px" }}>commenter</span>
                <span>partage</span>
              </div>
            <span>{post.date}</span>
          </div>
          <div className="post-handleComment">
           
          {
              comments && comments.map( comment =>{
                return(
                <div>
                  {comment.body}
                </div>)

              }) 
            }   
          </div>

         
        </div>
      </div>
  );
};
export default Post;
