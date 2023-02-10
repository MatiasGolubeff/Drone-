import styled from 'styled-components';

export const Container = styled.div`

display: flex;
align-items: center;
flex-direction: column;
justify-content:center;

  form{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-size: 10;
    input{
      padding:1%;
      width: 100%;
      height: 40px;
      border-radius: 5px;
      color:  var(--orange);
      &:focus {
        color: var(--orange);
        border: 1px solid (--orange);
        &:focus {
          border: 2px solid var(--orange);
        }
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding:1%;
      outline: none;
      border-radius: 5px;
      color: var(--orange);
      border: 1px solid black;
      &:focus {
        border: 2px solid var(--orange);
      }
    }
    label {
      margin-top: 1rem;
      color: white;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      color: var(--orange);
      border: none;
    }
    button{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      margin-top: 2rem;
      background-color: var(--orange);
      border-radius: 1.4rem;
      padding: 1rem;
      transition: background-color 0.25s;
      &:hover{
        background-color: var(--orange);
        a{
          color: #FFF;
        }
   }
  }
`;
