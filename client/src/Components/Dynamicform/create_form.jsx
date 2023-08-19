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


const Create_form = () => {
  const [formbtns, setformbtns] = useState([]);
  const [openform, setopenform] = useState(false);
  const [formdata, setFormdata] = useState([]);
  const [finallist, setfinallist] = useState([]);
  const [form_id, setform_id] = useState(null);
  const [validate, setvalidate] = useState("show");

  const oldforms = async () => {
    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
    };
    const res = await axios.post("http://localhost:1300/getformsofuser", data);
    if (res.data.success === "yes") {
      setformbtns(res.data.data);
    }
  };

  useEffect(() => {
    oldforms();
  }, []);

  const formlisting = async (forms_id) => {
    formdata.splice(0, formdata.length);
    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      form_id: forms_id,
    };
    const res = await axios.post("http://localhost:1300/getformdetails", data);
    if (res.data.success === "yes") {
      var formarray = res.data.data;
      for (var i = 0; i < formarray.length; i++) {
        // console.log("andarnodata",formdata);
        if (formarray[i].field_type === "button") {
          var data = formdata;
          var obj = {};
          obj["component"] = (
            <SubmitButton
              component_id={formarray[i].id}
              label={formarray[i].field_label}
            />
          );
          obj["id"] = formarray[i].id;
          data.push(obj);
          setFormdata([...data]);
        } else if (formarray[i].field_type === "text") {
          var data = formdata;
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
          setFormdata([...data]);
        } else if (formarray[i].field_type === "textarea") {
          var data = formdata;
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
          setFormdata([...data]);
        } else if (formarray[i].field_type === "select") {
          var optionarray = formarray[i].options.split(",");
          var data = formdata;
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
          setFormdata([...data]);
        } else if (formarray[i].field_type === "number") {
          var data = formdata;
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
          setFormdata([...data]);
        } else if (formarray[i].field_type === "password") {
          var data = formdata;
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
          setFormdata([...data]);
        } else if (formarray[i].field_type === "file") {
          var data = formdata;
          var obj = {};
          obj["component"] = (
            <Image
              component_id={formarray[i].id}
              label={formarray[i].field_label}
            />
          );
          obj["id"] = formarray[i].id;
          data.push(obj);
          setFormdata([...data]);
        } else if (formarray[i].field_type === "radio") {
          var optionarray = formarray[i].options.split(",");
          var data = formdata;
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
          setFormdata([...data]);
        } else if (formarray[i].field_type === "checkbox") {
          var optionarray = formarray[i].options.split(",");
          var data = formdata;
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
          setFormdata([...data]);
        }
      }
    }
  };

  const handleopenform = async (form_id) => {
    setFormdata([]);
    setopenform(true);
    setform_id(form_id);
    formlisting(form_id);
  };

  const textinput = async () => {
    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      field_type: "text",
      field_label: "Name",
      placeholder: "Enter Your Text Here",
      options: "null",
      form_number: form_id,
    };
    console.log("data", data);
    const res = await axios.post("http://localhost:1300/addformdata", data);
    if (res.data.success === "yes") {
      var formarray = res.data.data;
      var arey = [...formdata];
      var obj = {};
      obj["component"] = <Inputfiels />;
      obj["id"] = formarray;
      arey.push(obj);
      setFormdata(arey);
    }
    formlisting(form_id);
  };

  const selectoption = async () => {
    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      field_type: "select",
      field_label: "Select option",
      placeholder: "null",
      options: "option1,option2,option3",
      form_number: form_id,
    };
    console.log("data", data);
    const res = await axios.post("http://localhost:1300/addformdata", data);
    if (res.data.success === "yes") {
      var formarray = res.data.data;
      var arey = [...formdata];
      var obj = {};
      obj["component"] = <Selectoptions />;
      obj["id"] = formarray;
      arey.push(obj);
      setFormdata(arey);
    }
    formlisting(form_id);
  };

  const number = async () => {
    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      field_type: "number",
      field_label: "Contact Number",
      placeholder: "null",
      options: "null",
      form_number: form_id,
    };
    console.log("data", data);
    const res = await axios.post("http://localhost:1300/addformdata", data);
    if (res.data.success === "yes") {
      var formarray = res.data.data;
      var arey = [...formdata];
      var obj = {};
      obj["component"] = <Number />;
      obj["id"] = formarray;
      arey.push(obj);
      setFormdata(arey);
    }
    formlisting(form_id);
  };

  const password = async () => {
    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      field_type: "password",
      field_label: "Password",
      placeholder: "Enter the Password",
      options: "null",
      form_number: form_id,
    };
    console.log("data", data);
    const res = await axios.post("http://localhost:1300/addformdata", data);
    if (res.data.success === "yes") {
      var formarray = res.data.data;
      var arey = [...formdata];
      var obj = {};
      obj["component"] = <Password />;
      obj["id"] = formarray;
      arey.push(obj);
      setFormdata(arey);
    }
    formlisting(form_id);
  };

  const image = async () => {
    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      field_type: "file",
      field_label: "Insert Image",
      placeholder: "null",
      options: "null",
      form_number: form_id,
    };
    console.log("data", data);
    const res = await axios.post("http://localhost:1300/addformdata", data);
    if (res.data.success === "yes") {
      var formarray = res.data.data;
      var arey = [...formdata];
      var obj = {};
      obj["component"] = <Image />;
      obj["id"] = formarray;
      arey.push(obj);
      setFormdata(arey);
    }
    formlisting(form_id);
  };

  const radiogroup = async () => {
    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      field_type: "radio",
      field_label: "Select Your choise",
      placeholder: "null",
      options: "option1,option2,option3",
      form_number: form_id,
    };
    console.log("data", data);
    const res = await axios.post("http://localhost:1300/addformdata", data);
    if (res.data.success === "yes") {
      var formarray = res.data.data;
      var arey = [...formdata];
      var obj = {};
      obj["component"] = <Radiogroup />;
      obj["id"] = formarray;
      arey.push(obj);
      setFormdata(arey);
    }
    formlisting(form_id);
  };

  const checkbox = async () => {
    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      field_type: "checkbox",
      field_label: "Select Your choise",
      placeholder: "null",
      options: "option1,option2,option3",
      form_number: form_id,
    };
    console.log("data", data);
    const res = await axios.post("http://localhost:1300/addformdata", data);
    if (res.data.success === "yes") {
      var formarray = res.data.data;
      var arey = [...formdata];
      var obj = {};
      obj["component"] = <Checkbox />;
      obj["id"] = formarray;
      arey.push(obj);
      setFormdata(arey);
    }
    formlisting(form_id);
  };

  const textarea = async () => {
    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      field_type: "textarea",
      field_label: "Text_area",
      placeholder: "Enter Text Here",
      options: "null",
      form_number: form_id,
    };
    console.log("data", data);
    const res = await axios.post("http://localhost:1300/addformdata", data);
    if (res.data.success === "yes") {
      var formarray = res.data.data;
      var arey = [...formdata];
      var obj = {};
      obj["component"] = <Textarea />;
      obj["id"] = formarray;
      arey.push(obj);
      setFormdata(arey);
    }
    formlisting(form_id);
  };

  const button = async () => {
    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      field_type: "button",
      field_label: "Submit",
      placeholder: "null",
      options: "null",
      form_number: form_id,
    };
    // console.log("data", data);
    const res = await axios.post("http://localhost:1300/addformdata", data);
    if (res.data.success === "yes") {
      var formarray = res.data.data;
      var arey = [...formdata];
      var obj = {};
      obj["component"] = <SubmitButton />;
      obj["id"] = formarray;
      arey.push(obj);
      setFormdata(arey);
    }
    formlisting(form_id);
  };

  const handledelelebyid = async (component_id) => {
    var user_id = localStorage.getItem("user_id");
    var data = {
      component_id: component_id,
      user_id: user_id,
      form_id: form_id,
    };
    // console.log("data", data);
    const res = await axios.post(
      "http://localhost:1300/deletefieldfrommyforms",
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

  const saveformredirect = async () => {
    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      form_id: form_id,
    };
    const res = await axios.post(
      "http://localhost:1300/updateformbyuser",
      data
    );
    if (res.data.success === "yes") {
      // formlisting(form_id)
      setvalidate("show")
    } 
  };

  const handledeleteform =async()=>{
    var user_id = localStorage.getItem("user_id");
    var data = {
      user_id: user_id,
      form_id:form_id
    };
    const res = await axios.post("http://localhost:1300/deleteformofuser", data);
    if (res.data.success === "yes") {
    oldforms();
    setopenform(false)
    }
  }

  return (
    <FormProvider value={{validate}}>
    <div>
      <div className="formbtns">
        {formbtns.map((pro, index) => {
          return (
            <div
              key={index}
              className="formfieldssaved"
              onClick={() => handleopenform(pro.id)}
            >
              Form No {index + 1}
            </div>
          );
        })}
      </div>
      <div>
        {openform == false ? (
          <div
            style={{
              position: "relative",
              top: "150px",
              fontSize: "25px",
              border: "2px solid grey",
              display: "flex",
              justifyContent: "center",
              height: "500px",
              alignItems: "center",
            }}
          >
            Click On Form Above To Get Details
          </div>
        ) : (
          <>
            <div id="main-conuser">
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
                    marginTop: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    saveformredirect();
                  }}
                >
                  Save Form
                </div>
              </div>
              <div className="form-items">
                <div className="deleteform" onClick={()=>handledeleteform()}>Delete form</div>
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
          </>
        )}
      </div>
    </div>
    </FormProvider>
  );
};

export default Create_form;
