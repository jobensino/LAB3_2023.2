import React from 'react';

import {
	ReplyButtons,
	Message,
	YesButton,
	NoButton,
	Container
} from './modalreply.styles';

interface ModalReplyProps {
	onConfirm: () => void,
	onCancel: () => void,
    message?: string,
}

const ModalReply: React.FC<ModalReplyProps> = ({onCancel,onConfirm,message}) => {
	return (
	<Container>
      {message && <Message>{message}</Message>}
      <ReplyButtons>
        <YesButton onClick={onConfirm}>✔️</YesButton>
        <NoButton onClick={onCancel}>🗙</NoButton>
      </ReplyButtons>
	</Container>
	);
};

export {ModalReply}