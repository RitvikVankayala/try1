import { useState } from "react";
import styles from "./QueAns.module.css";
import Cors from "cors";
import { useRouter } from "next/router";
const cors = Cors();

function QueAns() {
  const router = useRouter();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://127.0.0.1:5000/api/answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const { answer } = await response.json();
    setAnswer(answer);
    setChatHistory([...chatHistory, { question, answer }]);
    setQuestion("");
  };

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.chatWindow}>
        <div className={styles.chatHistory}>
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`${styles.chatMessage} ${
                message.answer ? styles.botMessage : styles.userMessage
              }`}
            >
              <div className={styles.border1}>
                <p className={styles.messageText1}>{message.question}</p>
              </div>
              <div className={styles.instagrammessage}>
                {message.answer && (
                  <p className={styles.messageText2}>{message.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className={styles.chatForm}>
          <input
            type="text"
            value={question}
            onChange={handleChange}
            className={styles.chatInput}
            placeholder="Ask me anything..."
          />
          <button type="submit" className={styles.chatButton}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default QueAns;
