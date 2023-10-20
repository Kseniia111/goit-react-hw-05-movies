import styled from 'styled-components';

export const InputSearch = styled.input`
  font-weight: 500;
  font-size: 16px;
  padding: 12px;
  color: rgba(255, 255, 255, 0.2);
  background: #064e8a;
  border-radius: 8px;
  :active,
  :focus,
  :hover {
    color: white;
  }
`;
export const ButtonSearch = styled.button`
  padding: 8px 16px;
  margin: 16px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-size: 16px;
  background-color: #064e8a;
  cursor: pointer;
`;
// export const Icon = styled(FcSearch)`
//   width: 25px;
//   height: 25px;
//   position: relative;
//   right: 56px;
//   z-index: 1;
//   opacity: 0.7;
// `;

// font-weight: 500;
// font-size: 18px;
// line-height: 27px;

// margin-left: 12px;
// padding: 15px 16px;

// color: rgba(255, 255, 255, 0.2);

// background: #2b2b2b;
// border-radius: 10px;

// :not(:disabled):active,
// :focus,
// :not(:disabled):hover {
//   color: white;
// }

// export const Form = styled.form`
//   display: flex;
//   align-items: center;
//   gap: 1.5rem;
//   padding: 0 16px;
//   flex-wrap: wrap;

//   input {
//     font-size: 1rem;
//     padding: 8px 32px 8px 8px;
//     width: 250px;
//     background-color: transparent;
//     border: none;
//     border-bottom: 2px solid #064e8a;
//     outline: none;
//   }
// `;
