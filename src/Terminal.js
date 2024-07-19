// // src/Terminal.js
// import React, { useState } from 'react';
// import './Terminal.css';

// const Terminal = () => {
//   const [commands, setCommands] = useState([]);
//   const [currentInput, setCurrentInput] = useState('');

//   const handleInputChange = (e) => {
//     setCurrentInput(e.target.value);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       processCommand(currentInput);
//       setCurrentInput('');
//     }
//   };

//   const processCommand = (input) => {
//     let output;
//     switch (input) {
//       case 'help':
//         output = 'Available commands: help, hello, date';
//         break;
//       case 'hello':
//         output = 'Hello, user!';
//         break;
//       case 'date':
//         output = new Date().toString();
//         break;
//       default:
//         output = `Command not found: ${input}`;
//     }
//     setCommands([...commands, { input, output }]);
//   };

//   return (
//     <div className="terminal">
//       <div className="output">
//         {commands.map((cmd, index) => (
//           <div key={index}>
//             <div className="input">{`> ${cmd.input}`}</div>
//             <div className="output">{cmd.output}</div>
//           </div>
//         ))}
//       </div>
//       <div className="input-line">
//         <span>{'> '}</span>
//         <input
//           type="text"
//           value={currentInput}
//           onChange={handleInputChange}
//           onKeyPress={handleKeyPress}
//           autoFocus
//         />
//       </div>
//     </div>
//   );
// };

// export default Terminal;


// src/Terminal.js
import React, { useState } from 'react';
import './terminal.css';

const Terminal = () => {
  const [commands, setCommands] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [cursorPos, setCursorPos] = useState(0);
  const [theme, setTheme] = useState('dark');

  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
    setCursorPos(e.target.selectionStart);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      processCommand(currentInput);
      setCurrentInput('');
      setCursorPos(0);
    }
  };

  const processCommand = (input) => {
    let output;
    switch (input.toLowerCase()) {
      case 'help':
        output = 'Available commands: Projects,Education, Contact';
        break;
      case 'hello':
        output = 'Hello, user!';
        break;
      case 'date':
        output = new Date().toString();
        break;
        case 'contact':
          output = (
            <div>
              <p>Contact me on:</p>
              <ul>
                <li><a href="https://www.linkedin.com/in/ajay-arava/">LinkedIn</a></li>
                <li><a href="https://github.com/ajayjspk">GitHub</a></li>
                <li><a href="https://x.com/_june4_">Twitter</a></li>
                <li><a href="https://www.instagram.com/8388ax/">Instagram</a></li>
              </ul>
            </div>
          );
          break;
          case 'LinkedIn':
            window.open('https://www.linkedin.com/in/ajay-arava/', '_blank');
            output = 'Opening LinkedIn...';
            break;
          case 'Github':
            window.open('https://github.com/ajayjspk', '_blank');
            output = 'Opening Github...';
            break;
          case 'Twitter':
            window.open('https://x.com/_june4_', '_blank');
            output = 'Opening X...';
            break;
          case 'instagram':
            window.open('https://www.instagram.com/8388ax/', '_blank');
            output = 'Opening Instagram...';
            break;
          case 'education':
            // window.open('https://www.instagram.com/8388ax/', '_blank');
            output = 'GMRit college Rajam, 2021 - 2025';
            break;
          case 'projects':
            window.open('https://github.com/ajayjspk', '_blank');
            output = 'My Github Account';
            break;
          case 'light':
              setTheme('light');
              output = 'Switching to light mode...';
              break;
      default:
        output = `Command not found: ${input}`;
    }
    setCommands([...commands, { input, output }]);
  };

  return (
    <div className={`terminal ${theme}`}>
      <div className="output">
        <div>
        <pre>PORTIFOLIO () [MSC v.1938 64 bit (AMD64)] on win32<br/>
        Type "help", "copyright", "credits" or "license" for more information.</pre>
        </div>
        {commands.map((cmd, index) => (
          <div key={index}>
            <div className="input"><p className='default'>Ajay@8388ax.com</p>{'>>>'}{` ${cmd.input}`}</div>
            <div className="output">{cmd.output}</div>
          </div>
        ))}
      </div>
      <div className={`input-line ${theme}`}>
        <span><p className='default'>Ajay@8388ax.com</p>{'>>>'}</span>
        <input
          type="text"
          value={currentInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          autoFocus
          style={{ '--cursor-pos': cursorPos }}
        />
      </div>
    </div>
  );
};

export default Terminal;
