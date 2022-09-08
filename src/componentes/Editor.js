import "../style-sheets/Editor.css";
import { GiCampfire } from "react-icons/gi";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { TbArrowsDiagonalMinimize2 } from "react-icons/tb";

const Editor = ({ value, handleChange, handleClick, icon, classtext, classdiv }) => {

  return (
    <div className={classdiv}>
      <div className="div-title">
        <h3><GiCampfire /> Editor</h3>
        { icon ? <TbArrowsDiagonalMinimize2 onClick={handleClick} className="arrow"/> :<FaExpandArrowsAlt onClick={handleClick} className="arrow"/>}
      </div>
      <textarea className={classtext} value={value} onChange={handleChange}></textarea>
    </div>
  );
}


export default Editor;