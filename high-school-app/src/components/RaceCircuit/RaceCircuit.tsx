import React from 'react';
import './RaceCircuit.scss';

interface IRaceCircuitProps {
  circuit: IRaceCircuit;
}

export interface IRaceCircuit {
  circuitName: string;
  Location: { country: string, locality: string };
}

export let emptyRaceCircuit = {
  circuitName: '',
  Location: { country: '', locality: '' }
}

function RaceCircuit(props: IRaceCircuitProps) {
  return (
    <div className="RaceCircuit">
      Nombre: {props.circuit.circuitName} Ubicacion: {props.circuit.Location.locality}, {props.circuit.Location.country}
    </div>
  );
}

export default RaceCircuit;
