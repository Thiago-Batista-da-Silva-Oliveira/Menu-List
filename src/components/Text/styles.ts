import styled from 'styled-components';

interface IProps extends React.HTMLAttributes<HTMLParagraphElement> {
    size?: 'sm' | 'md' | 'lg';
    fontWeight?: 'normal' | 'bold';
}

export const Text = styled.p<IProps>`
  font-size: ${({ size }) => size === 'sm' ? '12px' : size === 'md' ? '16px' : '24px'};
  font-weight: ${({ fontWeight }) => fontWeight === 'bold' ? 'bold' : 'normal'};
`;