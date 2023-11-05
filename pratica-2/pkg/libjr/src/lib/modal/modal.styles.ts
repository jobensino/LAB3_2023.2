import styled from 'styled-components';

const bg = "#1C1C1C";
const fg = "#F2F2F2"
const hg = "#2F2F2F";

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;    
`;

const Wrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 700;
	width: inherit;
	outline: 0;
`;

const Backdrop = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(32, 32, 32, 0.3);
	z-index: 500;
`;

const StyledModal = styled.div`
	z-index: 100;
	color: ${fg};
    background-color: ${bg};
	position: relative;
	margin: auto;
	border-radius: 8px;
    min-width: 16rem;
`;

const Header = styled.div`
	
	display: flex;

	justify-content: flex-start;
	align-items: center;

	padding: 0.3rem;
	color: ${fg};
	background-color: ${hg};

	border-radius: 8px 8px 0 0;

    overflow: hidden;
`;

const HeaderText = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
`;

const CloseButton = styled.button`

	display: flex;
    justify-content: center;

    font-size: 0.8rem;
    background: none;

    color: ${fg};
    background-color: ${bg};

    &:hover {
        cursor: pointer;
    }

	width: 1.6rem;

    border: none;
    border-style: solid ;
    border-width: 1px;
    border-color: ${hg};
    border-radius: 0.8rem;

    margin: 0px;
	padding: 4px;
`;

const Content = styled.div`
	display: flex;
    flex: 1;
        
    flex-direction: column ;

    justify-content: flex-start;
    align-items: center;
    
    color: ${fg};
    background-color: ${bg};
    
    overflow-x: hidden;
    overflow-y: auto;

    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;    

	max-height: 30rem;
`;

export const styles = {
    container:Container,
    wrapper: Wrapper,
    backdrop: Backdrop,
    styledmodal: StyledModal,
    header: Header,
    title: HeaderText,
    closebtn: CloseButton,
    content: Content

}