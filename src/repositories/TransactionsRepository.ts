import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}
interface createTransaction {
  title: string;
  type: 'income' | 'outcome';
  value: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const balance = this.transactions.reduce(
      (soma: Balance, transaction: Transaction) => {
        switch (transaction.type) {
          case 'income':
            soma.income += transaction.value;
            break;
          case 'outcome':
            soma.outcome += transaction.value;
            break;
          default:
            break;
        }
        soma.total = soma.income - soma.outcome;
        return soma;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );

    return balance;
  }

  public create({ title, type, value }: createTransaction): Transaction {
    // TODO
    const transaction = new Transaction({ title, type, value });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
