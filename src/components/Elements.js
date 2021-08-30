import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  border: 0;
  font-weight: bold;
  background: #FA64A9;
  color: #FFFFFF;
  text-transform: capitalize;
  height: 50px;
  border-radius: 25px;
`
export const Back = styled.button`
  width: 100%;
  border: 0;
  font-weight: bold;
  background: transparent;
  text-transform: capitalize;
  text-decoration: underline;
  cursor: pointer;
`
export const Form = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1.4px dashed gray;
  padding: 3em 0;
  display: flex;
  flex-direction: column;
  width: 30%;
  border-radius: 30px;
  background: #e6f4f4;
  box-sizing: border-box;

  animation-name: example;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes example {
    from {
      background: #e6f4f4;
    }

    to {
      background: #ffeeef;
    }
  }
`
export const Select = styled.select`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1.4px solid gray;
  background: transparent;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
` 
export const Label = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 1.3em;
  font-weight: bold;
  box-sizing: border-box;
`
export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1.4px solid gray;
  background: transparent;
  box-sizing: border-box;
  padding-top: 20px;

  :focus {
    outline: none;
  }
`
export const Field = styled.div`
  position: relative;
  width: 70%;
  box-sizing: border-box;
  margin: 0 auto 1.2em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const Elements = () => {
  return (
    <div></div>
  )
}

export default Elements
