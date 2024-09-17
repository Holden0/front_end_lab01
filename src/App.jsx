function App() {

  return (
    <div className="outer-container">
      <div className="inner-container">
        <header>
          <h1>
            My Music!
          </h1>
        </header>
        <main className="content">
          <div className="artist-image">
            <img src="public/artist_img.jpg" alt="Image of Future Hendrix"/>
          </div>
          <div className="details-section">
            <h2>Future Hendrix Albums</h2>
            <details>
                <summary>Top 5 Songs</summary>
                1. "Mask Off"
                <br/>
                2. "March Madness"
                <br/>
                3. "Life is Good"
                <br/>
                4. "Draco"
                <br/>
                5. "I'm So Groovy"
            </details>
            <details>
                <summary>Top 5 Albums</summary>
                1. "DS2"
                <br/>
                2. "Hndrxx"
                <br/>
                3. "Future"
                <br/>
                4. "Monster"
                <br/>
                5. "The Wizrd"
            </details>
          </div>
        </main>
        <footer></footer>
      </div>
    </div>
  )
}

export default App
