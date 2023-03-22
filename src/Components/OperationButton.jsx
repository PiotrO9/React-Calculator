export default function OperationButton({operation}) {
        if(operation == "RESET" || operation == "=") {
            return <button className="span-two">{operation}</button>
        }
        else {
            return <button>{operation}</button>
        }
}