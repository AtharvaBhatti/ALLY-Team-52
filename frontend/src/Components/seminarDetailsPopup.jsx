import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";

export default function ScrollDialog({ onClose, seminarDetails }) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [studentList, setStudentList] = useState([]);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
  };
  useEffect(() => {
    fetch("http://127.0.0.1:8000/project_team_recommendations/1/") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setStudentList(data))
      .catch((error) => console.error("Error fetching data:", error));
    console.log(studentList);
  }, [studentList]);

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
      <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
      <Dialog
        open={handleClickOpen}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Seminar Deatils</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <h1 className="font-bold">The age of AI</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eos debitis nisi velit corporis non, at officiis eaque sint consequatur ipsum amet suscipit culpa provident inventore dolore dolor ratione eum?
          <br></br>
          <span className="font-bold">Conducted by:</span> Marcus
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Register</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
