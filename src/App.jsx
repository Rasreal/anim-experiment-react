import {useEffect, useLayoutEffect, useRef, useState} from 'react';
import './App.css';
import FallingText from "./animation/FallingText.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
    const [inputValue, setInputValue] = useState("Дәл сол анимацияны осы жерден көре аласыз");
    const inputRef = useRef();

    useLayoutEffect(() => {
        inputRef.current.focus();

    })
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        localStorage.setItem('inputValue', inputValue);

    };

    useEffect(() => {
        const savedValue = localStorage.getItem('inputValue');
        if (savedValue) {
            setInputValue(savedValue);
        }
    }, []);


    return (
        <div className="page">
            <div className="input-container">
                <textarea
                    ref={inputRef}
                    rows={5}
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
            <div className="container">
                <div>
                    <h2>Оң жағыңызда ҚұлайтынТекст анимациясы, міндетті түрде <strong>враппер
                        контейнер</strong> мен <b>height</b> беру керек.</h2>
                    <div className="reminder-text">
                        <span className="fa fa-exclamation" style={{marginRight: "10px"}}></span>
                        <p>Текст құлауы үшін, үстінен басыңыз</p>
                    </div>
                    <div className="reminder-text">
                        <span className="fa fa-bell" style={{marginRight: "10px"}}></span>
                        <p>Жүйе құлаған соң, парақты қайта <strong>жүктеу</strong> керек!</p>
                    </div>

                </div>


                <FallingText
                    text={`${inputValue || ""}`}
                    highlightWords={["анимацияны", "көре", "аласыз", "жерден", "сол"]}
                    highlightClass="highlighted"
                    trigger="click"
                    backgroundColor="transparent"
                    wireframes={false}
                    gravity={0.56}
                    fontSize="2rem"
                    mouseConstraintStiffness={0.9}
                />

            </div>
        </div>
    );
}

export default App;
