import React from 'react'
import { filter } from '../../assets/images';
import './ForumCard.css'
import { useNavigate } from "react-router-dom";

const forums = [
  {
      "id": 1,
      "user_img": "user1.jpg",
      "user_name": "John Doe",
      "user_last_seen": "Last seen 2 hours ago",
      "user_question": "How to create a responsive UI using HTML and CSS?",
      "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      "tag1": "HTML",
      "tag2": "CSS",
      "tag3": "Responsive Design",
      "views": 125,
      "comments": 15,
      "upvotes": 155
  },
  {
      "id": 2,
      "user_img": "user2.jpg",
      "user_name": "Golaginya",
      "user_last_seen": "Last seen 5 min ago",
      "user_question": "How to path KDE on FreeBSD?",
      "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      "tag1": "golang",
      "tag2": "linux",
      "tag3": "overflow",
      "views": 125,
      "comments": 15,
      "upvotes": 155
  },
  {
      "id": 3,
      "user_img": "user3.jpg",
      "user_name": "Linuxoid",
      "user_last_seen": "Last seen 25 min ago",
      "user_question": "What is the difference between Java and Javascript?",
      "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      "tag1": "Java",
      "tag2": "Javascript",
      "tag3": "code",
      "views": 125,
      "comments": 15,
      "upvotes": 155
  },
  {
      "id": 4,
      "user_img": "user4.jpg",
      "user_name": "Lola",
      "user_last_seen": "Last seen 2 days ago",
      "user_question": "I want to study Svelte JS Framework. What is the best resource should I use?",
      "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      "tag1": "svelte",
      "tag2": "Javascript",
      "tag3": "recommendations",
      "views": 125,
      "comments": 15,
      "upvotes": 155
  }
]

const ForumCard = () => {
    const nav = useNavigate();
    function handleclick(forum){
      console.log(forum);
      nav("/unil/forum/${forum.id}", { state: { results: forum } });
    }
    return (
      <div>
      {forums.map((forum) => (
                <div className="forum-post-card" key={forum.id} onClick={() => {handleclick(forum);}}>
            <div className="forum-post-header">
              <div className="forum-user-info">
                <img src={forum.user_img} alt="User Image" className="forum-user-image"></img>
                <div className="forum-user-details">
                  <div className="forum-user-name">{forum.user_name}</div>
                  <div className="forum-last-seen">{forum.user_last_seen}</div>
                </div>
              </div>
            </div>
            <div className="forum-post-content">
              <div className="forum-question">{forum.user_question}</div>
              <div className="forum-answer">{forum.answer}</div>
            </div>
            <div className="forum-tags">
              <div className="forum-tag">{forum.tag1}</div>
              <div className="forum-tag">{forum.tag2}</div>
              <div className="forum-tag">{forum.tag3}</div>
            </div>
            <div className="forum-post-actions">
              <div className="forum-three-dots">&#8942;</div>
              <div className="forum-actions-icons">
                <div className="forum-action-icon">👁️ {forum.views}</div>
                <div className="forum-action-icon">💬 {forum.comments}</div>
                <div className="forum-action-icon">👍 {forum.upvotes}</div>
              </div>
            </div>
          </div>
      ))}
      </div>
    );
}

export default ForumCard;