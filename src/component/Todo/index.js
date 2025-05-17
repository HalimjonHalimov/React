import { useEffect, useState } from "react";
import { authors } from "../../helper/author";

import "./index.css";
import Item from "./item";

const Todo = () => {
  const [author, setAuthor] = useState(authors);

  const handlesubmit = (e) => {
    e.preventDefault();

  };
  useEffect(() => {
    // console.log(author);
  }, [author]);

  return (
    <div className="todo">
      <div className="todo-header">Todo header</div>
      <div className="todo-body">
        <div className="todo-item">
          {author &&
            author.map((item) => (
              <Item
                key={item.id}
                {...item}
                setAuthor={setAuthor}
                author={author}
              />
            ))}
        </div>
        <div className="todo-add">
          <form onSubmit={handlesubmit}>
            <input type="text" name="add" placeholder="Enter Author name please!" />
            <button type="submit"> Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Todo;
