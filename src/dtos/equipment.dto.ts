export interface ICreateEquipmentDTO {
  roomId: number;
}

export interface IUpdateEquipmentDTO {
  estadoTecnico?: string;
  roomId?: number;
}