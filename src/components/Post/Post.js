import React, { useState, useEffect } from "react";
import { Comment, Avatar } from "antd";
import PostService from "../../services/post.service";

const Post = ({ id, body, title, userId }) => {
  const [user, setUser] = useState();
  const [comments, setComments] = useState();
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    getOwner();
    getComments();
  }, []);

  const getOwner = async () => {
    const response = await PostService.instance.getCommentOwner(userId);
    setUser(response.data);
  };

  const getComments = async () => {
    const response = await PostService.instance.getComments(id);
    setComments(response.data);
  };

  const onShowComments = () => {
    setShowComments(!showComments);
  };

  const actions = [
    <span key="comment-basic-reply-to" onClick={onShowComments}>
      {showComments ? "Hide comments" : "View comments"}
    </span>,
  ];

  return (
    <Comment
      actions={actions}
      author={<a>{user?.name}</a>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt={user?.name}
        />
      }
      content={
        <>
          <b>{title}</b>
          <p style={{ whiteSpace: "normal" }}>{body}</p>
        </>
      }
    >
      <div>
        {showComments &&
          comments &&
          comments.map((comment) => (
            <Comment
              key={comment.id}
              author={<a>{comment?.email}</a>}
              content={
                <>
                  <p style={{ whiteSpace: "normal" }}>{comment.body}</p>
                </>
              }
              style={{
                backgroundColor: "white",
                padding: "0 10px",
                margin: "10px 0",
                borderRadius: 8,
              }}
            />
          ))}
      </div>
    </Comment>
  );
};

export default Post;
