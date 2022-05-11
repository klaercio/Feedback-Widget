import { useState } from "react";
import CloseButton from "./CloseButton";
import bugImageUrl from '../../assets/bug.svg'
import ideiaImageUrl from '../../assets/ideia.svg'
import outroImageUrl from '../../assets/outro.svg'


const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
    },
    IDEIA: {
        title: 'Ideia',
        image: {
            source: ideiaImageUrl,
            alt: 'Imagem de uma lampada'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: outroImageUrl,
            alt: 'Imagem de um balão de pensamento'
        },
    },
}

type FeedbackType = keyof typeof feedbackTypes;


export default function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton/>
            </header>
                <div className="flex py-8 gap-2 w-full">
                    { Object.entries(feedbackTypes).map(([key, value])=> {
                        return (
                            <button 
                                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col justify-between items-center border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                                key={key}
                                onClick={()=> setFeedbackType(key as FeedbackType)}
                            >
                                <img src={value.image.source} alt={value.image.alt}></img>
                                <span>{value.title}</span>
                            </button>
                        )
                    })}
                </div>
            <footer className="text-xs text-neutral-400">
                Feito com ❤ pela <a target="_blank" className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
} 