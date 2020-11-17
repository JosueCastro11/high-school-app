import React from 'react';
import Racer, { IRacer } from '../Racer/Racer';
import './RaceApp.scss';
import axios from 'axios';
import RaceCircuit, { emptyRaceCircuit, IRaceCircuit } from '../RaceCircuit/RaceCircuit';

interface RaceData {
    racers: Array<IRacer>;
    circuit: IRaceCircuit;
    series: string;
    round: string;
    season: string;
}

let emptyRaceData = {
    racers: [],
    circuit: emptyRaceCircuit,
    series: '',
    round: '',
    season: ''
}

function RacerApp() {
    let [raceData, setRaceData] = React.useState<RaceData>(emptyRaceData);
    let [showData, setShowData] = React.useState<boolean>(false);
    
    let [nombre, setNombre] = React.useState<string>("");
    let [telefono, setTelefono] = React.useState<string>("");
    let [fechaNacimiento, setFechaNacimiento] = React.useState<string>("");

    async function requestData() {
        let results = await axios.get("http://ergast.com/api/f1/2004/1/results.json");

        if (results.data) {
            setShowData(true);
            let RaceTable = results.data.MRData.RaceTable;
            let Results = RaceTable.Races[0].Results;

            let circuit = RaceTable.Races[0].Circuit;
            let racers = Results.map((result: any) => result.Driver);
            let series = results.data.MRData.series;
            let round = RaceTable.round;
            let season = RaceTable.season;

            setRaceData({ circuit, racers, series, round, season });
        }
    }

    function mostrarDatos() {
        console.log(nombre + " " + telefono + " " + fechaNacimiento);
    }

    function actualizarNombre(event: any) {
        setNombre(nombre + event.nativeEvent.data)
        console.log(event)
    }

    function actualizarTel(event: any) {
        setTelefono(telefono + event.nativeEvent.data)
    }

    function actualizarFN(event: any) {
        setFechaNacimiento(fechaNacimiento + event.nativeEvent.data)
    }

    return (
        <div className="RacerApp">
            <div className="Button" onClick={requestData}>
                Solicitar Datos
            </div>

            <div className="Button" onClick={() => setShowData(false)}>
                Esconder Datos
            </div>

            { showData &&
                <div>
                    <div>Competencia {raceData.series} {raceData.round} {raceData.season}</div>

                    <RaceCircuit circuit={raceData.circuit} />

                    {raceData.racers.map(racer => {
                        return <Racer racer={racer} />
                    })}
                </div>
            }

            <div>
                Nombre: 
                <input type="text" onChange={(event) => actualizarNombre(event)} />
            </div>
            <div>
                Telefono: 
                <input type="text" onChange={(event) => actualizarTel(event)} />
            </div>
            <div>
                Fecha Nacimiento: 
                <input type="text" onChange={(event) => actualizarFN(event)} />
            </div>
            <div className="Button" onClick={mostrarDatos}>
                Solicitar Datos
            </div>
        </div>
    );
}

export default RacerApp;
