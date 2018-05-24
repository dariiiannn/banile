import React from "react";

const transactionsReduce = ( accumulator, currentTransaction ) => {
    switch ( currentTransaction.type ) {
        case "in":
            return accumulator + currentTransaction.amount;
        case "out":
            return accumulator - currentTransaction.amount;
        default:
            return accumulator;
    }
};

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            initialBalance: 0,
            transactions: [
                { id: 1, amount: 100, type: "in" },
                { id: 2, amount: 150, type: "out" },
                { id: 3, amount: 69, type: "out" },
                { id: 4, amount: 1000, type: "in" },
            ],
            newTransationValue: 0,
            newTransactionType: "in",
        };
        this.numberChanged = this.numberChanged.bind( this );
        this.typeChanged = this.typeChanged.bind( this );
        this.onAddTransaction = this.onAddTransaction.bind( this );
    }

    onAddTransaction() {
        const lastId = this.state.transactions[ this.state.transactions.length - 1 ]
            .id;
        this.setState( {
            transactions: [
                ...this.state.transactions,
                {
                    id: lastId + 1,
                    amount: this.state.newTransationValue,
                    type: this.state.newTransactionType,
                },
            ],
        } );
    }

    numberChanged( event ) {
        const parsedValue = parseInt( event.target.value, 10 );
        this.setState( {
            newTransationValue: parsedValue || 0,
        } );
    }

    typeChanged( event ) {
        this.setState( {
            newTransactionType: event.target.value,
        } );
    }

    render() {
        const balance = this.state.transactions.reduce(
            transactionsReduce,
            this.state.initialBalance,
        );
        const listItems = this.state.transactions.map( t => (
            <li key={ t.id }>
                {t.amount} {t.type}
            </li>
        ) );
        return (
            <div>
                <h1>{balance}</h1>
                <ul>{listItems}</ul>
                <div>
                    <input
                        type="number"
                        value={ this.state.newTransationValue }
                        onChange={ this.numberChanged }
                    />
                    <select
                        value={ this.state.newTransactionType }
                        onChange={ this.typeChanged }
                    >
                        <option value="in" selected>
              in
                        </option>
                        <option value="out">out</option>
                    </select>
                    <button onClick={ this.onAddTransaction }>Muie steaua</button>
                </div>
            </div>
        );
    }
}
