export default (state, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
  }
};
