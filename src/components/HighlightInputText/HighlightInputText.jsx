import { TextField } from "@mui/material";
import './HighlightInputText.css';

export default function HighlightInputText({
                                               newHighlightedWord,
                                               handleHighlightedWordChange,
                                               handleAddWord,
                                               highlightedWords,
                                               handleRemoveWord
                                           }) {
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "flexStart", gap: "30px" }}>
            <div className="highlight-input-row">
                <TextField
                    style={{ borderRadius: "16px" }}
                    value={newHighlightedWord}
                    onChange={handleHighlightedWordChange}
                    variant="outlined"
                    label="Highlight сөздерін қосыңыз"
                    fullWidth
                />
                <button onClick={handleAddWord} className="add-word-button" style={{ justifyContent: "center" }}>
                    <span className="fa fa-plus" style={{ fontSize: "20px" }}></span> Қосу
                </button>
            </div>

            <div className="highlighted-words-container">
                {highlightedWords.map((word, index) => (
                    <div key={index} className="highlighted-word-item">
                        <span className="highlighted-word">{word}</span>
                        <button onClick={() => handleRemoveWord(word)} className="remove-word-button">
                            <span className="fa fa-times" style={{ fontSize: "15px" }}></span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
