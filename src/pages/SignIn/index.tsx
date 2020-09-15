import React from 'react';
import { FiMail, FiUser, FiLock, FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';

import Button from '../../components/Button';

const SignUp: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Please login</h1>

        <Input name="email" icon={FiMail} placeholder="E-mail"/>
        <Input name="password" icon={FiLock} type="password" placeholder="Password" />
        <Button type="submit">Log in</Button>
      </form>

      <a href="login">
        <FiLogIn/>
        SignUp
        </a>
    </Content>
      <Background />

  </Container>
);

export default SignUp
