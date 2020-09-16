import React, { useCallback, useRef} from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';

import Button from '../../components/Button';

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null);



  const handleSubmit = useCallback(async (data: object) =>{
    try{
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required('E-mail is required').email('Enter a valid e-mail'),
        password: Yup.string().required('Password is required').min(6, 'Minimum of 6 digits'),
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
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
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

export default SignUp
