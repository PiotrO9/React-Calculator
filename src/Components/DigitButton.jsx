export default function DigitButton({digit, digitClick}) {
    const digitClicked = () => {
        digitClick(digit)
    }

    return (
        <button onClick={digitClicked}>
            {digit}
        </button>
    )
}