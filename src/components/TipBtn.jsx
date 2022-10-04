export default function TipBtn({ className, index, value = 0, setPercentage, setActiveIndex }) {
    
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