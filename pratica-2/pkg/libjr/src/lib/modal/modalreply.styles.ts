import styled from 'styled-components';

const fg = '#2B2929';
const bg = '#B3B7B4';


const Container = styled.div`
	display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0.5rem;
  column-gap: 1rem;
`;

const ReplyButtons = styled.div`
	display: flex;
  flex-direction: row;
  column-gap: 1rem;
`;

const Message = styled.div`
	font-size: 0.9rem;
	margin-bottom: 10px;
	text-align: center;
`;

const YesButton = styled.button`
  display: flex;
	margin-top: 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 11px 28px;
  border-radius: 12px;
  font-size: 0.8rem;
  border: none;
  color: ${fg};
  background-color: ${bg};
  transition: all 0.25s ease;

  &:hover {
    box-shadow: 0 10px 20px -10px rgba(255, 62, 78, 0.6);
    transform: translateY(-5px);
    background-color: ${bg};
  }
`;

const NoButton = YesButton;

export {Container,Message,YesButton,NoButton,ReplyButtons}