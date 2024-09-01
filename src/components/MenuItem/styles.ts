import styled from 'styled-components';
import { BsFillCartPlusFill } from "react-icons/bs";


export const Container = styled.div`
 display: flex;
 flex-direction: column;
 width: 220px;
`;

export const CartContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
`;

export const ContentImage = styled.img`
    width: 220px;
    height: 200px;
    border-radius: 8px;
    object-fit: cover;
`;

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 10px;
`;

export const Icon = styled(BsFillCartPlusFill)`
    color: var(--primary);
`;