import { useState } from "react";

export default function Player({ name, symbol, isActive, changePlayerName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerNameValue, setPlayerNameValue] = useState(name);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      changePlayerName(symbol, playerNameValue);
    }
  }

  let editButton = "Edit";
  let playerName = <span className="player-name">{playerNameValue}</span>;

  function handleEdit(event) {
    setPlayerNameValue(event.target.value);
  }

  if (isEditing) {
    editButton = "Save";
    playerName = (
      <input
        type="text"
        value={playerNameValue}
        required
        onChange={handleEdit}
      />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{editButton}</button>
    </li>
  );
}
