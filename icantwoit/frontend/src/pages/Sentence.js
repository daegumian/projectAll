import React, { useState } from "react";
import "../styles/Sentence.css"; // Sentence.css 파일을 불러옵니다.

const Sentence = () => {
  const [inputText, setInputText] = useState("");
  const [meaningText, setMeaningText] = useState("");
  const [conversationList, setConversationList] = useState([]);

  // 입력 값이 변경될 때 호출되는 함수
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // 뜻 입력 값이 변경될 때 호출되는 함수
  const handleMeaningChange = (e) => {
    setMeaningText(e.target.value);
  };

  // 대화 추가 버튼 클릭 시 호출되는 함수
  const handleSaveConversation = (e) => {
    e.preventDefault(); // 폼 기본 동작 방지
    if (inputText.trim() !== "" && meaningText.trim() !== "") {
      setConversationList((prevList) => [
        ...prevList,
        { sentence: inputText, meaning: meaningText },
      ]);
      setInputText("");
      setMeaningText("");
    }
  };

  // 대화 삭제 버튼 클릭 시 호출되는 함수
  const handleDeleteConversation = (index) => {
    const updatedList = [...conversationList];
    updatedList.splice(index, 1);
    setConversationList(updatedList);
  };

  return (
    <div className='sentence-container'>
      <form className='input-container' onSubmit={handleSaveConversation}>
        <h2>오늘의 회화 문장</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <h3>문장</h3>
              </td>
              <td>
                <h3>뜻</h3>
              </td>
              <td>
                <h3></h3>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type='text'
                  value={inputText}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type='text'
                  value={meaningText}
                  onChange={handleMeaningChange}
                />
              </td>
              <td>
                <button type='submit'>추가</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <div>
        <ul>
          {conversationList.map((item, index) => (
            <li key={index}>
              <strong>{item.sentence}</strong> - {item.meaning}
              <button
                className='delete-button'
                onClick={() => handleDeleteConversation(index)}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sentence;
