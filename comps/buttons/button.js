import React from 'react';
import styled from 'styled-components/native';

const BtnCont = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${props => props.Width};
  height: ${props => props.Height};
  background-color: ${props => props.BgColor};
`;

const BtnText = styled.Text`
  color: #FFFFFF;
`;

export default function Button({
  width = '172px',
  height = '66px',
  bgColor = '#280BB5',
  text = 'Confirm'
}) {
  return (
    <BtnCont
      Width={width} 
      Height={height}
      BgColor={bgColor}
    >
      <BtnText>{text}</BtnText>
    </BtnCont>
  );
}