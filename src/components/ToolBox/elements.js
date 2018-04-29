import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  overflow-y: overlay;
  overflow-x: auto;
`;

export const EntryContainer = styled.span`
  
`;

export const ItemTitle = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin: 1rem;
  margin-bottom: 0.5rem;
`;

export const Icon = styled.div`
  position: relative;
  display: inline-block;
  transition: 0.3s ease color;
  color: rgba(255, 255, 255, 0.5);
  padding-left: 0.5rem;
  &:hover {
    color: white;
  }
`;
