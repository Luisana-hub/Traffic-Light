import React from 'react';
import './App.css';

class App extends React.Component{  //Definiendo la clase
    constructor(){
        super();
        this.state = {
            clikedlight: null
        };
    }

    render(){
        // Inicializo las variables que me van a traer de la hoja de estilo index.css el estilo sombreado (luz)
        let rojoIlumidado= '';                    
        if(this.state.clikedlight == 'rojo') rojoIlumidado= 'luz';      
        let amarilloIlumidado= '';
        if(this.state.clikedlight == 'amarillo') amarilloIlumidado= 'luz';
        let verdeIlumidado= '';
        if(this.state.clikedlight == 'verde') verdeIlumidado= 'luz';

        return (
            // Diseño del semaforo
            <div className="App">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12" style={{ width: '30px', height: '100px' }}>
                        <div id="rectangulo1" ></div>
                    </div>
                    <div className="col-12" style={{ width: '150px', height: '350px' }}>
                        <div id="rectangulo2" >
                            <div className={"rojo " +rojoIlumidado} onClick={()=> this.setState({ clikedlight: 'rojo'})}></div>
                            <div className={"amarillo " +amarilloIlumidado} onClick={()=> this.setState({ clikedlight: 'amarillo'})}></div>
                            <div className={"verde " +verdeIlumidado} onClick={()=> this.setState({ clikedlight: 'verde'})}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )   
    }
}

export default App;