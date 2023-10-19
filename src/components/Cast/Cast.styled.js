import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin: 20px 0;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  height: 500px;
  overflow-y: scroll;
  transition: all 0.2s ease-in-out;
  padding: 10px;
  overflow: overlay;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 20px;
`;

export const Item = styled.li`
  margin-top: 20px;
  img {
    border-radius: 5px;
  }
`;
