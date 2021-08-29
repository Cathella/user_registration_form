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
`
export const Form = styled.div`
  position: relative;
  margin: 2em auto 6em;
  border: 1.4px solid gray;
  padding: 3em 0;
  display: flex;
  flex-direction: column;
  width: 30%;
  border-radius: 30px;
  background: #e6f4f4;
  box-sizing: border-box;
`
export const Select = styled.select`
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1.4px solid gray;
  padding: 0 1em;
` 
export const Label = styled.label`
  width: 100%;
  text-align: center;
  font-size: 1.4em;
  font-weight: bold;
  box-sizing: border-box;
  text-transform: capitalize;
`
export const Input = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 10px;
  border: 1.4px solid gray;
  box-sizing: border-box;
  padding: 0 1em;
`
export const Field = styled.div`
  width: 70%;
  box-sizing: border-box;
  margin: 0 auto 1.2em;
  text-align: center;
`

const Elements = () => {
  return (
    <div></div>
  )
}

export default Elements
