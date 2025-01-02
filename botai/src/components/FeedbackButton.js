import React, { useState } from "react";
import { ThumbUp, ThumbDown } from "@mui/icons-material";

const FeedbackButtons = () => {
  const [feedback, setFeedback] = useState(null);

  return (
    <div className="feedback-buttons">
      <ThumbUp
        style={{ color: feedback === "like" ? "green" : "gray" }}
        onClick={() => setFeedback("like")}
      />
      <ThumbDown
        style={{ color: feedback === "dislike" ? "red" : "gray" }}
        onClick={() => setFeedback("dislike")}
      />
    </div>
  );
};

export default FeedbackButtons;
