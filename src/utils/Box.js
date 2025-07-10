import styled from 'styled-components'

export const Box = styled.div`
  padding: ${({ p, theme }) => p && theme.spacing[p]};
  margin: ${({ m, theme }) => m && theme.spacing[m]};
  background-color: ${({ bg, theme }) => bg && theme.colors[bg]};
  border-radius: ${({ rounded, theme }) =>
        rounded ? theme.borderRadius[rounded] || theme.borderRadius.DEFAULT : '0'};
  width: ${({ w }) => w || 'auto'};
  height: ${({ h }) => h || 'auto'};
  `