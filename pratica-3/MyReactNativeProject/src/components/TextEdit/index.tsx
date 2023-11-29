import React from 'react';
import styled from 'styled-components/native';

interface TextEditProps {
  placeholder?: string;
  textColor?: string;
  backgroundColor?: string;
}

const TextInput = styled.TextInput<TextEditProps>`
  color: ${({ textColor }) => textColor || 'black'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
`;

const TextEdit: React.FC<TextEditProps> = ({
  placeholder,
  textColor,
  backgroundColor,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      textColor={textColor}
      backgroundColor={backgroundColor}
    />
  );
};

export default TextEdit;
