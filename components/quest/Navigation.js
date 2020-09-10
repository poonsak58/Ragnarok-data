export default (props) => {

    const copyNavi = (e) => {
        let map = e.target.getAttribute("data-map")
        let mapX = e.target.getAttribute("data-x")
        let mapY = e.target.getAttribute("data-y")

        var textField = document.createElement('textarea')
        textField.innerText = `/navi ${map} ${mapX}/${mapY}`
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()

        e.target.classList.add("d-none")
        e.target.nextSibling.classList.remove("d-none")

        e.persist()
        setTimeout(() => {
            e.target.classList.remove("d-none")
            e.target.nextSibling.classList.add("d-none")
        }, 1000);
    }

    return (
        <>
            <span className="naviText" onClick={(e) => copyNavi(e)} data-map={props['data-map']} data-x={props['data-x']} data-y={props['data-y']}>({props['data-map']} {props['data-x']}, {props['data-y']})</span>
            <span className="naviCopied d-none">Copied!</span>
        </>
    )
}
