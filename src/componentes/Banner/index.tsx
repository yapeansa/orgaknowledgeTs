import './Banner.css';

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

export function Banner({ enderecoImagem, textoAlternativo } : BannerProps) {
    return (
        <header className="banner">
            <div className="left">
                <a href="https://orgaknowledge.vercel.app/"><img src="imagens/Logo.svg" alt="Logo da Organo" /></a>
                <h2>As Maiores Mentes</h2>
                <p>reunidas em um só lugar!</p>
            </div>
            <div className="right">
                <img src={enderecoImagem} alt={textoAlternativo} />
            </div>
        </header>
    );
}

//export default Banner
