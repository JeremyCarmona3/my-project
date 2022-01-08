import React from 'react';
import styled from 'styled-components/native';

const MainCont = styled.View`
width:250px;
height:500px;
background-color:#33B0CC;
border-radius:12px;
display:flex;

`

const CardText = styled.Text`
`

const TextCont = styled.View`

`
export default function Card ({
  text="haha"
}) {
  return <MainCont>
      <TextCont>
      <CardText>{text}</CardText>
      <CardText>{text}</CardText>
    </TextCont>
  </MainCont
    >
}