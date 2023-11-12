
import Conhecedora from '../Conhecedora';
import { IColaborador } from '../shared/interfaces/IColaborador';
import './Area.css';

interface AreaProps {
    corPrimaria: string
    corSecundaria: string
    nome: string
    conhecedoras: IColaborador[]
}

function Area(props: AreaProps) {
    return (
        //props.corPrimaria
        (props.conhecedoras.length > 0) ? <section className="time" style={{ backgroundColor: props.corSecundaria }}>
            <h3>{props.nome}<span style={{ backgroundColor: props.corPrimaria }}></span></h3>
            <div className="conhecedoras">
                {props.conhecedoras.map(conhecedora =>
                    <Conhecedora
                        key={conhecedora.nome}
                        nome={conhecedora.nome}
                        cargo={conhecedora.cargo}
                        imagem={conhecedora.imagem}
                        corPrimaria={props.corPrimaria}
                        data={conhecedora.data}
                    />)
                }
            </div>
        </section>
            : <></>
    );
};

export default Area;
