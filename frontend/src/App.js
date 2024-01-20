import data from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">amazona</a>
      </header>
      <main>
        <h1>Featured products</h1>
        {data.products.map((products) => (
          <div>
            <img src={products.image} alt={products.name}></img>
            <p> {products.name} </p>
            <p> {products.price} </p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
