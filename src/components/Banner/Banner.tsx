import MacacoIlustracao from "../../assets/images/macaco-ilustracao.png";

import styles from "../Banner/Banner.module.scss";

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.conteudo}>
                <div className={styles.informacoes}>
                    <span className={styles.subtitulo}>Bem-vindo à Kurio</span>
                    <h1 className={styles.titulo}>Seja dono do futuro da arte digital</h1>
                    <p className={styles.descricao}>
                        Descubra NFTs selecionados de criadores emergentes e consagrados.
                        Colecione arte digital rara, apoie artistas e tenha uma parte da cultura da internet.
                    </p>
                    <button
                        className={styles.botao}
                        type="button">
                        Explorar
                    </button>
                </div>
                <div className={styles.macaco}>
                    <img
                        className={styles.ilustracao}
                        src={MacacoIlustracao}
                        alt="Ilustração de um macaco estilizado com óculos escuros e jaqueta verde representando arte digital NFT"
                    />
                </div>
            </div>
        </section>
    );
}

export default Banner;
