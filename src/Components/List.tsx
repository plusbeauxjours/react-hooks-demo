import React from "react";

interface IProps {
  name: string;
  children: any;
}

const List: React.FC<IProps> = ({ name, children }) => (
  <>
    <h1>{name}</h1>
    <ul>{children}</ul>
  </>
);

export default List;
