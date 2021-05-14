import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../../lib/apollo/mutation";
import { handleLogin } from "../../../lib/redux/actions/authentication";
import Button from "../../Item/Button/Button";
import Input from "../../Item/Input/Input";
import useAuthentication from "../../../lib/hooks/useAuthent";
import GoogleBtn from "./GoogleBtn";
import LoginForm from "../LoginForm/LoginForm";
import ModalBase from "../../Modals/Modal/ModalBase";

import imgProfil from "../../../assets/img-profil.png"

import "./RegisterFormStyleSheet.scss";


const RegisterForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, watch, errors } = useForm();
  const [modalLoginIsOpen,setLoginIsOpen] = useState(false);
  const { handleUserRegistration } = useAuthentication(dispatch);
  // const [addUser, { data }] = useMutation(ADD_USER);

  const onSubmit = data => {

    const newUser = {
     ...data,
     imgProfil
    }

    
    console.log(newUser,"newuser")
    handleUserRegistration(newUser).then(() => {
      
      console.log("successsfuly");
    });
  };


  
  const openLoginModal =()=>{
      setLoginIsOpen(true)

  }

  const closeLoginModal =()=>{
      setLoginIsOpen(false)
  }

 
  return (
    <div className="RegisterForm-Container">
      <div className="RegisterForm-Title">
        <h2>Register</h2>
      </div>
      <form className="RegisterForm-Form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="name"
          name="name"
          // defaultValue={defaultValue && 'test'}
          inputRef={register}
        />
        <Input
          placeholder="email"
          name="email"
          // defaultValue={defaultValue && 'test'}
          inputRef={register}
        />

         <Input
          placeholder="password"
          name="password"
          // defaultValue={defaultValue && 'test'}
          inputRef={register}
        />
        <select className='FormBase-input' name="role" ref={register}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
        </select>
        <Button
          buttonStyles="color-white"
          buttonSize="small"
          onclick={onSubmit}
        >
          Register
        </Button>
      </form>
      <div style={{ margin: "20px" }}>
        {/* <GoogleBtn /> */}
        <Button
          buttonStyles="color-white"
          buttonSize="small"
          onclick={openLoginModal}
          >
            Login
          </Button>
      </div>
      
      <ModalBase closeModal={closeLoginModal} modalIsOpen={modalLoginIsOpen}>
          <LoginForm/>
      </ModalBase>
    </div>
  );
};

export default RegisterForm;
