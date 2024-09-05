import "./Secao1.css";

const Secao1 = (props) => {
    return (
      <div className="secao1">

        <h1>{props.titulo}</h1>
        <p>{props.texto}</p>

      </div>
    );
  };
  
  export default Secao1;
  