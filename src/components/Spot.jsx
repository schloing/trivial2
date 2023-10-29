export function Spot(props) {
    return (
        <div class={"spot"}>
            <p class={"title"}>{props.title}</p>
            <img src={props.source}></img>
            <p class={"descr"}>{props.descr}</p>
        </div>
    )
}