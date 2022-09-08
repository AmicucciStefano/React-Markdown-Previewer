import './App.css';
import Editor from './componentes/Editor';
import Previewer from './componentes/Previewer';
import { useState } from "react";
import { marked } from "marked";

function App() {

  const placeholder = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`

  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!

  And if you want to get really crazy, even tables:

  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.


  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;

  const [markdown, setMarkdown] = useState(placeholder);
  const [editor, setEditor] = useState(false);
  const [previewer, setPreviewer] = useState(false);
  const [icon, setIcon] = useState(false);

  const clases = editor ? ["maximized", "editor-div", "previewer-div hide", "container-div"] : previewer ? ["", "editor-div hide" ,"previewer-div", "container-div"] : ["", "editor-div", "previewer-div", "container-div"];

  const onChange = (e) => {setMarkdown(e.target.value)};

  const editorExpand = () => {console.log("click"); setEditor(!editor); setIcon(!icon)};

  const previewerExpand =() => {console.log("click"); setPreviewer(!previewer); setIcon(!icon)};

  return (
    <div className="App">
      <div>
        <Editor 
        icon={icon} 
        handleClick={editorExpand} 
        value={markdown} 
        handleChange={onChange}
        classtext={clases[0]}
        classdiv={clases[1]}
        />
      </div>
      <div>
        <Previewer 
        icon={icon} 
        handleClick={previewerExpand} 
        markdown={marked(markdown)}
        classtext={clases[3]}
        classdiv={clases[2]}
        />
      </div>
    </div>
  );
}

export default App;
