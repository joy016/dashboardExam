'use client';

import CardHeading from '../../../atoms/Text/components/CardHeading';
import { FaRegFaceSmile } from 'react-icons/fa6';
import { GoPaperclip } from 'react-icons/go';
import '../style/ConvoCard.css';
import { useState } from 'react';

const ConvoCard = () => {
  const [message, setMessage] = useState('');
  const [displayMessage, setDisplayMessage] = useState([]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    setDisplayMessage([...displayMessage, message]);
    setMessage('');
  };

  return (
    <div className="convo-card-container ">
      <CardHeading headingText="Esther Howard" />
      <div className="conversation-container">
        <div className="convo-chat-container">
          <label>Are you ready?</label>
          <img src="/images/woman.png" />
        </div>
        <div className="convo-chat-right-container">
          <img src="/images/woman.png" />
          <label>I have prepared everything</label>
        </div>
        {displayMessage.map((message, index) => (
          <div className="convo-chat-container" key={index}>
            <label key={index}>{message}</label>
            <img src="/images/woman.png" />
          </div>
        ))}
      </div>

      <div class="textarea-container">
        <textarea
          id="myTextarea"
          rows="4"
          cols="50"
          placeholder="Type your message"
          onChange={handleChange}
          value={message}
        ></textarea>
        <div className="btn-container">
          <FaRegFaceSmile />
          <GoPaperclip />
        </div>
        <button id="sendButton" className="btn-send-now" onClick={handleSubmit}>
          Send now
        </button>
      </div>
    </div>
  );
};

export default ConvoCard;
