import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CommentCard = ({ comments }) => {
  const nav = useNavigate();
  console.log(comments);

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

  return (
    <div>
      {comments.map((c, index) => (
        <div className="forum-post-card" key={c.id}>
          <div className="forum-post-header">
            <div className="forum-user-info">
              <img
                src={c.user_img}
                alt="User Image"
                className="forum-user-image"
              ></img>
              <div className="forum-user-details">
                <div className="forum-user-name">{c.user_name}</div>
                <div className="forum-last-seen">{c.dat_time}</div>
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
            <div className="absolute right-0 z-[100] mt-6 w-48 bg-white rounded shadow-lg" style={{ marginTop: '140px' }}>
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
            <div className="forum-answer">{c.answer}</div>
          </div>
          <div class="forum-post-footer">
            <div className="forum-post-actions">
              <div className="forum-actions-icons">
                <div className="forum-action-icon" >
                  {' '}
                  <i class="fa fa-thumbs-up" aria-hidden="true" style={{marginRight:"7px"}}></i>
                  {c.likes}
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
