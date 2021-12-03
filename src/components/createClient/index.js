import styled from 'styled-components'

export const ContainerClient = styled.div`
    padding: 20px 5%;

    & form{
        border: 1px solid white;
        display: flex;
        flex-direction: column;
        align-items: flex-start
    }
    & label{
        padding:10px 0;
    }
    & input{
        border:0.5px solid #ccc;
        border-radius: 3px;
        padding:5px 100px 5px 30px;
        margin-bottom:20px;
        margin-left: 0px;
        &:focus{
            outline:0;
            border-color: #cc292e;
            transition: all 0.3s ease-in-out;
        }
    }
    & button{
        border:none;
        border-radius: 8px;
        padding:10px 130px;
        background-color: #00b894;
        cursor: pointer;
        color: white;
        transition: all 0.3s ease-in-out;

        &:hover{
            background-color: #498990;
            transition: all 0.3s ease-in-out;

        }
    }
`