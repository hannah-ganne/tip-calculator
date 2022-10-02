export default function Section({ children, color }) {
    const style = { backgroundColor: 'hsl(183, 100%, 15%)', color: '#FFFFFF' }
    
    return (
        <section style={color === 'green' ? style : {}}>
            {children}
        </section>
    )
}