export default function Amount({ title, amount }) {

    return (
        <div data-panel className="flex">
            <div>
                <h3>{title}</h3>
                <span className="person">/ person</span>
            </div>
            <span className="amount">{Number.isNaN(amount) || amount === Infinity ? `$0.00` : `$${amount.toFixed(2)}`}</span>
        </div>
    )
}