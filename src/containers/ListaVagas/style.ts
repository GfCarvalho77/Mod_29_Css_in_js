import styled from 'styled-components'

const VagasTagUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr cfr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export default VagasTagUl
