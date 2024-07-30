import React, { useState } from "react";

const Translator = () => {
    const [inputText, setInputText] = useState("");
    const [translatedText, setTranslatedText] = useState("");

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleTranslate = async () => {
        const response = await fetch('/api/translate', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ text: inputText })
        });

        if (response.ok) {
            const data = await response.json();
            setTranslatedText(data.translatedText);
        }
        else {
            setTranslatedText('Error translating text!');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-yellow-100 to-red-400 p-4">
            <h2 className="text-4xl font-bold font-sans text-gray-400 mb-6">TRANSLATOR</h2>
            <form 
                className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleTranslate();
                }}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="inputText">Input text</label>
                    <textarea
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                        id="inputText"
                        rows="3"
                        value={inputText}
                        onChange={handleInputChange}
                        placeholder="Enter text to translate"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="translatedText">Translated text</label>
                    <textarea
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                        id="translatedText"
                        rows="3"
                        value={translatedText}
                        readOnly
                        placeholder=""
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 hover:text-lg focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Translator;
