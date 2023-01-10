import styled,{css} from "styled-components";

const subColor='grey';
const mainColor='black';

const shrinkLabelStyles=css`
top: -14px;
font-size:12px;
color:${mainColor};
`;

type FormInputLabelProps={
  shrink?:boolean;
}

export const FormInputLabel=styled.label<FormInputLabelProps>`
color:${subColor};
font-size: 16px;
font-weight: normal;
position: absolute;
pointer-events: none;
left: 5px;
top: 10px;
transition: 300ms ease all;

${({shrink})=>shrink && shrinkLabelStyles};
`

export const Input=styled.input`
background: none;
background-color: white;
color: ${subColor};
font-size: 18px;
padding: 10px 10px 10px 5px;
display: block;
width: 70%;
border: none;
border-radius: 0;
border-bottom: 1px solid ${subColor};
margin: 25px 0;



&:focus{
outline: none;
}
&:focus ~ ${FormInputLabel}{
${shrinkLabelStyles};
}
`

export const Group=styled.div`
position: relative;
margin: 45px 0;

input[type='password']{
  letter-spacing: 0.3em;
}

`

/* @mixin shrinkLabel{
    top: -14px;
    font-size:12px;
    color:black;

} */
// .group{
  
//     width: 40%;
//     padding-bottom: 12px;

// }
// .form-input{
//     background: none;
//     background-color: white;
//     color: gray;
//     font-size: 18px;
//     padding: 10px 10px 10px 5px;
//     display: block;
//     width: 100%;
//     border: none;
//     border-radius: 0;
//     border-bottom: 1px solid grey;
//     margin: 25px 0;

// }

// :focus{
//     outline: none;
// }
// :focus .form-input-label{
//     z-index: 10;
// }
// .form-input-label{
   
// }
// :focus{
//     outline: none;
// }



/* .group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 50%;
  }
  
  .form-input{
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 1.3rem;
    color:black;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
    
  }
  .form-input::label {
    color: transparent;
  }
  .form-input:label-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
  
  .form-input-label {
    position:absolute;
    top: 20px;
    display: block;
    transition: 0.2s;
    font-size: 16px;
    color:gray;
  }
  
  .form-input:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }
  .form-input:focus ~ .form-input-label {
    position: absolute;
    top: 0;
   
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #11998e;
    font-weight: 700;
  }
  
  /* reset input
  .form-input:required, .form-input:invalid {
    box-shadow: none;
  } */ 