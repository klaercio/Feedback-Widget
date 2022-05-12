import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes} from ".."
import CloseButton from "../../CloseButton"
import ScreenshotButton from "./ScreenshotButton";

interface FeedbackContentStepProps {
    feedbackType : FeedbackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;
}


export default function FeedbackContentStep({feedbackType, onFeedbackRestartRequested, onFeedbackSent}: FeedbackContentStepProps) {

    const [screenshot, setSceenshot] = useState<string | null>(null);

    const [comment, setComment] = useState<string>('');

    const feedbackTypeInfo = feedbackTypes[feedbackType];

    function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();

        console.log({
            screenshot, comment
        })

        onFeedbackSent();
    }

    return <>
        <header >
            <button type="button" className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100" onClick={onFeedbackRestartRequested}>
                <ArrowLeft weight="bold" className="w-4 h-4"/>
            </button>
            <span className="text-xl leading-6 flex items-center gap-2">
                <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"/>
                {feedbackTypeInfo.title}
            </span>
            <CloseButton/>
        </header>
        
        <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
            <textarea 
                className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none overflow-y-hidden"
                placeholder="Conte com detalhes o que está acontecendo"
                onChange={event => setComment(event.target.value)}
            />

            <footer className="flex gap-2 mt-2">
                <ScreenshotButton
                    foto = {screenshot}
                    onScreenshotTook={setSceenshot}/>
                <button
                    type="submit"
                    className="p-2 bg-brand-500 rounded-[4px] border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                    disabled={comment.length == 0? true: false}>
                        
                        Enviar Feedback

                </button>
            </footer>
        </form>
    </>
}