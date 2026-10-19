import Logo from "../../assets/images/logo.svg";
import Lupa from "../../assets/images/lupa.svg";
import Carrinho from "../../assets/images/carrinho.svg";
import Logout from "../../assets/images/logout.svg";

import styles from "../Header/Header.module.scss";

const Header = () => {
    return (
        <header className={styles.cabecalho}>
            <a
                className={styles.logo}
                href="/"
                aria-label="Kurio - Página Inicial"
            >
                <img src={Logo} alt="Logo Kurio" />
            </a>
            <nav
                className={styles.navegacao}
                aria-label="Navegação principal"
            >
                <ul>
                    <li><a className={styles.destaque} href="#inicio">Início</a></li>
                    <li><a href="#mercado">Mercado</a></li>
                    <li><a href="#criadores">Criadores</a></li>
                    <li><a href="#aprenda">Aprenda</a></li>
                </ul>
            </nav>
            <div className={styles.acoes}>
                <button
                    className={styles.lupa}
                    type="button"
                    aria-label="Pesquisar"
                >
                    <img src={Lupa} alt="Lupa" />
                </button>
                <button
                    className={styles.carrinho}
                    type="button"
                    aria-label="Carrinho de compras"
                >
                    <img src={Carrinho} alt="Carrinho" />
                </button>
                <button
                    className={styles.login}
                    type="button"
                >
                    <img src={Logout} alt="Login" />
                    <span>Entrar</span>
                </button>
            </div>
        </header>
    );
}

export default Header;
