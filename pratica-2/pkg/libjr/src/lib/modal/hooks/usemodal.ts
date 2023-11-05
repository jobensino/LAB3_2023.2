import { useState } from 'react';

const useModal = () => {

	const [open, setOpen] = useState<boolean>(false);

	const toggle = () => setOpen(!open);

	return {open,toggle};
};

export {useModal}