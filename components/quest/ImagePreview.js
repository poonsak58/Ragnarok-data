export default ({src, width = "300", height = "175"}) => {

    return (
        <>
            <dl><dt><img alt="" src={process.env.BACKEND_URL + '/images/' + src} width={width} height={height} /></dt></dl>
        </>
    )
}
