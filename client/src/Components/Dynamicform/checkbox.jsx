import React, { useState,useEffect } from "react";
import Form from "react-bootstrap/Form";
import "./dynamic_form.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useFormcontext } from "./formcontext";

const Checkbox = (props) => {
  const [name, setName] = useState("Select Option");
  const [options, setoptions] = useState(["option1", "option2", "option3"]);
  const [show, setShow] = useState(false);
  const [labelchange, setlabelchange] = useState(props.label);
  const[updatedoptions,setupdatedoptions]= useState(props.options)
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
    setoptions(["option1", "option2", "option3"]);
    setShow(false);
  };

  const handleShow = () => setShow(true);
  const savechangeandclose = async() => {
    var title = document.getElementById("name").value
      ? document.getElementById("name").value
      : name;
    setName(title);
    setShow(false);
    setlabelchange(title)
    setupdatedoptions(options)

    var option=options ? `${options.join(",")}` : "option1,option2,option3"
    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      component_id: props.component_id,
      field_label: title,
      placeholder:"null",
      options: option,
    };
    const res = await axios.post("http://localhost:1300/updateformdata", data);
    if (res.data.success === "yes") {
    }
  };

  const handlechange = (e, index) => {
    options[index] = e.target.value;
    setoptions(options);
  };

  const handleaddoption = () => {
    if(updatedoptions){
      var newoption =[...updatedoptions]
      newoption.push(0);
      setupdatedoptions(newoption);
    }
    else{
      var newoption = [...options];
      newoption.push(0);
      setoptions(newoption);
    }
  };

  const handledeleteoption = (index) => {
    var deleletoption = [...options];
    deleletoption.splice(index, 1);
    setoptions(deleletoption);
  };
  return (
    <div className="selectoptions">
      <div>
        <h5>
           {labelchange ? labelchange : name} 
        </h5>
        <div>
          {(updatedoptions ? updatedoptions : options).map((pro) => {
            return (
              <>
                <div style={{ display: "flex" }}>
                  <Form.Check aria-label="option 1" style={{ fontSize: "20px"}}  onChange={(e) => handleinputchange(e)} value={pro}/>
                  &nbsp; &nbsp; <span style={{ fontSize: "20px"}}>{pro} </span>
                </div>
              </>
            );
          })}
        </div>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            cursor: "pointer",
            position: "relative",
            bottom: "62px",
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form.Label htmlFor="inputPassword5">Options</Form.Label>
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => handleaddoption()}
            >
              Add Option
            </span>
          </div>
          {(updatedoptions ? updatedoptions : options).map((pro, index) => {
            return (
              <div style={{ display: "flex" }}>
                <Form.Control
                  type="text"
                  aria-describedby="passwordHelpBlock"
                  style={{ marginBottom: "15px" }}
                  className="inputoption"
                  id="inputoption"
                  onChange={(e) => {
                    handlechange(e, index);
                  }}
                />
                <AiFillDelete
                  style={{ fontSize: "35px", cursor: "pointer" }}
                  onClick={() => handledeleteoption(index)}
                />
              </div>
            );
          })}
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

export default Checkbox;
