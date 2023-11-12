import './Conhecedora.css';

interface ConhecedoraProps {
    nome: string
    cargo: string
    imagem: string
    corPrimaria: string
}

function Conhecedora({ nome, cargo, imagem, corPrimaria }: ConhecedoraProps) {
    return (
        <div className="conhecedora">
            <div className="cabecalho" style={{backgroundColor: corPrimaria}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );
};

export default Conhecedora;
