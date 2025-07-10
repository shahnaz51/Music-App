import styled from 'styled-components'

export const Text = styled.p`
  font-size: ${({ size }) => size || '1rem'};
  color: ${({ color, theme }) => theme.colors[color] || theme.colors.textHigh};
  margin: 0;
`