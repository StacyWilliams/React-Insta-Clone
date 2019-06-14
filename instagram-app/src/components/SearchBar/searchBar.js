import React from "react";
import "./searchBar.css";
import styled from 'styled-components'

const Search = styled.div`

    display: flex;
    flex-direction: row;
    width: 800px;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0
  
  `;
  const RightIcons = styled.div`
  padding-left: 1rem;
  color: rgb(48, 48, 48);
  `;

  const VerticalDiv = styled.div`
    border-left: 1px solid rgb(165, 164, 164);
    `;

    const SearchDiv = styled.div`
      width: 60%;
  `;
  const RightIconsDiv = styled.div`
     padding-left: 1rem;
    color: rgb(48, 48, 48);
  `;

const searchBar = props => {
  return (
    <Search>
        <div>
        <i className="fab fa-instagram" />
        </div>
        
        <VerticalDiv>
        <span>Instagram</span>
       </VerticalDiv>
      <SearchDiv>
      
        <input
          onChange={props.onchangeValue}
          className="search"
          type="text"
          placeholder="Search"
        />
        </SearchDiv>
      <RightIconsDiv>
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </RightIconsDiv>
    </Search>
  );
};

export default searchBar;