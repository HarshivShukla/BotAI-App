import React from "react";
import { Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

const FeedbackTable = ({ feedbackData }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Conversation</TableCell>
          <TableCell>Rating</TableCell>
          <TableCell>Comments</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {feedbackData.map((feedback, index) => (
          <TableRow key={index}>
            <TableCell>{`Conversation ${index + 1}`}</TableCell>
            <TableCell>{feedback.rating}</TableCell>
            <TableCell>{feedback.comments}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FeedbackTable;
