import React from "react";
import AuthorCard from "./AuthorCard";

function AuthorList (props) {
    const authorRows = props.authors.map(author => (
        <AuthorCard item={author} key={author.first_name} />
    ));

    return (
      
        <div className="content col-10">
          <div className="authors">
            <h3>Authors</h3>
            <div className="row">
              
              {authorRows}
              
               
            </div>
          </div>
        </div>
    )
}

export default AuthorList;