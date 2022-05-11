import { FeedbackType, feedbackTypes } from "..";
import CloseButton from "../../CloseButton";

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export default function FeedbackTypeStep(props: FeedbackTypeStepProps) {
    return <>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <header>
                <CloseButton/>
        </header>
        <div className="flex py-8 gap-2 w-full">
            { Object.entries(feedbackTypes).map(([key, value])=> {
                return (
                    <button 
                    className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col justify-between items-center border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                    key={key}
                    onClick={()=> props.onFeedbackTypeChanged(key as FeedbackType)}
                    >
                        <img src={value.image.source} alt={value.image.alt}></img>
                        <span>{value.title}</span>
                    </button>
                )
            })}
        </div>
    </>
}