function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Greeting() {
  const Cars = [
    { id: 1, brand: "ford" },
    { id: 2, brand: "toyota" },
    { id: 3, brand: "benz" },
  ];

  return (
    <>
      <h1>Who lives here?</h1>
      <ul>
        {Cars.map((carl) => (
          <Car key={carl.id} brand={carl.brand} />
        ))}
      </ul>
    </>
  );
}
export default Greeting;
