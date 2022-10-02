export default function Amount({ title, amount}) {
    return (
        <div data-panel className="flex">
            <div>
                <h3>{title}</h3>
                <span className="person">/ person</span>
            </div>
            <span className="amount">{`$${amount.toFixed(2)}`}</span>
        </div>
    )
}