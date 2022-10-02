export default function TipBtn({ value = 0, color, setPercentage }) {
    const style = { backgroundColor: 'hsl(189, 41%, 97%)', color: 'hsl(186, 14%, 43%)' }
    
    return (
        <button
            className="tip-btn"
            style={color === 'green' ? style : {}}
            onClick={() => setPercentage(value)}
        >
            {value === 0 ? `Custom` : `${value * 100}%`}
        </button>
    )
}