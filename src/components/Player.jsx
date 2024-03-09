import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}){
    const[playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    
    function handleEditClick(){
     setIsEditing(isEditing => !isEditing);
     if(isEditing){
      onChangeName(symbol,playerName);
     }
    }

    function handleChange(event){
      setPlayerName(event.target.value);
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let btnCaption = 'Edit';

    if(isEditing){
      editablePlayerName = <input type="text" value={playerName} onChange={handleChange} required/>;
      btnCaption = 'Save';
    }

    return(
        <li className={isActive?'active' : undefined}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
          </li>
    );
}