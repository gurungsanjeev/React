/// for the balance
const balanceKey = 'ExpenseTracker';

export const getLocalStorageBalanceData = () => {
    const rawBalance = localStorage.getItem(balanceKey);
    return rawBalance ? parseFloat(JSON.parse(rawBalance)) : 0;
};

export const setLocalStorageBalanceData = (balance) => {
    localStorage.setItem(balanceKey, JSON.stringify(balance));
};


/// for the income


const incomeKey = "Income";

export const getLocalStorageIncomeData = () => {
    const rawIncome = localStorage.getItem(incomeKey);
    return rawIncome ? parseFloat(JSON.parse(rawIncome)) : "";
};

export const setLocalStorageIncomeData = (totalIncome) => {
    localStorage.setItem(incomeKey, JSON.stringify(totalIncome));
};

/// for the expenses

const expensesKey = "expenses"
export const  getLocalStorageExpensesData=()=>{

    const rawExpenses =localStorage.getItem(expensesKey);
    return rawExpenses? parseFloat(JSON.parse(rawExpenses)): ""
}




export const setLocalStorageExpensesData= (totalExpenses)=>{

    localStorage.setItem(expensesKey, JSON.stringify(totalExpenses));
}






