import styled from 'styled-components'

export const Container = styled.div`
    margin: 30px 0;
    cursor: pointer;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`

export const Info = styled.div`
    flex:1;
    margin-right: 20px;
`

export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: #DFBD69;
`

export const Description = styled.div`
    text-align: right;
    font-size: 13px;
    color: #DFBD69;
`

export const IconArea = styled.div<{active:boolean}>`
    width:50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#DFBD69' : '#0D1A1A'};
    display:flex;
    align-items:center;
    justify-content: center;
`

export const Point = styled.div<{active:boolean}>`
    width:6px;
    height: 6px;
    border-radius: 50%;
    border: 3px solid #0D1A1A;
    margin-left: 30px;
    margin-right: -6px;
    background-color: ${props => props.active ? '#DFBD69' : '#0D1A1A'};

`