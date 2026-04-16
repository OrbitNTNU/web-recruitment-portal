const AltBackground = () => {
    return (
        <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute w-[600px] h-[600px] bg-[var(--color-night-sky)] blur-[80px] -top-40 -left-40"></div>
            <div className="absolute w-[500px] h-[500px] bg-[var(--color-charcoal)] blur-[80px] bottom-0 right-0"></div>
        </div>
    )
}

export default AltBackground;