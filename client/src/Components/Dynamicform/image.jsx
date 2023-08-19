import React, { useState,useEffect } from "react";
import Form from "react-bootstrap/Form";
import "./dynamic_form.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { useFormcontext } from "./formcontext";


const Image = (props) => {
  const [name, setName] = useState("Profile Picture");
  const [show, setShow] = useState(false);
  const [labelchange, setlabelchange] = useState(props.label);
  var contextt = useFormcontext();
  var validate = contextt.validate;
  const [showvalidate, setshowvalidate] = useState("");
  var validationbtnn=useFormcontext();
  var validatebtn=validationbtnn.validationbtn

  useEffect(()=>{
    if(validatebtn==="Remove Validation"){
      setshowvalidate("show")
    }
    else if(validatebtn==="Get Validation"){
      setshowvalidate("hide")
    }
  },[validatebtn])
  
  const handleinputchange = (e) => {
    if (e.target.value == "") {
      setshowvalidate("show");
    } else {
      setshowvalidate("hide");
    }
  };
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
  return (
    <div className="selectoptions">
      <div>
        <span style={{ fontSize: "20px", fontWeight: "500" }}>
          {labelchange ? labelchange : name} ➡️ &nbsp;
        </span>
        <input type="file" id="profile_pic" name="profile_pic"  onChange={(e) => handleinputchange(e)}  />
        <span
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            cursor: "pointer",
            position: "relative",
            bottom: "15px",
            left: "850px",
          }}
        >
         <div onClick={() => handleShow()} style={props.display}>
            <AiFillEdit style={{ fontSize: "30px" }} />
          </div>
        </span>
      </div>
      <h4 style={{fontSize:"20px",color:"red"}} className={showvalidate ? showvalidate : validate}>Please Enter {labelchange ? labelchange : name}*</h4>
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

export default Image;
