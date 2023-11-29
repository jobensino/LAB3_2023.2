import React from 'react';
import styled from 'styled-components/native';

interface LayoutSpliterProps {
  vertical?: boolean;
  firstSectionSize?: string; // Porcentagem, por exemplo, '50%'
  secondSectionSize?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
}

const Container = styled.View<LayoutSpliterProps>`
  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
`;

const Section = styled.View<LayoutSpliterProps>`
  flex: ${({ firstSectionSize, secondSectionSize, vertical }) =>
    vertical ? firstSectionSize || '1' : secondSectionSize || '1'};
`;

const LayoutSpliter: React.FC<LayoutSpliterProps> = ({
  children,
  vertical,
  firstSectionSize,
  secondSectionSize,
  backgroundColor,
}) => {
  const [firstChild, secondChild] = React.Children.toArray(children);

  return (
    <Container vertical={vertical} backgroundColor={backgroundColor}>
      <Section vertical={vertical} firstSectionSize={firstSectionSize}>
        {firstChild}
      </Section>
      <Section vertical={vertical} secondSectionSize={secondSectionSize}>
        {secondChild}
      </Section>
    </Container>
  );
};

export default LayoutSpliter;
