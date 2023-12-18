import styled from "styled-components/native";


interface LabelSty {
    fg?:string;
}

const Container = styled.Text<LabelSty>`

    color: ${ (p:LabelSty)=>p.fg ? p.fg : '#F2EEF2' };

`;

export {Container}