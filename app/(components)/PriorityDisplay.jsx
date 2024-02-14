import { faRocket } from "@fortawesome/free-solid-svg-icons"; //faFire
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon
        icon={faRocket}
        className={` pr-1 ${
          priority > 0 ? " text-red-400" : " text-slate-400"
        }`}
      />
      <FontAwesomeIcon
        icon={faRocket}
        className={` pr-1 ${
          priority > 1 ? " text-red-400" : " text-slate-400"
        }`}
      />
      <FontAwesomeIcon
        icon={faRocket}
        className={`  pr-1 ${
          priority > 2 ? " text-red-400" : " text-slate-400"
        }`}
      />
      <FontAwesomeIcon
        icon={faRocket}
        className={` pr-1 ${
          priority > 3 ? " text-red-400" : " text-slate-400"
        }`}
      />
      <FontAwesomeIcon
        icon={faRocket}
        className={` ${priority > 4 ? " text-red-400" : " text-slate-400"}`}
      />
    </div>
  );
};

export default PriorityDisplay;
