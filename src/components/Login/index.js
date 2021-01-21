import React, { useState, useEffect } from 'react';
import {
  Main, Title, Form, Field, Email, Password, Label, Span, Column,
  FirstBar, SecondBar, ThirdBar, FourthBar, Strength, Line, Button
} from './style';

export default function Login() {
  const [strength, setStrength] = useState(0);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validations, setValidations] = useState([])

  useEffect(() => {
    setPassword('');
  }, [])

  function validatePassword(event) {
    const password = event.target.value;

    let validations = [
      (password.length > 5),
      (password.search(/[A-Z]/) > -1),
      (password.search(/[0-9]/) > -1),
      (password.search(/[$&+,:;=?@#]/) > -1)
    ]

    setValidations(validations);
    setStrength(validations.reduce((acc, cur) => acc + cur, 0));
    setPassword(password);
  }

  return (
    <Main>
      <Title>Login</Title>
      <Form>
        <Field>
          <Email
            type="email"
            name="email"
            placeholder=" "
            autoComplete="off"
          />
          <Label for="email">Email</Label>
        </Field>
        <Field>
          <Password
            type={showPassword ? 'text' : 'password'}
            name="email"
            placeholder=" "
            value={password}
            className={strength > 3 ? 'valid' : 'invalid'}
            onChange={event => validatePassword(event)}
          />
          <Label for="password">
            Senha
          </Label>
          <Span
            onMouseEnter={() => setShowPassword(true)}
            onMouseLeave={() => setShowPassword(false)}
          >
            {showPassword ? '🙈' : '👁️'}
          </Span>
        </Field>
        <Strength>
          <FirstBar className={strength > 0 ? 'bar-show' : ''} />
          <SecondBar className={strength > 1 ? 'bar-show' : ''} />
          <ThirdBar className={strength > 2 ? 'bar-show' : ''} />
          <FourthBar className={strength > 3 ? 'bar-show' : ''} />
        </Strength>
        <Column>
          <Line> {validations[0] ? '✔️' : '❌'} deve conter pelo menos 5 caracteres</Line>
          <Line> {validations[1] ? '✔️' : '❌'} deve conter uma letra maiúscula</Line>
          <Line> {validations[2] ? '✔️' : '❌'} deve conter um número</Line>
          <Line> {validations[3] ? '✔️' : '❌'} deve conter caractere especial</Line>
        </Column>
        <Button disabled={strength < 4}>Entrar</Button>
      </Form>
    </Main>
  );
}