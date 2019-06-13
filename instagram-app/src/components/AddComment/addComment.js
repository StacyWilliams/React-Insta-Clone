import React from "react";
import "./addComment.css";



const addComent = props => {
  return (
    
      <form onSubmit={event => props.addNewComment(event, props.id)}>
        <input
          className="search"
          name='newComment'
          onChange={props.onChange}
          value={props.value}
          type="text"
          placeholder="Add a comment..."
        />
        <button type="submit">Add</button>
      </form>
  
  );
};

export default addComent;