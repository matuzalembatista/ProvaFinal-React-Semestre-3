import "./Secao2.css";

const Secao2 = (props) => {
    return (
      <div className="secao2">

        <img src={props.imagem} alt={props.altTexto} />
        <p>{props.descricao}</p>

        

      </div>
    );
  };
  
  export default Secao2;
  