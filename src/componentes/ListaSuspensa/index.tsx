import './ListaSuspensa.css';

interface ListaSuspensaProps {
    label: string
    aoAlterar: (valor: string) => void
    obrigatorio: boolean
    valor: string
    itens: string[]
}

function ListaSuspensa({ aoAlterar, label, obrigatorio, valor, itens }: ListaSuspensaProps) {
    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select onChange={evento =>
                aoAlterar(evento.target.value)}
                required={obrigatorio}
                value={valor}
            >
                <option value=""></option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    );
};

export default ListaSuspensa;
