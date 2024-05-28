import './App.css'

function App() {
  const data ={
    foto : "https://1.bp.blogspot.com/-ZbCFllBWjHU/XdvtFY1izPI/AAAAAAAADdY/3KF7BOmxZW0vzSu8K26x2AerDBlGGHw0gCLcBGAsYHQ/s1600/Gambar%2BYang%2BPaling%2BDisukai%2BRamai%2B%25284%2529.jpg",
    name : "Anwar Juniansyah Harahap",
    born : "09 Juni 2002",
    age : "21 Tahun",
    hobby : ["Sport","Watch","Play"]
  }

  return (
    <div className='container'>
      <div className='pembungkus'>
        <div className='title'>
          <h1>Tugas 1 Kelompok Nebula</h1>
        </div>
        <div className='content'>
          <h1>Biodata</h1>
          <img src={data.foto} alt="" />
          <h3>{data.name}</h3>
          <p className='data'>{data.born}</p>
          <p className='data'>{data.age}</p>
          <ul className='hobby'>
            {data.hobby.map((items,index)=>(<li key={index} >{items}</li>))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
