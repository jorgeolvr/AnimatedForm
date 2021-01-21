import styled from 'styled-components/macro';

export const Title = styled.h1`
  font-family: gothic-open-shaded, sans-serif;
  font-weight: 400;
  font-style: normal;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
	flex-direction: column;
	text-align: center;
`;

export const Form = styled.form`
	font-family: sofia-pro, sans-serif;
`;

export const Field = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  border-bottom: 2px dashed #afafaf;
  margin: 4em auto 1rem;
  transition: 500ms;

  ::after {
    content: "";
    position: relative;
    display: block;
    height: 4px;
    width: 100%;
    background: #d16dff;
    transform: scaleX(0);
    transform-origin: 0%;
    opacity: 0;
    transition: all 500ms ease;
    top: 2px;
  }

  :focus-within {
    border-color: transparent;
  }

  :focus-within Label, Input:not(:placeholder-shown) + Label  {
    transform: scale(0.8) translateY(-5rem);
    opacity: 1;
  }

  :focus-within::after {
    transform: scaleX(1);
    opacity: 1;
  }
`;

export const Email = styled.input`
  outline: none;
  border: none;
  overflow: hidden;
  margin: 0;
  width: 100%;
  padding: 0.25rem 0;
  background: none;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  transition: border 500ms;

  :valid {
    color: yellowgreen;
  }

  :invalid {
    color: orangered;
  }
`;

export const Password = styled.input`
  outline: none;
  border: none;
  overflow: hidden;
  margin: 0;
  width: 100%;
  padding: 0.25rem 0;
  background: none;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  transition: border 500ms;
`;

export const Label = styled.label`
  color: #afafaf;
  font-size: 1.2rem;
  z-index: -1;
  position: absolute;
  transform: translateY(-2rem);
  transform-origin: 0%;
  transition: transform 400ms;
`;

export const Span = styled.span`
  position: absolute;
  cursor: help;
  font-size: 0.8rem;
  right: 0.25rem;
  bottom: 0.5;
`;

export const Strength = styled.div`
  display: flex;
  height: 20px;
  width: 100%;
`;

export const FirstBar = styled.span`
  margin-right: 5px;
  height: 100%;
  width: 25%;
  transition: box-shadow 500ms;
  box-shadow: inset 0px 20px #1f1f1f;
  background: linear-gradient(to right, red, orangered);
`;

export const SecondBar = styled.span`
  margin-right: 5px;
  height: 100%;
  width: 25%;
  transition: box-shadow 500ms;
  box-shadow: inset 0px 20px #1f1f1f;
  background: linear-gradient(to right, orangered, yellow);
`;

export const ThirdBar = styled.span`
  margin-right: 5px;
  height: 100%;
  width: 25%;
  transition: box-shadow 500ms;
  box-shadow: inset 0px 20px #1f1f1f;
  background: linear-gradient(to right, yellow, yellowgreen);
`;

export const FourthBar = styled.span`
  margin-right: 5px;
  height: 100%;
  width: 25%;
  transition: box-shadow 500ms;
  box-shadow: inset 0px 20px #1f1f1f;
  margin-right: 0;
  background: linear-gradient(to right, yellowgreen, green);
`;

export const Button = styled.button`
  margin-top: 2rem;
  padding: 10px 30px;
  font-weight: bold;
  border: 2px solid greenyellow;
  color: greenyellow;
  border-radius: 100px;
  background: transparent;
  transition: all 1000ms;

  :disabled {
    border-color: #afafaf;
    color: #afafaf;
  }
`;

export const Column = styled.ul`
  list-style: none;
  margin: 10px 0;
  padding: 0;
  font-size: 0.7rem;
  text-align: left;
`;

export const Line = styled.li`
  color: white;
  font-weight: bold;
`;