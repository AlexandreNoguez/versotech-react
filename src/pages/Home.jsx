import { Fade } from 'react-awesome-reveal';
import backgroundImage from '../assets/pikachu.png';
import useWindowSize from '../hooks/SizeObserver';

function Home() {
    const { width } = useWindowSize();

    return (
        <main className="flex gap-8 justify-center items-center text-center">
            <Fade>
                <img className={width < 480
                    ? 'w-auto h-20 bg-contain absolute bottom-4 left-4'
                    : 'w-auto h-40 bg-contain absolute bottom-8 left-8'
                } src={backgroundImage} alt="Imagem do pikachu deitado no fundo da página" />
                <div className="flex flex-col ">
                    <h1 className="text-center">Olá, meu nome é Alexandre Noguez!</h1>
                    <p className="text-justify mt-4 max-w-96">
                        &emsp;
                        Este projeto foi criado para concorrer à vaga de Desenvolvedor React Pleno para a empresa VersoTech e consiste em desenvolver uma listagem de pokémons utilizando React, redux e consumindo a API do pokémon, a pokeapi.co. Sinta-se à vontade para explorar o projeto e caso haja sugestões de melhoria ou críticas entre em contato comigo no {' '}
                        <a className="text-blue-600 hover:text-blue-400 underline" href="https://www.linkedin.com/in/alexandre-noguez/" target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>
                    </p>
                </div>
            </Fade>
        </main>
    );
}

export default Home;

