import { useState } from 'react';
import * as S from './styled';

import NotFoundIMG from '../../assets/images/NotFound/not-found.png';

const NotFound = () => {
  const [counter, setConter] = useState(0);

  function increment() {
    setConter(counter + 1);
  }

  return (
    <S.NotFound>
      <S.NotFoundContainer>
        <S.NotFoundLeft>
          <S.NotFoundTitle onClick={increment}>
            Ih, essa página não foi encontrada {counter}
          </S.NotFoundTitle>
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
