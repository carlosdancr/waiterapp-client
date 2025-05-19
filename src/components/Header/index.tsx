import logo from '../../assets/images/logo.svg';

import * as S from './styles';

export function Header() {
  return (
    <S.Header>
      <S.Container>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>

        <img src={logo} alt="WAITERAPP - O App do Garçom" />
      </S.Container>
    </S.Header>
  );
}
