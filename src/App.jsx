import { useState } from 'react'
import "./App.css";
import Secao1 from './componentes/secao1/Secao1'
import Secao2 from './componentes/secao2/Secao2'
import image1 from './assets/image 1.png'
import image2 from './assets/image 2.png'
import PerguntasFrequentes from './componentes/perguntasFrequentes/PerguntasFrequentes';
import Formulario from './componentes/formulario/Formulario';
import BotaoQueroComecar from './componentes/botao/BotaoQueroComecar';

function App() {

  return (
    <>

      <div className='primeiraDiv'>
        <div>
          <Secao1
            titulo="Crie Landing Pages que realmente convertem os seus usuarios"
            texto="Utilize nosso criador automático de landing pages. Basta criar uma conta gratuita e escolher o melhor template para o seu negócio."
          >
          </Secao1>
            <BotaoQueroComecar></BotaoQueroComecar>
          </div>

          <Secao2
            imagem={image1}
            altTexto="Descrição da imagem"
            descricao="Template criado com a nossa ferramenta"
          >
          </Secao2>

      </div>

      <div className='segundaDiv'>
        <Secao2
          imagem={image2}
          altTexto="Descrição da imagem"
          descricao="Portifolio criado com a nossa ferramenta"
        >
        </Secao2>
        <div>
          <Secao1
            titulo="Modelos de pagina de destino que irao surprender os cliente mais exigentes"
            texto="Teste seus produtos, mensagens e outras ideias antes do lançamento para rastrear futuros clientes, otimizar as taxas de conversão e transformar as pessoas empolgadas com sua marca."
          >
          </Secao1>

          <Formulario></Formulario>

        </div>

      </div>

      <div className='terceiraDiv'>
        <PerguntasFrequentes></PerguntasFrequentes>
      </div>

      <div>

      </div>
    </>
  )
}

export default App
