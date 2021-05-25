import * as S from './styled';

import NotFoundIMG from '../../assets/images/NotFound/not-found.png';

const NotFound = () => {
  return (
    <S.NotFound>
      <S.NotFoundContainer>
        <S.NotFoundLeft>
          <S.NotFoundTitle>Ih, essa página não foi encontrada</S.NotFoundTitle>
          <S.NotFoundDescription>
            Talvez o endereço digitado esteja incorreto ou você tenha clicado em uma página que não
            existe.
            <br />
            <br />
            Você pode ver as opções do menu acima ou continuar a navegação pela{' '}
            <S.NotFoundLink href="https://www.oi.com.br">página inicial</S.NotFoundLink>.
          </S.NotFoundDescription>
        </S.NotFoundLeft>
        <S.NotFoundRight>
          <img src={NotFoundIMG} alt="Logotipo Página Não Encontrada" />
        </S.NotFoundRight>
      </S.NotFoundContainer>
    </S.NotFound>
  );
};

export default NotFound;
