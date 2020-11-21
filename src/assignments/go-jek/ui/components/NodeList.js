const NodeList = (props) => {
  return (
    <ul>
      {props.data.map((node, index) => {
        return (
          <li
            key={index}
            onClick={() => {
              props.handleOnClick(node);
            }}
          >
            {node.title}
          </li>
        );
      })}
    </ul>
  );
};

export default NodeList;
