import { useEffect, useState } from "react";

const App = () => {

  const [mammels, setMammels] = useState([])


  useEffect(() => {
    let array = []
    const variable = document.querySelectorAll('.animal')


    variable.forEach(element => {
      const object = { name: element.querySelector('h2').innerHTML, value: element.querySelector('.mammal-value').innerHTML }
      if (object.value === 'true') array.push(object)
    });
    setMammels(array)
  }, [])


  return (
    <div>
      <h1>All animals</h1>
      <section className='all-animals'>
        <div className='animal'>
          <h2>Dog</h2>
          <p>mammal: <span className='mammal-value'>true</span></p>
        </div>
        <div className='animal'>
          <h2>Snake</h2>
          <p>mammal: <span className='mammal-value'>false</span></p>
        </div>
        <div className='animal'>
          <h2>Cheetah</h2>
          <p>mammal: <span className='mammal-value'>true</span></p>
        </div>
        <div className='animal'>
          <h2>Turtle</h2>
          <p>mammal: <span className='mammal-value'>false</span></p>
        </div>
        <div className='animal'>
          <h2>Frog</h2>
          <p>mammal: <span className='mammal-value'>false</span></p>
        </div>
        <div className='animal'>
          <h2>Cat</h2>
          <p>mammal: <span className='mammal-value'>true</span></p>
        </div>
        <div className='animal'>
          <h2>Badger</h2>
          <p>mammal: <span className='mammal-value'>true</span></p>
        </div>
      </section>
      <h1>Mammals</h1>
      <section id='only-mammals'></section>

      <p>------------------------------------------------</p>

      {mammels.map((data, i) => (
        <h3 key={i}>{data.name} - {data.value}</h3>
      ))}

    </div>
  );
};


export default App;