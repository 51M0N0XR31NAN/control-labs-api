export interface ICreateIncidentDTO {
  /** Associate the incident with exactly one equipment or room. */
  equipmentId?: number;
  roomId?: number;
}

export interface IUpdateIncidentDTO {
  /** New incident state; allowed state values should be defined by the business rules. */
  estado: string;
}
