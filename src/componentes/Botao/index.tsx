import { ReactElement } from 'react';
import './Botao.css';

interface BotaoProps {
    children: ReactElement | string
}

function Botao(props: BotaoProps) {
    return (
        <button className="botao">
            {props.children}
        </button>
    );
};

export default Botao;
