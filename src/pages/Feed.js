import React, { Component } from 'react';
import './Feed.scss';
import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
  render() {
    return (
      <div>
        <section id="post-list">
          <article>
            <header>
              <div className="user-info">
                <span>name</span>
                <span className="place">place</span>
              </div>
              <img src={more} alt="see more" />
            </header>
            <img src="http://localhost:3333/files/henry.jpg" alt="" />
            <footer>
              <div className="actions">
                <img src={like} alt="" />
                <img src={comment} alt="" />
                <img src={send} alt="" />
                <strong>99 curtidas</strong>
                <p>
                  description
                  <span>#hastags</span>
                </p>
              </div>
            </footer>
          </article>

          <article>
            <header>
              <div className="user-info">
                <span>name</span>
                <span className="place">place</span>
              </div>
              <img src={more} alt="see more" />
            </header>
            <img src="http://localhost:3333/files/henry.jpg" alt="" />
            <footer>
              <div className="actions">
                <img src={like} alt="" />
                <img src={comment} alt="" />
                <img src={send} alt="" />
                <strong>99 curtidas</strong>
                <p>
                  description
                  <span>#hastags</span>
                </p>
              </div>
            </footer>
          </article>
        </section>
      </div>
    );
  }
}

export default Feed;
