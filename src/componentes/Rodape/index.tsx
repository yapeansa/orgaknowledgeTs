import './Rodape.css';

function Rodape() {

    const redesSociais = [
        {
            endereco: 'https://facebook.com/orgaknowledge',
            imagem: 'imagens/facebook.svg',
            texto: 'Organo Facebook'
        },
        {
            endereco: 'https://twitter.com/orgaknowledge',
            imagem: 'imagens/twitter.svg',
            texto: 'Organo twitter'
        },
        {
            endereco: 'https://instagram.com/orgaknowledge',
            imagem: 'imagens/instagram.svg',
            texto: 'Organo instagram'
        }
    ];

    return (
        <footer className="footer">
            <section>
                <ul>
                    {redesSociais.map((rede, i) =>
                        <li key={i}>
                            <a href={rede.endereco}><img src={rede.imagem} alt={rede.texto} /></a>
                        </li>)
                    }
                </ul>
            </section>
            <section>
                <img src="imagens/Logo.svg" alt="Logo Organo" />
            </section>
            <section>
                <p>
                    Desenvolvido por Yago.
                </p>
            </section>
        </footer>
    );
};

export default Rodape;
