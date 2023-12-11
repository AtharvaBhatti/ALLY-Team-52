import React, { useState } from 'react';
import { filter, userimg, dummyuser } from '../../assets/images';
import './ForumCards.css';
import { useNavigate } from 'react-router-dom';

const ForumCard = ({ Posts }) => {
  const nav = useNavigate();
  console.log(Posts);

  const [dropdownStates, setDropdownStates] = useState(Posts.map(() => false));
  const [newposts, setnewposts] = useState(Posts)
  const toggleDropdown = (index) => {
    setDropdownStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const closeDropdown = () => {
    setDropdownStates(Posts.map(() => false));
  };

  function handleclick(post) {
    nav(`/uni1/forum/${post.id}`, { state: { post: post } });
  }
const handleLike = (post) => {
  const apiUrl = "http://127.0.0.1:8000/react_post/";

  // Assuming that you have the user ID
  const userID = 1;

  // Make an API request to increment the likes count
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userID: userID,
      postID: post.id,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Update the likes count in the UI
      console.log("Comment submitted successfully:", data);
      setnewposts((prevPosts) =>
        prevPosts.map((p) =>
          p.id === post.id ? { ...p, likesCount: p.likesCount + 1 } : p
        )
      );
    })
    .catch((error) => {
      console.error("Error liking post:", error);
    });
};

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text; // Return the original text if it's within the limit
    } else {
      return text.slice(0, maxLength) + '...'; // Truncate and add ellipsis
    }
  };

  return (
    <div>
      {newposts.map((post, index) => (
        <div className="forum-post-card" key={post.id}>
          <div className="forum-post-header">
            <div className="forum-user-info">
              <img
                src={dummyuser}
                alt="User Image"
                className="forum-user-image"
              ></img>
              <div className="forum-user-details">
                <div className="forum-user-name">{post.postedBy===4?"Ronit Roy":"Ashish Ranjan"}</div>
                <div className="forum-last-seen">16 hours ago</div>
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
                <ul>
                  <li className="py-2 z-50 px-4 hover:bg-gray-200 cursor-pointer">
                    Copy Link
                  </li>
                  <li className="py-2 z-50 px-4 hover:bg-gray-200 cursor-pointer">
                    Share
                  </li>
                  <li className="py-2 z-50 px-4 hover:bg-gray-200 cursor-pointer">
                    Report User
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="forum-post-content">
            <div className="forum-question" onClick={() => handleclick(post)}>
              Got promoted to SDE - III at Google!!! 
            </div>
            <div className="forum-answer" onClick={() => handleclick(post)}>
              {truncateText(post.content, 200)}
            </div>
          </div>
          <div class="forum-post-footer">
            <div className="forum-tags">
              {post.tags.map((tag, index) => (
                <div className="forum-tag" key={index}>
                  {tag.name}
                </div>
              ))}
            </div>
            <div className="forum-post-actions">
              <div className="forum-actions-icons">
                <div className="forum-action-icon">
                  <i class="fa fa-eye" aria-hidden="true"></i> {post.likesCount}
                </div>
                <div
                  className="forum-action-icon"
                  onClick={() => handleclick(post)}
                >
                  <i class="fa fa-comment" aria-hidden="true"></i>
                  {post.commentsCount}
                </div>
                <div
                  className="forum-action-icon"
                  onClick={() => handleLike(post)}
                >
                  <i className="fa fa-thumbs-up" aria-hidden="true"></i>{" "}
                  {post.likesCount}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForumCard;
