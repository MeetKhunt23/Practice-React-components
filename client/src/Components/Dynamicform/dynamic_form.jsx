import React, { useEffect } from "react";
import { useState } from "react";
import "./dynamic_form.css";
import Inputfiels from "./inputfiels";
import Selectoptions from "./selectoptions";
import Number from "./number";
import Password from "./password";
import Image from "./image";
import Radiogroup from "./radiogroup";
import Checkbox from "./checkbox";
import Textarea from "./textarea";
import { AiFillDelete } from "react-icons/ai";
import SubmitButton from "./button";
import axios from "axios";
import $ from "jquery";
import { FormProvider } from "./formcontext";

const Dynamic_form = () => {
  const [formdata, setFormdata] = useState([]);
  const [finallist, setfinallist] = useState([]);
  const [validate, setvalidate] = useState("hide");
  console.log("finallist",finallist);
  const [validationbtn, setvalidationbtn] = useState("Get Validation");
  console.log("finallist",finallist);


  const formlisting = async () => {
    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
    };
    const res = await axios.post("http://localhost:1300/formlisting", data);
    if (res.data.success === "yes") {
      var formarray = res.data.data;
      for (var i = 0; i < formarray.length; i++) {
        if (formarray[i].field_type === "button") {
          var data = [...formdata];
          var obj = {};
          obj["component"] = (
            <SubmitButton
              component_id={formarray[i].id}
              label={formarray[i].field_label}
            />
          );
          obj["id"] = formarray[i].id;
          data.push(obj);
          setFormdata(data);
        } else if (formarray[i].field_type === "text") {
          var data = [...formdata];
          var obj = {};
          obj["component"] = (
            <Inputfiels
              component_id={formarray[i].id}
              label={formarray[i].field_label}
              placeholder={formarray[i].placeholder}
            />
          );
          obj["id"] = formarray[i].id;
          data.push(obj);
          setFormdata(data);
        } else if (formarray[i].field_type === "textarea") {
          var data = [...formdata];
          var obj = {};
          obj["component"] = (
            <Textarea
              component_id={formarray[i].id}
              label={formarray[i].field_label}
              placeholder={formarray[i].placeholder}
            />
          );
          obj["id"] = formarray[i].id;
          data.push(obj);
          setFormdata(data);
        } else if (formarray[i].field_type === "select") {
          var optionarray = formarray[i].options.split(",");
          var data = [...formdata];
          var obj = {};
          obj["component"] = (
            <Selectoptions
              component_id={formarray[i].id}
              label={formarray[i].field_label}
              options={optionarray}
            />
          );
          obj["id"] = formarray[i].id;
          data.push(obj);
          setFormdata(data);
        } else if (formarray[i].field_type === "number") {
          var data = [...formdata];
          var obj = {};
          obj["component"] = (
            <Number
              component_id={formarray[i].id}
              label={formarray[i].field_label}
              placeholder={formarray[i].placeholder}
            />
          );
          obj["id"] = formarray[i].id;
          data.push(obj);
          setFormdata(data);
        } else if (formarray[i].field_type === "password") {
          var data = [...formdata];
          var obj = {};
          obj["component"] = (
            <Password
              component_id={formarray[i].id}
              label={formarray[i].field_label}
              placeholder={formarray[i].placeholder}
            />
          );
          obj["id"] = formarray[i].id;
          data.push(obj);
          setFormdata(data);
        } else if (formarray[i].field_type === "file") {
          var data = [...formdata];
          var obj = {};
          obj["component"] = (
            <Image
              component_id={formarray[i].id}
              label={formarray[i].field_label}
            />
          );
          obj["id"] = formarray[i].id;
          data.push(obj);
          setFormdata(data);
        } else if (formarray[i].field_type === "radio") {
          var optionarray = formarray[i].options.split(",");
          var data = [...formdata];
          var obj = {};
          obj["component"] = (
            <Radiogroup
              component_id={formarray[i].id}
              label={formarray[i].field_label}
              options={optionarray}
            />
          );
          obj["id"] = formarray[i].id;
          data.push(obj);
          setFormdata(data);
        } else if (formarray[i].field_type === "checkbox") {
          var optionarray = formarray[i].options.split(",");
          var data = [...formdata];
          var obj = {};
          obj["component"] = (
            <Checkbox
              component_id={formarray[i].id}
              label={formarray[i].field_label}
              options={optionarray}
            />
          );
          obj["id"] = formarray[i].id;
          data.push(obj);
          setFormdata(data);
        }
      }
    }
  };

  const loadformdata = async () => {
    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
    };
    const res = await axios.post("http://localhost:1300/formlisting", data);
    if (res.data.success === "yes") {
      var formarray = res.data.data;
      for (var i = 0; i < formarray.length; i++) {
        if (formarray[i].field_type === "button") {
          var data = finallist;
          var obj = {};
          obj["component"] = (
            <SubmitButton
              component_id={formarray[i].id}
              label={formarray[i].field_label}
              display={{ display: "none" }}
            />
          );
          obj["id"] = formarray[i].id;
          data.push(obj);
          setfinallist([...data]);
        } else if (formarray[i].field_type === "text") {
          var data = finallist;
          var obj = {};
          obj["component"] = (
            <Inputfiels
              component_id={formarray[i].id}
              label={formarray[i].field_label}
              placeholder={formarray[i].placeholder}
              display={{ display: "none" }}
            />
          );
          obj["id"] = formarray[i].id;
          data.push(obj);
          setfinallist([...data]);
        } else if (formarray[i].field_type === "textarea") {
          var data = finallist;
          var obj = {};
          obj["component"] = (
            <Textarea
              component_id={formarray[i].id}
              label={formarray[i].field_label}
              placeholder={formarray[i].placeholder}
              display={{ display: "none" }}
            />
          );
          obj["id"] = formarray[i].id;
          data.push(obj);
          setfinallist([...data]);
        } else if (formarray[i].field_type === "select") {
          var optionarray = formarray[i].options.split(",");
          var data = finallist;
          var obj = {};
          obj["component"] = (
            <Selectoptions
              component_id={formarray[i].id}
              label={formarray[i].field_label}
              options={optionarray}
              display={{ display: "none" }}
            />
          );
          obj["id"] = formarray[i].id;
          data.push(obj);
          setfinallist([...data]);
        } else if (formarray[i].field_type === "number") {
          var data = finallist;
          var obj = {};
          obj["component"] = (
            <Number
              component_id={formarray[i].id}
              label={formarray[i].field_label}
              placeholder={formarray[i].placeholder}
              display={{ display: "none" }}
            />
          );
          obj["id"] = formarray[i].id;
          data.push(obj);
          setfinallist([...data]);
        } else if (formarray[i].field_type === "password") {
          var data = finallist;
          var obj = {};
          obj["component"] = (
            <Password
              component_id={formarray[i].id}
              label={formarray[i].field_label}
              placeholder={formarray[i].placeholder}
              display={{ display: "none" }}
            />
          );
          obj["id"] = formarray[i].id;
          data.push(obj);
          setfinallist([...data]);
        } else if (formarray[i].field_type === "file") {
          var data = finallist;
          var obj = {};
          obj["component"] = (
            <Image
              component_id={formarray[i].id}
              label={formarray[i].field_label}
              display={{ display: "none" }}
            />
          );
          obj["id"] = formarray[i].id;
          data.push(obj);
          setfinallist([...data]);
        } else if (formarray[i].field_type === "radio") {
          var optionarray = formarray[i].options.split(",");
          var data = finallist;
          var obj = {};
          obj["component"] = (
            <Radiogroup
              component_id={formarray[i].id}
              label={formarray[i].field_label}
              options={optionarray}
              display={{ display: "none" }}
            />
          );
          obj["id"] = formarray[i].id;
          data.push(obj);
          setfinallist([...data]);
        } else if (formarray[i].field_type === "checkbox") {
          var optionarray = formarray[i].options.split(",");
          var data = finallist;
          var obj = {};
          obj["component"] = (
            <Checkbox
              component_id={formarray[i].id}
              label={formarray[i].field_label}
              options={optionarray}
              display={{ display: "none" }}
            />
          );
          obj["id"] = formarray[i].id;
          data.push(obj);
          setfinallist([...data]);
        }
      }
    }
  };

  const textinput = async () => {

    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      field_type: "text",
      field_label: "Name",
      placeholder: "Enter Your Text Here",
      options: "null",
      form_number: "null",
    };
    console.log("data", data);
    const res = await axios.post("http://localhost:1300/addformdata", data);
    if (res.data.success === "yes") {
      // alert("Button Added");
      //   setadmin(true);
    }
    formlisting();
  };

  const selectoption = async () => {

    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      field_type: "select",
      field_label: "Select option",
      placeholder: "null",
      options: "option1,option2,option3",
      form_number: "null",
    };
    console.log("data", data);
    const res = await axios.post("http://localhost:1300/addformdata", data);
    if (res.data.success === "yes") {
      // alert("Button Added");
      //   setadmin(true);
    }
    formlisting();
  };

  const number = async () => {
    // var arey = [...array];
    // arey.push();
    // setArray(arey);

    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      field_type: "number",
      field_label: "Contact Number",
      placeholder: "null",
      options: "null",
      form_number: "null",
    };
    console.log("data", data);
    const res = await axios.post("http://localhost:1300/addformdata", data);
    if (res.data.success === "yes") {
      // alert("Button Added");
      //   setadmin(true);
    }
    formlisting();
  };

  const password = async () => {
    // var arey = [...array];
    // arey.push();
    // setArray(arey);

    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      field_type: "password",
      field_label: "Password",
      placeholder: "Enter the Password",
      options: "null",
      form_number: "null",
    };
    console.log("data", data);
    const res = await axios.post("http://localhost:1300/addformdata", data);
    if (res.data.success === "yes") {
      // alert("Button Added");
      //   setadmin(true);
    }
    formlisting();
  };

  const image = async () => {
    // var arey = [...array];
    // arey.push();
    // setArray(arey);

    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      field_type: "file",
      field_label: "Insert Image",
      placeholder: "null",
      options: "null",
      form_number: "null",
    };
    console.log("data", data);
    const res = await axios.post("http://localhost:1300/addformdata", data);
    if (res.data.success === "yes") {
      // alert("Button Added");
      //   setadmin(true);
    }
    formlisting();
  };

  const radiogroup = async () => {
    // var arey = [...array];
    // arey.push();
    // setArray(arey);
    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      field_type: "radio",
      field_label: "Select Your choise",
      placeholder: "null",
      options: "option1,option2,option3",
      form_number: "null",
    };
    console.log("data", data);
    const res = await axios.post("http://localhost:1300/addformdata", data);
    if (res.data.success === "yes") {
      // alert("Button Added");
      //   setadmin(true);
    }
    formlisting();
  };

  const checkbox = async () => {
    // var arey = [...array];
    // arey.push();
    // setArray(arey);
    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      field_type: "checkbox",
      field_label: "Select Your choise",
      placeholder: "null",
      options: "option1,option2,option3",
      form_number: "null",
    };
    console.log("data", data);
    const res = await axios.post("http://localhost:1300/addformdata", data);
    if (res.data.success === "yes") {
      // alert("Button Added");
      //   setadmin(true);
    }
    formlisting();
  };

  const textarea = async () => {
    // var arey = [...array];
    // arey.push();
    // setArray(arey);
    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      field_type: "textarea",
      field_label: "Text_area",
      placeholder: "Enter Text Here",
      options: "null",
      form_number: "null",
    };
    console.log("data", data);
    const res = await axios.post("http://localhost:1300/addformdata", data);
    if (res.data.success === "yes") {
      // alert("Button Added");
      //   setadmin(true);
    }
    formlisting();
  };

  const button = async () => {
    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      field_type: "button",
      field_label: "Submit",
      placeholder: "null",
      options: "null",
      form_number: "null",
    };
    // console.log("data", data);
    const res = await axios.post("http://localhost:1300/addformdata", data);
    if (res.data.success === "yes") {
      // alert("Button Added");
      //   setadmin(true);
      formlisting();
    }
  };

  const handledelelebyid = async (component_id) => {
    var user_id = localStorage.getItem("user_id");
    var data = {
      component_id: component_id,
      user_id: user_id,
    };
    // console.log("data", data);
    const res = await axios.post(
      "http://localhost:1300/deletebycomponentid",
      data
    );
    if (res.data.success === "yes") {
    }
  };

  const handledlete = (index, component_id) => {
    var deletearray = [...formdata];
    deletearray.splice(index, 1);
    setFormdata(deletearray);
    handledelelebyid(component_id);
  };

  const deleteallfields = async () => {
    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
    };
    const res = await axios.post("http://localhost:1300/deleteallfields", data);
    if (res.data.success === "yes") {
    }
  };

  useEffect(() => {
    deleteallfields();
  }, []);

  const handlecreateform = () => {
    // setFormdata([])
    loadformdata();
    $("#create-form").css("display", "block");
    $("#main-con").css("display", "none");
  };

  const handleback = () => {
    setfinallist([]);
    formlisting();
    $("#create-form").css("display", "none");
    $("#main-con").css("display", "flex");
    formdata.pop();
  };

  const saveformredirect = async () => {
    // setvalidate("show")
    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
    };
    const res = await axios.post("http://localhost:1300/saveform", data);
    if (res.data.success === "yes") {
      window.location.href = "./create_form";
      // setvalidate("show")
    }
  };

  const getvalidations = async () => {
    if(validationbtn==="Get Validation"){
      setvalidationbtn("Remove Validation")
      setvalidate("show")
    }
    else{
      setvalidationbtn("Get Validation")
      setvalidate("hide")
    }
  };

  const myforms = () => {
    window.location.href = "./create_form";
  };

  return (
    <>
    <FormProvider value={{validate,validationbtn}}>
      <div style={{position:"absolute",right:"10px",border:"2px solid blue",padding:"8px 8px",top:"13px",borderRadius:"10px 10px",cursor:"pointer"}} onClick={()=>{getvalidations()}}>
        {validationbtn}
      </div>
      <div id="main-con">
        <div className="list-items">
          <div style={{ width: "100%" }}>
            <div className="items" onClick={() => textinput()}>
              Text Input
            </div>
            <div className="items" onClick={() => textarea()}>
              Text Area
            </div>
            <div className="items" onClick={() => selectoption()}>
              Select Options
            </div>
            <div className="items" onClick={() => number()}>
              Number
            </div>
            <div className="items" onClick={() => password()}>
              Password
            </div>
            <div className="items" onClick={() => image()}>
              Image
            </div>
            <div className="items" onClick={() => radiogroup()}>
              Radio Button
            </div>
            <div className="items" onClick={() => checkbox()}>
              Check Box
            </div>
            <div className="items" onClick={() => button()}>
              Button
            </div>
          </div>
          {/* <hr /> */}
          <div
            style={{
              width: "70%",
              border: "2px solid black",
              borderRadius: "10px 10px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              backgroundColor: "green",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => handlecreateform()}
          >
            View Form
          </div>
          <div
            style={{
              width: "70%",
              border: "2px solid black",
              borderRadius: "10px 10px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              backgroundColor: "green",
              color: "white",
              marginTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              saveformredirect();
            }}
          >
            Save Form
          </div>
          <div
            style={{
              width: "70%",
              border: "2px solid black",
              borderRadius: "10px 10px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              backgroundColor: "green",
              color: "white",
              marginTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              deleteallfields();
            }}
          >
            Cancel
          </div>
          <div
            style={{
              width: "70%",
              border: "2px solid black",
              borderRadius: "10px 10px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              backgroundColor: "green",
              color: "white",
              marginTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              myforms();
            }}
          >
            My Forms
          </div>
        </div>
        <div className="form-items">
          {formdata.map((pro, index) => {
            return (
              <div className="all" key={index}>
                <div
                  key={index}
                  className="formfields"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {pro.component}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    zIndex: "10",
                  }}
                  onClick={() => handledlete(index, pro.id)}
                >
                  <AiFillDelete
                    style={{
                      fontSize: "30px",
                      cursor: "pointer",
                      zIndex: "100",
                      marginLeft: "25px",
                    }}
                  />{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="create-form">
        <div id="backbtn" onClick={() => handleback()}>
          Back
        </div>
        <>
          {finallist.map((pro, index) => {
            return (
              <div className="all" key={index}>
                <div
                  key={index}
                  className="formfields"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {pro.component}
                </div>
              </div>
            );
          })}
        </>
      </div>
    </FormProvider>
    </>
  );
};

export default Dynamic_form;
