"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loanService = void 0;
const in_memory_loan_repository_1 = require("./repositories/in-memory-loan.repository");
const loan_service_1 = require("../services/loan.service");
const loanRepository = new in_memory_loan_repository_1.InMemoryLoanRepository();
exports.loanService = new loan_service_1.LoanService(loanRepository);
