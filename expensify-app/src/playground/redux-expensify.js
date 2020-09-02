import { createStore, combineReducers  } from 'redux';
import uuid from 'uuid'

const addExpense = (
    {
        description = '', note = '', amount = 0, createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            // return state.concat(action.expense)
            return [
                ...state,
                action.expense
            ];
        case 'REDUCE_EXPENSE':
            return state.filter(( { id } )=> id !== action.id);
        default:
            return state; 
    }
};


const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
};

const filtersReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type){
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
    })
);

store.subscribe(()=>{
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }))


store.dispatch(removeExpense({ id: expenseOne.expense.id}))
console.log(expenseOne);




const demoState = {
    expenses: [{
        id: 'poijasdfhwer',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
    }
};