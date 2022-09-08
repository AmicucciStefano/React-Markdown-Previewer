import "../style-sheets/Previewer.css";
import { GiCampfire } from "react-icons/gi";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { TbArrowsDiagonalMinimize2 } from "react-icons/tb";

const Previewer = ({ markdown, handleClick, icon, classtext, classdiv }) => {

  return (
    <div className={classdiv}>
      <div className="div-title">
        <h3><GiCampfire /> Previewer</h3>
        {icon ? <TbArrowsDiagonalMinimize2 onClick={handleClick} className="arrow"/> :<FaExpandArrowsAlt onClick={handleClick} className="arrow"/>}
      </div>
      <div className={classtext} dangerouslySetInnerHTML={{__html:markdown}}>
      </div>
    </div>
  );
}

export default Previewer;