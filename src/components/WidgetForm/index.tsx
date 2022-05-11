import { useState } from "react";
import CloseButton from "../CloseButton";
import bugImageUrl from "../../assets/bug.svg";
import ideiaImageUrl from "../../assets/ideia.svg";
import outroImageUrl from "../../assets/outro.svg";
import FeedbackTypeStep from "./steps/FeedbackTypeStep";
import FeedbackContentStep from "./steps/FeddbackContentStep";

export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes;


export default function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    function handleRestartFeedback() {
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {!feedbackType ? 
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                :
                <FeedbackContentStep feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartFeedback}/>
            }
            <footer className="text-xs text-neutral-400">
                Feito com ❤ pela <a target="_blank" className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
} 