import React from 'react';
import './Racer.scss';

export interface IRacerProps {
    racer: IRacer;
}

export interface IRacer {
    code: string;
    dateOfBirth: string;
    driverId: string;
    familyName: string;
    givenName: string;
    nationality: string;
    url: string;
}

function Racer({ racer }: IRacerProps) {

  function racerClick() {
    alert(racer.givenName + ' ' + racer.familyName);
  }

  return (
    <div className="Racer" onClick={racerClick}>
      <a href={racer.url}>{racer.code} {racer.givenName} {racer.familyName} {racer.dateOfBirth} {racer.nationality} {racer.driverId}</a>
    </div>
  );
}

export default Racer;
