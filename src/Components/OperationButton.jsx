export default function OperationButton({operation, operationClick, evalClick})
 {
        const operationClicked = () => {
            operationClick(operation)
        }

        if(operation == "RESET") {
            return <button onClick={operationClicked} className="span-two">{operation}</button>
        }
        else if(operation == "=") {
            return <button onClick={evalClick} className="span-two">{operation}</button>
        }
        else if(operation == "DEL") {
            return <button onClick={operationClicked} className="special-operation">{operation}</button>
        }
        else {
            return <button onClick={operationClicked}>{operation}</button>
        }
}