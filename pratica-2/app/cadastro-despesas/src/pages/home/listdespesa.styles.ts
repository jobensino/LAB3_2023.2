import styled from 'styled-components';

export const Table = styled.table`
    font-size: .875rem;
    line-height: 1.25rem;
    table-layout: fixed;
    border-collapse: collapse;
    color: white;

    th, td {
        padding: .75rem;
        padding-left: 2rem;
        border-bottom: 1px solid #7b7b7b;
        border-left: 1px solid #7b7b7b;
    }

    th {
        font-size: 1rem;
    }

    td {
        border-left: 1px solid #7b7b7b;
    }
    th:first-child, td:first-child {
        border-left: none;
    }
`;

export const Titulo = styled.h2`
    color: floralwhite;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0px;
    padding: 0px;

    width: 100%;
    height: 100%;
    
    padding: 1rem;
`;
