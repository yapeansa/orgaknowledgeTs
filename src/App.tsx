import { useState, useEffect } from 'react';
import { Banner } from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Area from './componentes/Area';
import Rodape from './componentes/Rodape';
import './App.css';
import { IColaborador } from './componentes/shared/interfaces/IColaborador';

function App() {

    const areasDeConhecimento = [
        {
            nome: 'Literatura',
            corPrimaria: '#57C278',
            corSecundaria: '#D9F7E9'
        },
        {
            nome: 'Ciência',
            corPrimaria: '#82CFFA',
            corSecundaria: '#E8F8FF'
        },
        {
            nome: 'Artes',
            corPrimaria: '#A6D157',
            corSecundaria: '#F0F8E2'
        },
        {
            nome: 'Filosofia',
            corPrimaria: '#E06B69',
            corSecundaria: '#FDE7E8'
        },
        {
            nome: 'Política',
            corPrimaria: '#DB6EBF',
            corSecundaria: '#FAE9F5'
        }
    ];

    // const inicial = [
    //     {
    //         nome: 'Maria Gaetana Agnesi',
    //         cargo: 'Matemática Italiana',
    //         imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Maria_Gaetana_Agnesi.jpg/200px-Maria_Gaetana_Agnesi.jpg',
    //         area: areasDeConhecimento[1].nome
    //     },
    //     {
    //         nome: 'Marie-Sophie Germain',
    //         cargo: 'Matemática Francesa',
    //         imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Germain.jpeg/200px-Germain.jpeg',
    //         area: areasDeConhecimento[1].nome
    //     },
    //     {
    //         nome: 'Irène Joliot-Curie',
    //         cargo: 'Física Francesa',
    //         imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Joliot-curie.jpg/200px-Joliot-curie.jpg',
    //         area: areasDeConhecimento[1].nome
    //     },
    //     {
    //         nome: 'Rosalba Carriera',
    //         cargo: 'Pintora Veneziana',
    //         imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Rosalba_Carriera_Self-portrait.jpg/200px-Rosalba_Carriera_Self-portrait.jpg',
    //         area: areasDeConhecimento[2].nome
    //     },
    //     {
    //         nome: 'Madame Lebrun',
    //         cargo: 'Pintora Francesa',
    //         imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lebrun%2C_Self-portrait.jpg/280px-Lebrun%2C_Self-portrait.jpg',
    //         area: areasDeConhecimento[2].nome
    //     },
    //     {
    //         nome: 'Giuditta Pasta',
    //         cargo: 'Cantora de Ópera',
    //         imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Giuditta_pasta.jpg/200px-Giuditta_pasta.jpg',
    //         area: areasDeConhecimento[2].nome
    //     },
    //     {
    //         nome: 'Simone de Beauvoir',
    //         cargo: 'Filósofa Francesa',
    //         imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Simone_de_Beauvoir2.png/220px-Simone_de_Beauvoir2.png',
    //         area: areasDeConhecimento[3].nome
    //     },
    //     {
    //         nome: 'Hipátia',
    //         cargo: 'Filósofa Grega',
    //         imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Hypatia_portrait.png/200px-Hypatia_portrait.png',
    //         area: areasDeConhecimento[3].nome
    //     },
    //     {
    //         nome: 'Clémence Royer',
    //         cargo: 'Filósofa Francesa',
    //         imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Clemence_Royer_1865_Nadar.jpg/220px-Clemence_Royer_1865_Nadar.jpg',
    //         area: areasDeConhecimento[3].nome
    //     }
    // ];

    const [pessoas, setPessoas] = useState<IColaborador[]>([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/yapeansa/orgaKnowledgeJs/master/src/assets/db.json")
            .then(resposta => resposta.json())
            .then(dados => setPessoas(dados))
    }, [])

    const aNovaPessoaAdicionada = (pessoa: IColaborador) => {
        setPessoas([...pessoas, pessoa]);
    };

    const [exibir, setExibir] = useState(true);

    const toggleForm = () => {
        setExibir(!exibir);
    }

    return (
        <div className="App">
            <Banner enderecoImagem="imagens/img_header.jpg" textoAlternativo="Imagem destaque" />
            {
                // Exibe o formulário somente quando o estado de exibir for true.
                exibir ?
                    <Formulario
                        areasDeConhecimento={areasDeConhecimento.map(area => area.nome)}
                        aPessoaCadastrada={pessoa => aNovaPessoaAdicionada(pessoa)}
                    /> : ''
            }
            <section className="organizacao">
                <h2>OrgaKnowledge</h2>
                <p>O OrgaKnowledge é uma variação do projeto Organo da Alura...</p>
                {
                    // Botão que altera o estado de exibir por meio da função toggleForm.
                    <button onClick={toggleForm}>
                        <img src="imagens/toggle.svg" alt="toggleForm" />
                    </button>
                }
            </section>
            {
                // Neste ponto utilizamos um método de array, o 'map', para exibir as áreas de conhecimento.
                // Note que é feito um filter no array 'pessoas' para que as pessoas sejam exibidas somente em suas respectivas áreas.
                areasDeConhecimento.map(area => <Area
                    key={area.nome}
                    nome={area.nome}
                    corPrimaria={area.corPrimaria}
                    corSecundaria={area.corSecundaria}
                    conhecedoras={pessoas.filter(pessoa => pessoa.area === area.nome)}
                />)
            }
            <Rodape />
        </div>
    );
}

export default App;
