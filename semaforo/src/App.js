import './App.css';

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12" style={{ width: '30px', height: '100px' }}>
                        <div id="rectangulo1" style={{ width: '30px', height: '100px' }}></div>
                    </div>
                    <div className="col-12" style={{ width: '150px', height: '350px' }}>
                        <div id="rectangulo2" style={{ width: '150px', height: '300px' }}>
                            <div id="rojo" style={{ width: '80px', height: '80px', marginTop: '20px' }}></div>
                            <div id="amarillo" style={{ width: '80px', height: '80px', marginTop:'0px' }}></div>
                            <div id="verde" style={{ width: '80px', height: '80px' }}></div>
                        </div>
                        <div />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
