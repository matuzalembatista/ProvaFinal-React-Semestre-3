import "./PerguntasFrequentes.css";
import faqJson from './PerguntasFrequentes.json';

const PerguntasFrequentes = (props) => {
    return (
        <div className="PerguntasFrequentes">
            <h1>Perguntas Frequentes</h1>
            <div className="faqs-container">
                {faqJson.faqs.map((faq, index) => (
                    <div key={index} className="">
                        <h2 className="">{faq.pergunta}</h2>
                        <p className="">{faq.resposta}</p>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default PerguntasFrequentes;
