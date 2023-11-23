import React from 'react'
import { filter } from '../../assets/images';
import './ForumCard.css'

const ForumCard = () => {
    return (
        <div class="forum-post-card">
    <div class="forum-post-header">
      <div class="forum-user-info">
        <img src="user1.jpg" alt="User Image" class="forum-user-image"></img>
        <div class="forum-user-details">
          <div class="forum-user-name">John Doe</div>
          <div class="forum-last-seen">Last seen 2 hours ago</div>
        </div>
      </div>
    </div>
    <div class="forum-post-content">
      <div class="forum-question">How to create a responsive UI using HTML and CSS?</div>
      <div class="forum-answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</div>
    </div>
    <div class="forum-tags">
      <div class="forum-tag">HTML</div>
      <div class="forum-tag">CSS</div>
      <div class="forum-tag">Responsive Design</div>
    </div>
    <div class="forum-post-actions">
      <div class="forum-three-dots">&#8942;</div>
      <div class="forum-actions-icons">
        <div class="forum-action-icon">👁️ 123</div>
        <div class="forum-action-icon">💬 10</div>
        <div class="forum-action-icon">👍 45</div>
      </div>
    </div>
  </div>
    )
}

export default ForumCard