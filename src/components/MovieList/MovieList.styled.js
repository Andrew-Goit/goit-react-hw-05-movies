import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
margin-top: 30px;
`;

export const ListWraper = styled.div`
margin-left: auto;
margin-right: auto;
margin-bottom: 40px;
margin-top: 30px;
display: grid;
justify-content: center;
grid-auto-rows: auto;
grid-template-columns: repeat(3, 1fr);
grid-gap: 15px 20px;
max-width: 1200px;
`;

export const ListTitle = styled.p`
margin-top: 10px;
text-align: center;
font-size: 22px;
font-weight: 700;
`;

export const CardWraper = styled.div`
display: flex;
flex-direction: column;
`;

export const Element = styled.li`
  margin-top: 0px;
  display: block;
  align-items: center;
  border-radius: 5px;
`;

export const FilmImage = styled.img`
  margin-top: 12px;
  border-radius: 5px;
  width: 350px;
`;

export const FilmLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  color: #222;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
  box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.05);
    box-shadow: 0px -4px 28px rgba(0, 0, 0, 0.25), 0px 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const FilmTitle = styled.p`
margin-top: 8px;
margin-bottom: 8px;
`;
