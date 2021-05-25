import styled from 'styled-components';

export const NotFound = styled.div`
  width: 100%;
  background-color: white;
`;

export const NotFoundContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 765px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NotFoundLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NotFoundRight = styled.div`
  padding: 0 1rem;

  @media (max-width: 765px) {
    img {
      max-width: 100%;
    }
  }
`;

export const NotFoundTitle = styled.h1`
  font-size: 2.8125rem;
  color: #000000;
  text-transform: uppercase;
  max-width: 450px;
  font-family: 'SimplonHeadline', 'Roboto', 'Open Sans', sans-serif;

  @media (max-width: 900px) {
    font-size: 2rem;
    max-width: 100%;
  }

  @media (max-width: 765px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const NotFoundDescription = styled.p`
  color: #909090;
  padding: .9375rem 0;
  line-height: 1.2;
  font-size: 1.095rem;
`;

export const NotFoundLink = styled.a`
  color: #909090;
  text-decoration: none;
  border-bottom: 1px solid #909090;
  padding-bottom: .1rem;

  &:hover {
    border-bottom: 0;
  }
`;


