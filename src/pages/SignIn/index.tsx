import React, {useRef, useCallback} from 'react';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors'

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';

import Button from '../../components/Button';

const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null);



  const handleSubmit = useCallback(async (data: object) =>{
    try{
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required('E-mail is required').email('Enter a valid e-mail'),
        password: Yup.string().required('Password is required'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

    }catch(err){
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors)
    }
  }, []);

  return (

  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Please login</h1>

        <Input name="email" icon={FiMail} placeholder="E-mail"/>
        <Input name="password" icon={FiLock} type="password" placeholder="Password" />
        <Button type="submit">Log in</Button>
      </Form>

      <a href="login">
        <FiLogIn/>
        SignUp
        </a>
    </Content>
      <Background />

  </Container>
);
};
export default SignIn
