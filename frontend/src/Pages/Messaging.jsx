// MessagingComponent.jsx

import React, { useState, useRef } from "react";
import Sidebar from "../Components/Sidebar";
import userImage from "../assets/images/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPlus, faSmile } from "@fortawesome/free-solid-svg-icons";
import Picker from "emoji-picker-react";

const MessagingComponent = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "Other", message: "Hello, this is a dummy incoming message." },
  ]);
  const [isAttachmentOpen, setIsAttachmentOpen] = useState(false); // Add state for attachment section
  const [attachments, setAttachments] = useState([]); // Add state for attachments
  const fileInputRef = useRef(null); // Create a ref for file input
  const [isClicked, setIsClicked] = useState(false);
  const [emojiPickerState, SetEmojiPicker] = useState(false);

  const people = ["Nishant Verma", "Ojus Goel", "Omendra Kumar Upadhya"]; // Add your list of people

  const handlePersonSelect = (person) => {
    setSelectedPerson(person);
    // You might want to load the chat history for the selected person here
  };

  const handleSendMessage = () => {
    if (selectedPerson && messageInput.trim() !== "") {
      setMessages([...messages, { sender: "You", message: messageInput }]);
      // setMessages([...messages, { sender: "Other", message: "Hi bro" }]);
      setMessageInput("");
      // You might want to send the message to the server here
    }
  };

  const onEmojiClick = (event, emojiObject) => {
    setMessageInput(messageInput + emojiObject.emoji);
  };

  const handleAttachmentClick = () => {
    fileInputRef.current.click(); // Trigger file input click event
  };

  const handleAttachmentChange = (e) => {
    const files = Array.from(e.target.files);
    setAttachments(prevAttachments => [...prevAttachments, ...files]);
  };

  return (
    <div className="flex h-screen p-2 ">
      <div className="w-1/5">
        <Sidebar />
      </div>
      {/* Sidebar with names of people */}
      <div
        className="w-4/5 bg-white p-4  "
        style={{ borderRadius: "38px",  }}
      >
        <div className="flex h-full">
          <div className="w-1/4 border-r pr-2">
            <h1
              style={{ color: "#0065C1" }}
              className="text-xl font-bold mb-4 font-inter"
            >
              Messaging
            </h1>
            <hr className="mb-4" />
            <ul>
              {people.map((person) => (
                <li
                  key={person}
                  className={`cursor-pointer ${
                    person === selectedPerson ? "text-blue-500" : ""
                  }`}
                  onClick={() => handlePersonSelect(person)}
                >
                  <div className="flex items-center mb-2">
                    <img
                      src={userImage} // Replace with actual profile icon source
                      alt={`${person}'s profile icon`}
                      className="w-12 h-12 rounded-full mr-2"
                    />
                    <span>{person}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Selected person's chat section */}
          <div className="flex-1 w-3/4 bg-gray-50">
            {selectedPerson ? (
              <div className="flex flex-col h-full">
                {/* Chat messages */}
                <h1
                  style={{ color: "#0065C1" }}
                  className="text-xl font-bold mb-4 font-inter ml-2"
                >
                  {selectedPerson}
                </h1>
                <hr className="mb-4" />
                <div className="flex-1 overflow-y-auto">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`mb-2 ${
                        msg.sender === "You"
                          ? "flex justify-end"
                          : "flex justify-start"
                      }`}
                    >
                      <div
                        className="inline-block bg-gray-200 rounded px-2 py-1"
                        style={{
                          backgroundColor: "#F0F2F5",
                          padding: "8px",
                          borderRadius: "4px",
                          fontSize: "16px",
                          color: "#333333",
                        }}
                      >
                        <span className="font-semibold">{msg.sender}:</span>{" "}
                        {msg.message}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message input and send button */}
                <div
                  className="flex justify-evenly h-16 items-center ml-2 bg-gray-200 "
                  style={{ color: "#F0F2F5" }}
                >
                  <input
                    type="file"
                    multiple
                    onChange={handleAttachmentChange}
                    style={{ display: "none" }}
                    ref={fileInputRef} // Set the ref for file input
                  />
                  <FontAwesomeIcon
                    icon={faPlus}
                    className={`w-1/12 text-2xl cursor-pointer  ${
                      isClicked ? "" : ""
                    }`}
                    style={{ color: "#0065C1" }}
                    onClick={() => {
                      setIsClicked(true);
                      handleAttachmentClick();
                    }}
                  />
                  {/* <div className="w-1/12">
                    {emojiPickerState && (
                      <Picker
                        onEmojiClick={onEmojiClick}
                        disableAutoFocus={true}
                      />
                    )}
                    <FontAwesomeIcon
                      icon={faSmile}
                        className="text-2xl cursor-pointer"
                        style={{ color: "#0065C1" }}
                      onClick={() => SetEmojiPicker(!emojiPickerState)}
                    />
                  </div> */}
                  <input
                    type="text"
                    className="flex-1 p-2 rounded-md mr-2 w-10/12 text-black focus:outline-none shadow h-12"
                    placeholder="Type a message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSendMessage();
                      }
                    }}
                  />
                  <button
                    className="w-1/12 px-4 py-2 rounded"
                    onClick={handleSendMessage}
                  >
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="text-xl"
                      style={{ color: "#0065C1" }}
                    />
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-full text-xl">
                <div className="flex-1 flex flex-col justify-center h-full">
                  <h1
                    style={{ color: "#0065C1" }}
                    className="text-xl font-bold mb-4 font-inter pl-2"
                  >
                    New Message
                  </h1>
                  <hr className="mb-4" />
                  <div className="flex items-center justify-center h-full">
                    <span className="flex items-center h-full">
                      Select a person to start chatting
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagingComponent;
