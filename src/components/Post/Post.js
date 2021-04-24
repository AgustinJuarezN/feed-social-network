import React, { useState, useEffect } from "react";
import { Comment, Avatar } from "antd";
import PostService from "../../services/post.service";
import Editor from "../Editor/Editor";
import "./Post.css";

const Post = ({ id, body, title, userId }) => {
  const [user, setUser] = useState();
  const [comments, setComments] = useState();
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

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

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      const comment = {
        body: newComment,
        email: "test@gmail.com",
        name: "Test",
      };
      const response = await PostService.instance.postComment(id, comment);
      setComments([...comments, response.data]);
      setSubmitting(false);
      setNewComment("");
    } catch (error) {
      setSubmitting(false);
      throw error;
    }
  };

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
          <p className="text">{body}</p>
        </>
      }
    >
      <div>
        {showComments &&
          comments?.length &&
          comments.map((comment, i) => (
            <Comment
              key={comment.id+i}
              author={<a>{comment?.email}</a>}
              content={<p className="text">{comment.body}</p>}
              className="Comment"
            />
          ))}
        {showComments && (
          <Comment
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <Editor
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitting={submitting}
                value={newComment}
                placeholder="Enter your comment"
              />
            }
          />
        )}
      </div>
    </Comment>
  );
};

export default Post;
