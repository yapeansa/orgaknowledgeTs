import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import { IColaborador } from '../shared/interfaces/IColaborador';

interface FormularioProps {
    aPessoaCadastrada: (pessoa: IColaborador) => void
    areasDeConhecimento: string[]
}

function Formulario(props: FormularioProps) {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [area, setArea] = useState('');
    const [data, setData] = useState('');

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        props.aPessoaCadastrada({
            nome,
            cargo,
            imagem,
            area,
            data
        });
        setNome('');
        setCargo('');
        setImagem('');
        setArea('');
    };

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card de uma pessoa incrível:</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome da pessoa"
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Especialidade"
                    placeholder="Digite a especialidade"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Informe o endereço da imagem do perfil"
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <CampoTexto
                    label="Data de entrada no time"
                    placeholder=""
                    valor={data}
                    aoAlterar={valor => setData(valor)}
                    tipo="date"
                />
                <ListaSuspensa
                    obrigatorio={true}
                    itens={props.areasDeConhecimento}
                    label="Área de Conhecimento"
                    valor={area}
                    aoAlterar={valor => setArea(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    );
};

export default Formulario;
