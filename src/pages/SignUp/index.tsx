import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';

import Button from '../../components/Button';

const SignIn: React.FC = () => {

  function handleSubmit(data: object): void{
    console.log(data)
  }
  return (


    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form onSubmit={handleSubmit}>
          <h1>Sign up</h1>

          <Input name="name" icon={FiUser} placeholder="Name"/>
          <Input name="email" icon={FiMail} placeholder="E-mail"/>
          <Input name="password" icon={FiLock} type="password" placeholder="Password" />
          <Button type="submit">Join now</Button>

        </Form>

        <a href="login">
          <FiArrowLeft/>
          Back to login page
          </a>
      </Content>


    </Container>
  );
}

export default SignIn
