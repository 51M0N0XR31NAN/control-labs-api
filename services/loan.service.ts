import { AcceptLoanResult, CreateLoanRequest, Loan, LoanFilter } from '../models/loan.model';

const loans: Loan[] = [];
let nextId = 801;

export class LoanService {
  public static async createLoan(data: CreateLoanRequest): Promise<Loan> {
    const loan: Loan = { id: nextId++, ...data, status: 'PENDING', createdAt: new Date() };
    loans.push(loan);
    return loan;
  }

  public static async getLoansByFilter(filter: LoanFilter): Promise<Loan[]> {
    const room = filter.room?.toLowerCase();

    return loans.filter(
      (loan) =>
        (!room || loan.aula.toLowerCase().includes(room)) &&
        (!filter.startDate || loan.createdAt >= filter.startDate) &&
        (!filter.endDate || loan.createdAt <= filter.endDate),
    );
  }

  public static async getLoanById(id: number): Promise<Loan | undefined> {
    return loans.find((loan) => loan.id === id);
  }

  public static async acceptLoan(id: number): Promise<AcceptLoanResult> {
    const loan = loans.find((l) => l.id === id);

    if (!loan) return { result: 'NOT_FOUND' };
    if (loan.status === 'ACCEPTED') return { result: 'ALREADY_ACCEPTED' };

    loan.status = 'ACCEPTED';
    return { result: 'ACCEPTED', loan };
  }
}