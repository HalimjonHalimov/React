import React, { useEffect, useRef, useState } from "react";
// import { author } from "../../helper/author";

const Item = ({ id, name: initialName, complate, setAuthor, author }) => {
  const [editing, setediting] = useState(true);
  const [name, setName] = useState(initialName);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleEditing = () => {
    setediting(false);
  };

  const handleSave = (id) => {
    setAuthor((prev) => prev.map((c) => (c.id === id ? { ...c, name } : c)));
    setediting(true);
  };

  const handleComplate = (id) => {
    setAuthor((prev) =>
      prev.map((c) => (c.id === id ? { ...c, complate: !c.complate } : c))
    );
  };

  const handleDelete = (id) => {
    setAuthor((prev) => prev.filter((c) => c.id !== id));
  };

  useEffect(() => {
    if (!editing) {
      inputRef.current?.focus();
    }
  }, [editing]);
  return (
    <div className="item">
      <span>{id}</span>
      <input
        ref={inputRef}
        type="text"
        name="author"
        placeholder="author name"
        value={name}
        required
        onChange={handleChange}
        disabled={editing}
      />
      <span className="span">
        {complate === true ? `Complated` : `Not Complate`}
        <input type="checkbox" name="checkbox" checked={complate} disabled />
      </span>
      <div className="item-button">
        <button
          onClick={() => handleSave(id)}
          className="button"
          disabled={editing}
        >
          Save
        </button>
        <button className="button" onClick={() => handleComplate(id)}>
          {complate === false ? "Complate" : "Not complate"}{" "}
        </button>
        <button onClick={handleEditing} className="button" disabled={!editing}>
          Edit
        </button>
        <button className="button" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
