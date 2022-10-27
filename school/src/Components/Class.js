function Real() {
  return <h1>This is real</h1>;
}

function Virtual() {
  return <h2>This is virtual</h2>;
}

function Greeting(props) {
  const which = props.which;
  return <>{which ? <Real /> : <Virtual />}</>;
}
export default Greeting;
