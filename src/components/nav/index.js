import styled from 'styled-components'

export const ContainerNav = styled.nav`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 5%;
    border-bottom:1px solid #cc292e;

    & .left {
        width: 45%;
        img {
            width:45%;
        }
    }

    & .rigth{
        width: 50%;
        ul {
            display: flex;
            justify-content: center;
        }
        li {
            margin:0 3px;
        }
        a{
            box-shadow: 0px 7px 1px -4px #ff0;
            background-color:#cc292e;
            border-radius:150px;
            display:inline-block;
            cursor:pointer;
            color:#ffffff;
            font-family:Arial;
            padding:16px 20px;
            transition:all 0.3s ease 0s;
            &:hover {
                background-color:#ff0;
                color:#cc292e;
            }
            &:active {
                position:relative;
                top:1px;
            }
        }
    }
    
`