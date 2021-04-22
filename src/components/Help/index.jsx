import React, { useState } from 'react';
import './Help.scss'

const Help = ()=>{
    const [question1, setQuestion1] = useState(false);
    const [question2, setQuestion2] = useState(false);
    const [question3, setQuestion3] = useState(false);
    const [question4, setQuestion4] = useState(false);
    const ActiveQuestion1 = () =>{
        setQuestion1(!question1)
        setQuestion2(false)
        setQuestion3(false)
        setQuestion4(false)
    }
    const ActiveQuestion2 = () =>{
        setQuestion2(!question2)
        setQuestion1(false)
        setQuestion3(false)
        setQuestion4(false)
    }
    const ActiveQuestion3 = () =>{
        setQuestion3(!question3)
        setQuestion1(false)
        setQuestion2(false)
        setQuestion4(false)
    }
    const ActiveQuestion4 = () =>{
        setQuestion4(!question4)
        setQuestion1(false)
        setQuestion2(false)
        setQuestion3(false)
    }
    return(
        <div className="accordion-container">
            <div className="wrapper">
                <div className="accordion-wrapper">
                    <h1 className="title-accordion">Ayuda</h1>
                    <div className="accordion-questions">
                        <div className={`question-answer-accordion ${question1 ? 'active' : ''}`} onClick={ActiveQuestion1}>
                            <div className="question">
                                <h3 className="question-title">¿Cómo hago un pedido?</h3>
                                <img className='img-question-answer' src="images/icon-arrow-down.svg" alt="arrow" />
                            </div>
                            <div className="answer">
                                Para armar un pedido simplemente vas agregando al carrito todos los productos que queres, 
                                y al finalizar pones comprar.
                            </div>
                        </div>
                        <div className={`question-answer-accordion ${question2 ? 'active' : ''}`} onClick={ActiveQuestion2}>
                            <div className="question">
                                <h3 className="question-title">¿Son precios Finales o más IVA?</h3>
                                <img className='img-question-answer' src="images/icon-arrow-down.svg" alt="arrow" />
                            </div>
                            <div className="answer">
                                Todos los precios son finales con IVA incluido.
                            </div>
                        </div>
                        <div className={`question-answer-accordion ${question3 ? 'active' : ''}`} onClick={ActiveQuestion3}>
                            <div className="question">
                                <h3 className="question-title">¿Los precios publicados en la web en que moneda están?</h3>
                                <img className='img-question-answer' src="images/icon-arrow-down.svg" alt="arrow" />
                            </div>
                            <div className="answer">
                                Todos los precios de la web están expresados en pesos argentinos.
                            </div>
                        </div>
                        <div className={`question-answer-accordion ${question4 ? 'active' : ''}`} onClick={ActiveQuestion4}>
                            <div className="question">
                                <h3 className="question-title">¿Que costo tiene un envío?</h3>
                                <img className='img-question-answer' src="images/icon-arrow-down.svg" alt="arrow" />
                            </div>
                            <div className="answer">
                                El costo del mismo se abona con el pedido, es decir, el pedido incluye el costo del envío. El valor del envío depende de las dimensiones del paquete y distancia.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Help;