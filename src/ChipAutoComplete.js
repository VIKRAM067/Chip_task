import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; 
import './App.css';

const suggestionsList = [
  'React', 'Hands On', 'Live Coding', 'Angular', 'Vue JS', 'JS Fundamentals', 'Typescript',
  'Browser/DOM', 'API', 'Router', 'Forms', 'Jest', 'Vue', 'Templates', 'Directives',
  'Routing', 'State management', 'Asynchronous programming', 'React Js', 'Hooks', 'JSX',
  'CSS', 'flex', 'DOM'
];


  const ChipAutoComplete = () => {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestionsList);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value) {
      const filtered = suggestionsList.filter(
        (suggestion) => suggestion.toLowerCase().includes(value.toLowerCase()) && !chips.includes(suggestion)
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions(suggestionsList);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue) {
      if (!chips.includes(inputValue) && suggestionsList.includes(inputValue)) {
        setChips([...chips, inputValue]);
        setInputValue('');
        setFilteredSuggestions(suggestionsList);
      }
    }
  };

  const handleChipDelete = (chipToDelete) => {
    setChips(chips.filter((chip) => chip !== chipToDelete));
  };

  const handleSuggestionClick = (suggestion) => {
    setChips([...chips, suggestion]);
    setInputValue('');
    setFilteredSuggestions(suggestionsList);
  };

  return (
    <div className="chip-auto-complete w-full max-w-md mx-auto mt-6 px-4">
      <div className="relative">

        <h3 className='text-xs text-gray-500 font-bold'> INPUT TAGS</h3>
        <div className="input-tags flex flex-wrap border border-gray-300 rounded-lg p-2 bg-gray-100 ">
          {chips.map((chip, index) => (
            <div key={index} className="chip bg-white text-black-500 rounded-lg py-1 px-2 m-1 flex items-center shadow-md ">
              {chip}
              <span className="close-btn ml-2 cursor-pointer" onClick={() => handleChipDelete(chip)}><FontAwesomeIcon icon={faTimes} /></span>
            </div>
          ))}

        <div className="relative"> 
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              
              className="chip-input outline-none p-1 flex-1 bg-transparent border-none" // Updated styles
            />

            {inputValue && (
              <div className="relative">
                <div className="absolute z-10 w-[200px]">
                  <div className="suggestions-list bg-white border border-gray-300 rounded-lg mt-1 overflow-y-auto shadow-md">
                    {filteredSuggestions.map((suggestion, index) => {
                      // Find the index of the typed input value in the suggestion text
                      const matchIndex = suggestion.toLowerCase().indexOf(inputValue.toLowerCase());
                      
                      return (
                        <div
                          key={index}
                          className="suggestion-item p-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {/* Render the suggestion text with the typed input value highlighted in blue */}
                          {matchIndex !== -1 ? (
                            <>
                              {suggestion.substring(0, matchIndex)}{/* Text before the match */}
                              <span className="text-blue-500">{suggestion.substring(matchIndex, matchIndex + inputValue.length)}</span>{/* Matched portion */}
                              {suggestion.substring(matchIndex + inputValue.length)}{/* Text after the match */}
                            </>
                          ) : (
                            // If no match, render the suggestion text as it is
                            suggestion
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

          </div>
         
        </div>
        
      </div>
      <p className='text-gray-500 text-xs'>Enter a comma-seperated chips and enjoy</p>
    </div>
  );
};

export default ChipAutoComplete;
