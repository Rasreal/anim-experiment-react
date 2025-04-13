import {useEffect, useLayoutEffect, useRef, useState} from 'react';
import './App.css';
import FallingText from './animation/FallingText.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {TextField} from '@mui/material';

function App() {
    const [inputValue, setInputValue] = useState("Дәл сол анимацияны осы жерден көре аласыз");
    const [highlightedWords, setHighlightedWords] = useState([]);
    const [newHighlightedWord, setNewHighlightedWord] = useState("");
    const inputRef = useRef();

    useLayoutEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        localStorage.setItem('inputValue', e.target.value);
    };

    const handleHighlightedWordChange = (e) => {
        setNewHighlightedWord(e.target.value);
    };

    const handleAddWord = () => {
        if(newHighlightedWord.trim() && !highlightedWords.includes(newHighlightedWord.trim())) {
            setHighlightedWords([...highlightedWords, newHighlightedWord.trim()]);

            setNewHighlightedWord(""); // Clear the input field after adding

        }
    };



    const handleRemoveWord = (wordToRemove) => {
        setHighlightedWords(highlightedWords.filter(word => word !== wordToRemove));
    };


    useEffect(() => {
        if (highlightedWords.length > 0) {
            localStorage.setItem('highlightWordsValue', JSON.stringify(highlightedWords));
        }
    }, [highlightedWords]);

    useEffect(() => {
        const savedInputValue = localStorage.getItem('inputValue');
        const savedHighlightValueString = localStorage.getItem('highlightWordsValue');

        if(savedInputValue) {
            setInputValue(savedInputValue);
        }
        if(savedHighlightValueString){
            const savedHighlightValue = JSON.parse(savedHighlightValueString) || [];

            console.log(savedHighlightValue)
            setHighlightedWords(savedHighlightValue);
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
                    className="textarea"
                />

                <div>
                    <span className="fa fa-arrow-left"
                          style={{marginRight: "10px", marginLeft: "10px", fontSize: "40px"}}></span>
                </div>

                <h2>
                    FallBack текстті осында жазыңыз
                </h2>

            </div>
            <div style={{display: "flex", flexDirection: 'row', alignItems: 'flexStart', gap: '30px'}}>
                <div className="highlight-input-row">
                    <TextField
                        style={{borderRadius: "16px"}}
                        value={newHighlightedWord}
                        onChange={handleHighlightedWordChange}
                        variant="outlined"
                        label="Highlight сөздерін қосыңыз"
                        fullWidth
                    />
                    <button onClick={handleAddWord} className="add-word-button" style={{justifyContent: "center"}}>
                        <span className="fa fa-plus" style={{fontSize: '20px'}}></span> Қосу
                    </button>

                </div>
                <div className="highlighted-words-container">
                    {highlightedWords.map((word, index) => (
                        <div key={index} className="highlighted-word-item">
                            <span className="highlighted-word">{word}</span>
                            <button
                                onClick={() => handleRemoveWord(word)}
                                className="remove-word-button"
                            >
                                <span className="fa fa-times" style={{fontSize: '15px'}}></span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>


            <div className="container">
                <div>
                    <h2>
                        Оң жағыңызда ҚұлайтынТекст анимациясы, міндетті түрде <strong>враппер
                        контейнер</strong> мен <b>height</b> беру керек.
                    </h2>

                    <div className="reminder-text">
                        <span className="fa fa-exclamation" style={{marginRight: "10px"}}></span>
                        <p>Текст құлауы үшін, <strong>үстінен</strong> басыңыз</p>
                    </div>
                    <div className="reminder-text">
                        <span className="fa fa-bell" style={{marginRight: "10px"}}></span>
                        <p>Жүйе құлаған соң, парақты қайта <strong>жүктеу</strong> керек!</p>
                    </div>

                </div>

                <FallingText
                    text={`${inputValue || ""}`}
                    highlightWords={highlightedWords}
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
    )
        ;
}

export default App;
