import FallingText from "../../animation/FallingText/FallingText.jsx";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import './FallingTextEditor.css';
import clsx from "clsx";
import HighlightInputText from "../HighlightInputText/HighlightInputText.jsx";

function FallingTextEditor() {
    const [inputValue, setInputValue] = useState("Дәл сол анимацияны осы жерден көре аласыз");
    const [highlightedWords, setHighlightedWords] = useState([]);
    const [newHighlightedWord, setNewHighlightedWord] = useState("");
    const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Store the screen width
    const inputRef = useRef();

    useLayoutEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        localStorage.setItem("inputValue", e.target.value);
    };

    const handleHighlightedWordChange = (e) => {
        setNewHighlightedWord(e.target.value);
    };

    const handleAddWord = () => {
        if(newHighlightedWord.trim() && !highlightedWords.includes(newHighlightedWord.trim())) {
            setHighlightedWords([...highlightedWords, newHighlightedWord.trim()]);
            setNewHighlightedWord("");
        }
    };

    const handleRemoveWord = (wordToRemove) => {
        setHighlightedWords(highlightedWords.filter((word) => word !== wordToRemove));
    };

    useEffect(() => {
        if(highlightedWords.length > 0) {
            localStorage.setItem("highlightWordsValue", JSON.stringify(highlightedWords));
        }
    }, [highlightedWords]);

    useEffect(() => {
        const savedInputValue = localStorage.getItem("inputValue");
        const savedHighlightValueString = localStorage.getItem("highlightWordsValue");

        if(savedInputValue) {
            setInputValue(savedInputValue);
        }
        if(savedHighlightValueString) {
            const savedHighlightValue = JSON.parse(savedHighlightValueString) || [];
            console.log(savedHighlightValue);
            setHighlightedWords(savedHighlightValue);
        }
    }, []);


    const fontSizeClass = clsx({
        "1.5em": screenWidth <= 1200, // Use 1.5rem for screen width <= 1200px
        "1em": screenWidth <= 800, // Use 1em for screen width <= 800px
        "2em": screenWidth > 1200, // Default font size
    });

    console.log(screenWidth);

    return (

        <>
            <div className="input-container">
                <textarea
                    ref={inputRef}
                    rows={5}
                    value={inputValue}
                    onChange={handleInputChange}
                    className="textarea"
                />

                <div>
          <span
              className="fa fa-arrow-left"
              style={{marginRight: "10px", marginLeft: "10px", fontSize: "40px"}}
          ></span>
                </div>

                <h2>FallBack текстті осында жазыңыз</h2>
            </div>

            <HighlightInputText highlightedWords={highlightedWords} handleAddWord={handleAddWord}
                                handleHighlightedWordChange={handleHighlightedWordChange}
                                handleRemoveWord={handleRemoveWord} newHighlightedWord={newHighlightedWord}/>

            <div className="falling-main-container">
                <div>
                    <h2>
                        Оң жағыңызда ҚұлайтынТекст анимациясы, міндетті түрде <strong>враппер
                        контейнер</strong> мен{" "}
                        <b>height</b> беру керек.
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
                    fontSize={fontSizeClass}
                    mouseConstraintStiffness={0.9}
                />
            </div>
        </>);
};

export default FallingTextEditor;
