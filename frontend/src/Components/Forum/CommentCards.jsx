import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { dummyuser } from "../../assets/images";

const CommentCard = ({ postid: postid }) => {
  const nav = useNavigate();
  const [comments, setcomments] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(postid);
  const [newComment, setNewComment] = useState("");
  // console.log(comments);

  useEffect(() => {
    const apiUrl = `http://127.0.0.1:8000/comments/${postid}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setcomments(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [dropdownStates, setDropdownStates] = useState(
    comments.map(() => false)
  );

  const toggleDropdown = (index) => {
    setDropdownStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : false))
    );
  };

  const closeDropdown = () => {
    setDropdownStates((prevStates) => prevStates.map(() => false));
  };
  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    const apiUrl = "http://127.0.0.1:8000/comment_post/";

    // Assuming that you have the user ID and post ID
    const userID = 1;
    const postID = postid;

    const requestBody = {
      userID: userID,
      postID: postID,
      comment: newComment,
    };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Handle success if needed
        console.log("Comment submitted successfully:", data);

        const currentTimestamp = moment().format("YYYY-MM-DD HH:mm:ss.SSSSSS");

        const updatedcomment = {
          Comment: data.comment,
          user: "Harshith Chunduri",
          byUserID: 1,
          Timestamp: currentTimestamp,
        };

        // Update the comments state with the new comment
        setcomments([...comments, updatedcomment]);

        // Clear the new comment input
        setNewComment("");
      })
      .catch((error) => {
        console.error("Error submitting comment:", error);
      });
  };


  return (
    <div>
      <div class="SPForum-Comments">
        <textarea
          class="SPForum-Comment-Input"
          placeholder="Type your comment here..."
          value={newComment}
          onChange={handleCommentChange}
        ></textarea>
        <button class="SPForum-Comment-Button" onClick={handleCommentSubmit}>
          Submit Comment
        </button>
      </div>
      {comments.map((c, index) => (
        <div className="forum-post-card" key={c.id}>
          <div className="forum-post-header">
            <div className="forum-user-info">
              <img
                src={dummyuser}
                alt="User Image"
                className="forum-user-image"
              ></img>
              <div className="forum-user-details">
                <div className="forum-user-name">{c.user}</div>
                <div className="forum-last-seen">5 min Ago</div>
              </div>
            </div>
            <div
              className="forum-three-dots"
              onClick={() => toggleDropdown(index)}
              onBlur={closeDropdown}
            >
              &#8942;
            </div>
            {dropdownStates[index] && (
              <div
                className="absolute right-0 z-[100] mt-6 w-48 bg-white rounded shadow-lg"
                style={{ marginTop: "140px" }}
              >
                {/* Add margin-top style below */}
                <ul>
                  <li className="py-2 z-50 px-4 hover:bg-gray-200 cursor-pointer">
                    Reply
                  </li>
                  <li className="py-2 z-50 px-4 hover:bg-gray-200 cursor-pointer">
                    Report user
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="forum-post-content">
            <div className="forum-answer">{c.Comment}</div>
          </div>
          <div class="forum-post-footer">
            <div className="forum-post-actions">
              <div className="forum-actions-icons">
                <div className="forum-action-icon">
                  {" "}
                  {moment(c.Timestamp).fromNow()}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentCard;
