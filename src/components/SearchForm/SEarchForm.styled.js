import styled from 'styled-components';
export const Searchbar = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const SearchFormButton = styled.button`
  display: inline-block;
  margin-right: 20px;
  border-radius: 8px;
  height: 38px;
  border: 0;
  font-size: 15px;
  opacity: 0.7;
  transition: opacity 20ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`;

export const SearchFormInput = styled.input`
  display: inline;
  /* width: 100%; */
  height: 38px;
  font: inherit;
  font-size: 20px;
  border: none;
  border-radius: 8px;
  outline: none;
  padding-left: 14px;
  padding-right: 4px;
`;
