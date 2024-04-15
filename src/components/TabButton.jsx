export default function TabButton({ children, onHandleClick }) {

    return (
        <li>
            <button onClick={onHandleClick}>{children}</button>
        </li>
    )

}