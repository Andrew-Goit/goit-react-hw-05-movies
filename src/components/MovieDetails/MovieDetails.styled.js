import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const GoBackBtn = styled(Link)`
  margin-top: 12px;
  margin-bottom: 12px;
  width: 80px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  border: 1px solid #aaa;
  border-radius: 5px;
  background-color: lightgray;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
  color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active,
  :hover {
    color: white;
    background-color: purple;
`;

 export const BackText = styled.span`
 margin-left: 10px;
 `

export const FilmWrap = styled.div`
  display: flex;
  border-bottom: 2px solid #aaa;
  padding-bottom: 15px;
`;

export const DescriptionWrap = styled.div`
  padding: 50px;
`;

export const Title = styled.h2`
  font-size: 25px;
  margin-bottom: 30px;
`;

export const PostTitle = styled.h3`
  margin-bottom: 20px;
  margin-top: 36px;
`;

export const Text = styled.p`
  margin-bottom: 36px;
`;

export const InfoWrap = styled.div`
  padding-bottom: 15px;
  border-bottom: 2px solid #aaa;
`;

export const JumpLink = styled(Link)`
  margin-bottom: 15px;
  color: #222;
  padding: 2px 7px;
  margin-left: 15px;
  border-radius: 5px;
  border: 1px solid #555;
  transition: border-color 250ms linear, color 250ms linear,
  background-color 250ms linear
  ;

  &:hover {
    border-color: purple;
    color: #fff;
    background-color: purple;
  }
`;
