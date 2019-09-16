import styled from 'styled-components'

export const Wapper = styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
`;

export const Container = styled.div`
  flex: 1;
  display:flex;
`;

export const Content = styled.div`
  flex:1;
  display: flex;
  flex-direction:column;

  background: linear-gradient(to bottom, #414141 0%, #181818 100%), transparent;
  background-size:100% 250px;
  background-position:top;
  background-repeat:no-repeat;
`;