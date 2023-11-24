import React from 'react'
import { filter,userimg} from '../../assets/images';
import './ForumCards.css'
import { useNavigate } from "react-router-dom";

const ForumCard = ({Posts}) => {
    const nav = useNavigate();
    console.log(Posts);
    function handleclick(forum){
      
      nav("/uni1/forum/${forum.id}", { state: { results: forum } });
    }
    const truncateText = (text, maxLength) => {
      if (text.length <= maxLength) {
        return text; // Return the original text if it's within the limit
      } else {
        return text.slice(0, maxLength) + '...'; // Truncate and add ellipsis
      }
    };
    
    return (
      <div>
      {Posts.map((forum) => (
                <div className="forum-post-card" key={forum.id} >
            <div className="forum-post-header">
              <div className="forum-user-info">
                <img src={forum.user_img} alt="User Image" className="forum-user-image"></img>
                <div className="forum-user-details">
                  <div className="forum-user-name">{forum.user_name}</div>
                  <div className="forum-last-seen">{forum.user_last_seen}</div>
                </div>
              </div>
              <div className="forum-three-dots">&#8942;</div>
            </div>
            <div className="forum-post-content">
              <div className="forum-question" onClick={() => {handleclick(forum);}}>{forum.user_question}</div>
              <div className="forum-answer" onClick={() => {handleclick(forum);}}>{truncateText(forum.answer, 200)}</div>
            </div>
            <div class="forum-post-footer">
            <div className="forum-tags">
              <div className="forum-tag">{forum.tag1}</div>
              <div className="forum-tag">{forum.tag2}</div>
              <div className="forum-tag">{forum.tag3}</div>
            </div>
            <div className="forum-post-actions">
              <div className="forum-actions-icons" onClick={() => {handleclick(forum);}}>
                <div className="forum-action-icon"><i class="fa fa-eye" aria-hidden="true"></i> {forum.views}</div>
                <div className="forum-action-icon" ><i class="fa fa-comment" aria-hidden="true"></i>{forum.comments}</div>
                <div className="forum-action-icon"> <i class="fa fa-thumbs-up" aria-hidden="true"></i>{forum.upvotes}</div>
              </div>
            </div>
          </div>
          </div>
      ))}
      </div>
    );
}

export default ForumCard;