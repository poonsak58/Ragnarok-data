export default ({ copyNavi }) => {
    return (
        <>
            <h2><span className="mw-headline" id="Learning_About_the_Families">New World access quest</span></h2>
            <ol>
                <li>Go to the <a href="/wiki/Eden_Group" title="Eden Group">Eden Group</a> Headquarters and then talk with the <b>Cat Hand agent</b>, who is situated near the desk on the first floor (ground floor).
                                <ul><li>Choose "<b>Why don't you collect it yourself?</b>", and then "<b>I'll help the merchants</b>".</li></ul></li>
                <li>Pay the one-time fee of 50,000 zeny, and he will then teleport you to the quarantined area of the Sograt Desert.</li>
                <li>Walk east and then talk with the cat <span className="naviText" data-map="moc_fild20" data-x="368" data-y="197" onClick={(e) => copyNavi(e)}>(moc_fild20 368, 197)</span><span className="naviCopied d-none">Copied!</span>
                    <ul><li>Choose "<b>Let's do this!</b>", and he will then teleport you to the Dimensional Gorge.</li></ul></li>
                <li>Walk north and then talk with the <b>Cat Hand agent</b>.
                                <ul><li>Choose "<b>To the other world!</b>", and he will then teleport you to the New World.</li></ul></li></ol>
            <p><br clear="all" /></p>
        </>
    )
}
