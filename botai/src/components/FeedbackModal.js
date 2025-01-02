import React, { useState } from "react";
import { Modal, Box, Button, Rating, TextField } from "@mui/material";

const FeedbackModal = ({ open, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState("");

  const handleSubmit = () => {
    onSubmit({ rating, comments });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} className="feedback-modal">
      <Box className="modal-box">
        <h2>Provide Feedback</h2>
        <Rating
          value={rating}
          onChange={(e, value) => setRating(value)}
          max={5}
        />
        <TextField
          label="Comments"
          multiline
          rows={4}
          fullWidth
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <Button onClick={handleSubmit} className="submit-btn">
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default FeedbackModal;
