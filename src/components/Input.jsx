export default function Input({ title, bill, setBill, numPeople, setNumPeople, icon, autoFocus = false }) {

    return (
        <div data-panel>
            <div data-panel-title>
                <h3>{title}</h3>
                <small>Can't be zero</small>
            </div>
            <div className="input-container">
                {icon}
                <input
                    autoFocus={autoFocus}
                    type="number"
                    placeholder={0}
                    onChange={event => {
                        if (title === 'Bill') {
                            setBill(event.target.value)
                        } else {
                            setNumPeople(event.target.value)
                        }
                    }}
                    onFocus={(event) => event.target.value = ''}
                    value={title === 'Bill' ? bill : numPeople}
                />
            </div>
        </div>
    )
}