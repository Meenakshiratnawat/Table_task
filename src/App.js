import React, { useState } from "react";
import "./styles.css";
import Data from "./Data.js";

function App() {
  const subjects = ["Maths", "Physics", "Chemistry", "Biology"];
  const [selectedSubject, setSelectedSubject] = useState("");
  const [leftTableData, setLeftTableData] = useState([]);
  const [rightTableData, setRightTableData] = useState([]);

  const generateQuestionsArray = (subject) => {
    const questions = Array(10)
      .fill("")
      .map(
        (question, index) => `${index + 1}. ${subject} Question ${index + 1}`
      );
    return questions;
  };

  const handleDropdownChange = (event) => {
    const selectedSubject = event.target.value;
    setSelectedSubject(selectedSubject);
    const questions = generateQuestionsArray(selectedSubject);
    const data = new Data(selectedSubject, questions);
    setLeftTableData(data.questions);
  };

  const handleCopyButtonClick = () => {
    setRightTableData([...leftTableData]);
  };

  return (
    <div className="App">
      <div className="dropdown">
        <select value={selectedSubject} onChange={handleDropdownChange}>
          <option value="">Select a subject</option>
          {subjects.map((subject, index) => (
            <option key={index} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Left Table</th>
            </tr>
          </thead>
          <tbody>
            {leftTableData.map((question, index) => (
              <tr key={index}>
                <td>{question}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th>Right Table</th>
            </tr>
          </thead>
          <tbody>
            {rightTableData.map((question, index) => (
              <tr key={index}>
                <td>{question}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="button-container">
        <button onClick={handleCopyButtonClick}>Copy to Right Table</button>
      </div>
    </div>
  );
}

export default App;
