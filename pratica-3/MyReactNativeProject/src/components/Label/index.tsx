import React from 'react';
import { Text } from 'react-native';

interface LabelProps {
  text: string;
  textColor?: string;
  fontSize?: number;
}

const Label: React.FC<LabelProps> = ({ text, textColor = 'black', fontSize = 16 }) => {
  return (
    <Text style={{ color: textColor, fontSize: fontSize }}>
      {text}
    </Text>
  );
};

export default Label;
