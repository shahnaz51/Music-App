import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  gap: ${({ gap, theme }) => (gap ? theme.spacing[gap] : '0')};
  padding: ${({ p, theme }) => p && theme.spacing[p]};
`