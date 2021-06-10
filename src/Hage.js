function Hage(props) {
  let array = ["ryoma", "hama"];
  array = array.map((d) => {
    return d + "kun";
  });
  return (
    <>
      <div onClick={() => props.setHair(props.yyy + 1)}>{props.yyy}</div>
      {array.map((d) => (
        <> {d} </>
      ))}
    </>
  );
}

export default Hage;
