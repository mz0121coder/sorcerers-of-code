import { useState } from "react";
// import { v4 as uuidv4 } from 'uuid';

export default function Card({card}) {
    const [flip, setFlip] = useState(true);
    // let answerId = uuidv4();
    return (
        <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            {/* <div className="front">{card.question}  
                <div className="card-answers">
                    {card.answers.map((answer => {
                        return <p>{answer}</p>
                    }))}
                </div>
            </div>
            <div className="back">{card.correctAnswer}</div> */}
        {flip? <div className="front">{card.question}  
                <div className="card-answers">
                    {card.answers.map((answer,index) => {
                        return <p key ={index} >{answer}</p>
                    }))}
                </div>
            </div> : <div className="back">{card.correctAnswer}</div>}
        </div>
    )
}

