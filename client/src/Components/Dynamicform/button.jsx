import React, { useEffect, useState } from "react";
import "./dynamic_form.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import axios from "axios";

const SubmitButton = (props) => {
  const [name, setName] = useState("Submit");
  const [show, setShow] = useState(false);
  const [buttonlabelchange, setlabelchange] = useState(props.label);
  console.log("component_id",props.component_id);

  const handleCloseclose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);
  const savechangeandclose = async () => {
    var title = document.getElementById("name").value
      ? document.getElementById("name").value
      : name;
    setName(title);
    setShow(false);
    setlabelchange(title)

    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      component_id: props.component_id,
      field_label: title,
      placeholder: "null",
      options: "null",
    };
    const res = await axios.post("http://localhost:1300/updateformdata", data);
    if (res.data.success === "yes") {
    }
  };

  useEffect(() => {
    localStorage.setItem("btn_name", name);
  }, [name]);
  return (
    <div className="selectoptions">
      <div style={{ width: "100%" }}>
        <Button variant="success" size="lg" className="btnoption">
          {buttonlabelchange ? buttonlabelchange : name}
        </Button>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            cursor: "pointer",
            position: "relative",
            bottom: "25px",
            left: "850px",
          }}
        >
          <div onClick={() => handleShow()} style={props.display}>
            <AiFillEdit style={{ fontSize: "30px"}} />
          </div>
        </span>
      </div>
      <Modal show={show} onHide={handleCloseclose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Fields</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" autoFocus id="name" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseclose}>
            Close
          </Button>
          <Button variant="primary" onClick={savechangeandclose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SubmitButton;
