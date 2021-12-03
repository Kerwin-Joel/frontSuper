import styled from 'styled-components'

export const ContainerAnalytics = styled.div`

    padding:  5%;


    & .container-search{
        display: flex;
        align-items: center;

        & button{
            /* position: relative; */
        }

        & img{
            width: 15%;
            position: absolute;
            right: 10px;
            top: 5px; 
        }
        & .search{
            position: relative;
            display: flex;
            width: max-content;
            margin-left: 25px;
        }
        & input{
            padding: 14px 60px;
            padding-left: 15px;
            border: none;
            border-bottom: .5px solid red;
            border-radius: 100px;
            &::focus{
                border: none;
            }
        }
    }

    & .container{
        display: flex;
        margin-top: 50px;
        justify-content: space-between;
    }
    & .left{
        width: 30%;
    }
    & .rigth{
        width: 50%;
    }
    
    @media (max-width: 768px) {
        & .container{
            flex-direction: column;
            & .left{
                width: 100%;
            }
            & .rigth{
                width: 100%;
            }
        }
    }


`