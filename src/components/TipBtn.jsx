export default function TipBtn({ className, index, value = 0, color, setPercentage, setActiveIndex }) {
    // const style = { backgroundColor: 'hsl(189, 41%, 97%)', color: 'hsl(186, 14%, 43%)' }
    
    return (
        <button
            className={className}
            onClick={() => {
                setPercentage(value)
                setActiveIndex(index)
            }}
        >
            {value === 0 ? `Custom` : `${value}%`}
        </button>
    )
}