export interface ICreateRoomDTO {
  capacidad: number;
  ubicacion: string;
}

export interface IUpdateRoomDTO {
  capacidad?: number;
  estadoOperativo?: string;
}
