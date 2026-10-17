export interface CreateLoanRequest {
  aula: string;
  numeroPC: number;
  mouse: number;
  teclados: number;
  nombreGuardaEntrega: string;
  instructorRecibe: string;
}

export interface Loan extends CreateLoanRequest {
  id: number;
  status: 'PENDING' | 'ACCEPTED';
  createdAt: Date;
}
export interface LoanFilter {
  room?: string;
  startDate?: Date;
  endDate?: Date;
}

// Resultado posible de aceptar un préstamo
export type AcceptLoanResult =
  | { result: 'NOT_FOUND' }
  | { result: 'ALREADY_ACCEPTED' }
  | { result: 'ACCEPTED'; loan: Loan };