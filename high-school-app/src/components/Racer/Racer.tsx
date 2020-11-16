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
  return (
    <div className="Racer">
      <a href={racer.url}>{racer.code} {racer.givenName} {racer.familyName} {racer.dateOfBirth} {racer.nationality} {racer.driverId}</a>
    </div>
  );
}

export default Racer;
