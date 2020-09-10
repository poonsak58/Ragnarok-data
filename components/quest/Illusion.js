import Navigate from './Navigation'
import ImagePreview from './ImagePreview'

export default ({ copyNavi }) => {
    return (
        <>
            <h1><span className="mw-headline" id="Learning_About_the_Families">EP 17.1 - Illusion</span></h1>
            <h2><span className="mw-headline" id="Learning_About_the_Families">Rudus Investigation</span></h2>
            <ol>
                <li>Go to your room inside the Prontera Castle. Your room is the bottom one, on the left wing <span className="naviText" onClick={(e) => copyNavi(e)} data-map="prt_cas_q" data-x="30" data-y="28">(prt_cas_q 30, 28)</span><span className="naviCopied d-none">Copied!</span>.</li>
                <li>Speak with <b>Nyhill M. Heine</b> in the room. He tells you Peter isn't doing too well and that he's now next in line to the throne.<dl><dt><img alt="Tg 38.png" src="https://www.novaragnarok.com/wiki/images/7/73/Tg_38.png" width="300" height="175" /></dt></dl></li>
                <li>Go near the entrance of Clana Nemieri, in Einbech <span className="naviText" onClick={(e) => copyNavi(e)} data-map="einbech" data-x="215" data-y="79">(einbech 215, 79)</span><span className="naviCopied d-none">Copied!</span>, and a <b>Rebellion Member</b> member will apear. Speak with him to gather information about the new base of operation.</li>
                <li>Head to the pub, <b>Cat on Bullet</b> <span className="naviText" onClick={(e) => copyNavi(e)} data-map="einbroch" data-x="302" data-y="326">(einbroch 302, 326)</span><span className="naviCopied d-none">Copied!</span>, in Einbroch.</li>
                <li>Go inside and speak with <b>Philofontes</b> <span className="naviText" onClick={(e) => copyNavi(e)} data-map="pub_cat" data-x="94" data-y="104">(pub_cat 94, 104)</span><span className="naviCopied d-none">Copied!</span>. He tells you he found an entry to the abandoned waste of Rudus.</li>
                <li>Rudus's entrance is located at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="ein_fild05" data-x="156" data-y="288">(ein_fild05 156, 288)</span><span className="naviCopied d-none">Copied!</span>. Speak with the <b>Rebellion Member</b> over there to let you in.<br /><i>You now have access to the <a href="/wiki/Illusion#Morning" title="Illusion">Morning</a> daily quest.</i></li>
                <li>Speak with <b>Elena Volkova</b> <Navigate data-map="sp_rudus" data-x="184" data-y="360"/> near the entrance. She tells you there is a barrier blocking the way.
                <ImagePreview src="illusion/n01.png"/>
                </li>
                <li>Walk south and speak with <b>Rookie</b> <Navigate data-map="sp_rudus" data-x="193" data-y="284"/>, in front of the barrier.<ImagePreview src="illusion/n02.png"/></li>
                <li>There are 3 locations you need to gather information from which are shown on your minimap:
<ul><li>A <b>Rebellion Member</b> member at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_rudus" data-x="303" data-y="266">(sp_rudus 303, 266)</span><span className="naviCopied d-none">Copied!</span>.</li>
                        <li>A <b>Rebellion Member</b> member at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_rudus" data-x="121" data-y="286">(sp_rudus 121, 286)</span><span className="naviCopied d-none">Copied!</span>.</li>
                        <li>A Small Hole at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_rudus" data-x="27" data-y="300">(sp_rudus 27, 300)</span><span className="naviCopied d-none">Copied!</span>.</li></ul></li>
                <li>Return to Rookie once you've checked out all of these locations. He managed to unlock the doorway, so you can now speak with the <b>Closed Gate</b> to access behide the wall.</li>
                <li>There are strange noises beyond the barrier and he wants you to find the source of it. You will need to hunt down the following monsters:
<ul><li>10 Dolors.</li>
                        <li>10 Venenums.</li>
                        <li>10 Twin Caputs.</li></ul></li>
                <li>Once you're done, speak with <b>Elena Volkova</b> near the entrance. You will be rewarded with 15 <img src="https://novaragnarok.com/data/items/icons2/25723.png" /> <span className="plainlinks"><a rel="nofollow" className="external text" href="https://www.novaragnarok.com/?module=vending&amp;action=view&amp;id=25723">Cor Cores</a></span> and some experience.</li>
                <li>You can continue the quest with <a href="/wiki/Illusion#Securing_Regenschirm" title="Illusion">Securing Regenschirm</a>.</li>
            </ol>
            <p><br clear="all" /></p>

            <h2><span className="mw-headline" id="Securing_Regenschirm">Securing Regenschirm</span></h2>
            <ol>
                <li>Report your results back to <b>Philofontes</b> <Navigate data-map="pub_cat" data-x="94" data-y="104"/> inside <b>Cat on Bullet</b>. There is a new guest that arrived in the other room.
                <ImagePreview src="illusion/n03.png" width="400" height="233"/>
                </li>
                <li>Talk to the <b>Rebellion Retiree</b> on your right to enter the room.<ImagePreview src="illusion/n04.png" width="400" height="233"/></li>
                <li>Speak with <b>Philofontes</b> inside the room. You learn that the Regenschirm laboratory has been captured by Heart Hunters.</li>
                <li>Speak with the <b>Middle-Aged Gentleman</b> next to <b>Philofontes</b>. He wants to introduce himself and he tells you he's the Vice President of Rekenber, known as Kaya Toss.</li>
                <li>Go at the entrance of Regenschirm <span className="naviText" onClick={(e) => copyNavi(e)} data-map="lighthalzen" data-x="53" data-y="269">(lighthalzen 53, 269)</span><span className="naviCopied d-none">Copied!</span>, next to the Rekenber's Heardquarters in Lighthalzen.</li>
                <li>Speak with the <b>Republic Guard</b>. After preparing for the recapture of the laboratory, Oscar will let you in.
                <ImagePreview src="illusion/n05.png"/>
                </li>
                <li>While in a party, talk to <b>Rekenber Guard Oscar</b> next to the portal and select <b>Generate Regenschirm</b> to start the instance. Talk to him again to enter.
        <ol><li>Move up a little and speak with <b>Aas</b>. You'll be warped to the main hall room.</li>
                        <li>Kill all enemies in the nearby areas. Don't forget the common room at the bottom left. Every single Special Guard must be killed to continue.</li>
                        <li>Go to the restaurant room (on the left), and then click on the <b>Access Controller</b> near the door.
                        <ImagePreview src="illusion/n06.png"/>
                        </li>
                        <li>Talk to the <b>Researcher</b> right next to you so that he can open the door. You'll be warped to hallway.
                        <ImagePreview src="illusion/n07.png"/></li>
                        <li>Walk north clear the left side from all the Deadly Poisonous Gas. There will be an announce afterwards signaling the portal is now unlocked.</li>
                        <li>Enter the conference room on the left and speak with <b>Erst</b>. She gives the code <b>0315</b>.
                        <ImagePreview src="illusion/n08.png"/></li>
                        <li>Use the code on the <b>Access Controller</b> to your left and wait for the cutscene to finish.
                        <ImagePreview src="illusion/n09.png"/></li>
                        <li>Get out of the conference room and head to the bottom right part. You will find more Deadly  Poisonous Gas that you have to clear.</li>
                        <li>Once all the gas has been cleared, you'll be able to access the nearby rooms.</li>
                        <li>Start with the first room at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="1@rgsr" data-x="211" data-y="136">(1@rgsr 211, 136)</span><span className="naviCopied d-none">Copied!</span> and speak with <b>Detained Researcher</b>.</li>
                        <li>Move to the room below and speak with the other <b>Detained Researcher</b>.</li>
                        <li>Do the same step as above for the next room.<br /><i>The third one doesn't disappear after talking to him.</i></li>
                        <li>Go to the last room at the bottom and you'll find <b>Aas</b> waiting for you. Speak to her. Don't forget to take the <b>Scattered Documents</b> on the desk by clicking on them.
                        <ImagePreview src="illusion/n10.png"/><ImagePreview src="illusion/n11.png"/>
                        </li>
                        <li>Leave the room and head to the <b>Central Meeting Room</b>, at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="1@rgsr" data-x="125" data-y="153">(1@rgsr 125, 153)</span><span className="naviCopied d-none">Copied!</span>&gt;. Click on the Central Meeting Room to make <b>Aas</b> and the others appear.
                        <ImagePreview src="illusion/n12.png"/>
                        </li>
                        <li>Speak with <b>Aas</b> and watch the cutscene. Speak with her again when it's over and select <b>Enter</b>.<ImagePreview src="illusion/n13.png"/></li>
                        <li>Walk up near the <b>Restrained Test Subject</b> to trigger the next step.</li>
                        <li>There are 4 control devices in this room. Here is the correct order (if you make an error, you can just redo the same step, you do not start over):
                <ul>
                                <li>Top right control device &gt; Blue Button.</li>
                                <li>Bottom left control device &gt; Red button.</li>
                                <li>Bottom right control device &gt; White Button.</li>
                                <li>Top left control device (near the <b>Restrained Test Subject</b>, on the wall) &gt; Yellow Button.</li>
                            </ul></li>
                        <li>The <b>Restrained Test Subject</b> will go loose, kill it to proceed.</li>
                        <li><b>Aas</b> will appear again, south of the room. Talk to her and select <b>Move to Einbroch</b>.</li>
                    </ol></li>
                <li>Speak with <b>Philofontes</b> inside <b>Cat on Bullet</b>. He will reward you with 25 <img src="https://novaragnarok.com/data/items/icons2/25669.png" /> <span className="plainlinks"><a rel="nofollow" className="external text" href="https://www.novaragnarok.com/?module=vending&amp;action=view&amp;id=25669">Unknown Parts</a></span> and some experience.<br /><i>If you grabbed the Scattered Documents from earlier, you can speak with <b>Philofontes</b> again to get more experience.</i>
                <ImagePreview src="illusion/n03.png" width="400" height="233"/>
                </li>
                <li>You can continue the quest with <a href="/wiki/Illusion#Investigating_Rekenber" title="Illusion">Investigating Rekenber</a>.</li>
            </ol>
            <p><br clear="all" /></p>

            <h2><span className="mw-headline" id="Securing_Regenschirm">Investigating Rekenber</span></h2>
            <ol>
                <li>Speak with <b>Rage</b> inside the pub, at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="pub_cat" data-x="106" data-y="69">(pub_cat 106, 69)</span><span className="naviCopied d-none">Copied!</span>. He's arguing with Kaya Toss about the documents provided and they refuse to believe one another.
                <ImagePreview src="illusion/n14.png" width="400" height="233"/>
                </li>
                <li>Speak with him again down below to know what's happening.</li>
                <li>Speak with <b>Kaya Tos</b> and make a proposal with him. You're suggesting to bring together <b>Rage</b>, <b>Kaya Tos</b>and yourself to investigate the issue.
                <ImagePreview src="illusion/n15.png" width="400" height="233"/>
                </li>
                <li>Talk with <b>Rage</b>. <b>Kaya Tos</b> joins the discussion and accepts the proposal. You'll be rewarded with some experience.</li>
                <li>Head to the Einbroch Airport at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="einbroch" data-x="42" data-y="208">(einbroch 42, 208)</span><span className="naviCopied d-none">Copied!</span> and then speak with <b>Rage</b>. <b>Kaya Tos</b> decided to investigate the whereabouts of <b>Patrick Kaufman</b>.
                <ImagePreview src="illusion/n16.png"/>
                </li>
                <li>Find <b>Rage</b> in Lighthalzen at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="lighthalzen" data-x="259" data-y="215">(lighthalzen 259, 215)</span><span className="naviCopied d-none">Copied!</span>.</li>
                <li>Go to Patrick's House at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="lighthalzen" data-x="336" data-y="266">(lighthalzen 336, 266)</span><span className="naviCopied d-none">Copied!</span> and speak with <b>Rage</b>.</li>
                <li>Go near the Rekenber's Headquarters at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="lighthalzen" data-x="108" data-y="163">(lighthalzen 108, 163)</span><span className="naviCopied d-none">Copied!</span> and speak with <b>Rage</b>.</li>
                <li>Go inside the Headquarters up north. Speak with the <b>Employee</b> member after you enter.
                <ImagePreview src="illusion/n17.png"/>
                </li>
                <li>Walk up to the 2nd floor, on the east side and go to <span className="naviText" onClick={(e) => copyNavi(e)} data-map="lhz_in01" data-x="162" data-y="258">(lhz_in01 162, 258)</span><span className="naviCopied d-none">Copied!</span>. Speak with another <b>Employee</b> member.</li>
                <li>Go to Regenschirm, the building left of the Headquarters <span className="naviText" onClick={(e) => copyNavi(e)} data-map="lighthalzen" data-x="53" data-y="277">(lighthalzen 53, 277)</span><span className="naviCopied d-none">Copied!</span>.</li>
                <li>Speak with the <b>Lab Staff</b> on the right side.
                <ImagePreview src="illusion/n18.png" width="400" height="233"/>
                </li>
                <li>Go to the common room on the bottom left and speak with the <b>Employee</b> member. He doesn't know where Patrick was transffered, so he sends you back to the Office.
                <ImagePreview src="illusion/n19.png" width="400" height="233"/>
                </li>
                <li>Go back to the Headquarters and talk to the <b>Secretary</b> at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="lhz_in01" data-x="80" data-y="210">(lhz_in01 80, 210)</span><span className="naviCopied d-none">Copied!</span>. </li>
                <li>Go to the top left room and speak with the <b>Employee</b> at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="lhz_in01" data-x="32" data-y="264">(lhz_in01 32, 264)</span><span className="naviCopied d-none">Copied!</span>. </li>
                <li>The location is at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="ein_fild01" data-x="95" data-y="146">(ein_fild01 95, 146)</span><span className="naviCopied d-none">Copied!</span>. You'll find <b>Kaya Tos</b>waiting for you over there.
                <ImagePreview src="illusion/n20.png" width="400" height="233"/>
                </li>
                <li>Speak with <b>Kaya Tos</b>and it turns out there is absolutely nothing there. You'll be rewarded with 20 <img src="https://novaragnarok.com/data/items/icons2/25723.png" /> <span className="plainlinks"><a rel="nofollow" className="external text" href="https://www.novaragnarok.com/?module=vending&amp;action=view&amp;id=25723">Cor Cores</a></span> and some experience.</li>
                <li>You can continue the quest with <a href="/wiki/Illusion#Old_Memories" title="Illusion">Old Memories</a>.</li>
            </ol>
            <p><br clear="all" /></p>

            <h2><span className="mw-headline" id="Securing_Regenschirm">Old Memories</span></h2>
            <ol>
                <li>Speak with <b>Philofontes</b> inside <b>Cat on Bullet</b>. He asks you to meet with a Rebellion Member at the North-West region of Einbroch. The Rebellion elders have decided to help you.</li>
                <li>Speak with the <b>Rebellion Member</b> member at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="ein_fild03" data-x="278" data-y="269">(ein_fild03 278, 269)</span><span className="naviCopied d-none">Copied!</span>. There's another suspicious abandoned mine there and he wants you to look around first.
                <ImagePreview src="illusion/n21.png" width="400" height="233"/>
                    <ul><li>Walk near <span className="naviText" onClick={(e) => copyNavi(e)} data-map="ein_fild03" data-x="347" data-y="219">(ein_fild03 347, 219)</span><span className="naviCopied d-none">Copied!</span>.</li>
                        <li>Walk near <span className="naviText" onClick={(e) => copyNavi(e)} data-map="ein_fild03" data-x="268" data-y="207">(ein_fild03 268, 207)</span><span className="naviCopied d-none">Copied!</span>.</li>
                        <li>Walk near <span className="naviText" onClick={(e) => copyNavi(e)} data-map="ein_fild03" data-x="218" data-y="266">(ein_fild03 218, 266)</span><span className="naviCopied d-none">Copied!</span>.</li></ul></li>
                <li>Speak with the <b>Rebellion Member</b> again, you'll be rewarded with some experience.</li>
                <li>While in a party, talk to the <b>Rebellion Member</b> and select <b>Create instance</b> to start the instance. Talk to him again to enter.
                    <ol><li>Speak with <b>Ridsh</b> at the entrance.</li>
                        <li>Right to the right a little and kill the 2 monsters that spawned.</li>
                        <li>A <b>Suspicious Device</b> will appear on the bottom right. Click on it and select <b>Crush it</b> to proceed.</li>
                        <li>Follow the railway until you see an entrance to the camp.</li>
                        <li>Remove all 3 Thick Wires to by clicking on them.</li>
                        <li>Continue following the railway.</li>
                        <li>Walk on the next portal to trigger a short dialogue. <b>Dien</b> will tell you to walk to the right to get back onto the railroad without destroying the door.</li>
                        <li>Keep moving to the top right section and you'll meet with Ridsh. Talk to her. After her dialogue the portal will disappear and you can continue.</li>
                        <li>Walk to the next section at the top right. Follow the railway until you meet with <b>Dien</b> again.</li>
                        <li>Speak with her and you'll be rewarded with 25 <img src="https://novaragnarok.com/data/items/icons2/25669.png" /> <span className="plainlinks"><a rel="nofollow" className="external text" href="https://www.novaragnarok.com/?module=vending&amp;action=view&amp;id=25669">Unknown Parts</a></span> and some experience.</li></ol></li>
                <li>Go back to Clana Nemieri, in Einbech <span className="naviText" onClick={(e) => copyNavi(e)} data-map="einbech" data-x="215" data-y="79">(einbech 215, 79)</span><span className="naviCopied d-none">Copied!</span>, then speak with the <b>Rebellion Member</b> inside at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="rebel_in" data-x="68" data-y="41">(rebel_in 68, 41)</span><span className="naviCopied d-none">Copied!</span>.</li>
                <li>Enter <b>Dien</b>'s room and open the <b>Ornate Box</b> on the desk. Select <b>Take it</b>. You'll get a <img src="https://novaragnarok.com/data/items/icons2/25665.png" /> <span className="plainlinks"><a rel="nofollow" className="external text" href="https://www.novaragnarok.com/?module=vending&amp;action=view&amp;id=25665">Dien's Precious Envelope</a></span>.
                <ImagePreview src="illusion/n22.png" width="400" height="233"/>
                </li>
                <li>Go back to OS and talk with <b>Dien</b> <span className="naviText" onClick={(e) => copyNavi(e)} data-map="ein_fild03" data-x="278" data-y="269">(ein_fild03 278, 269)</span><span className="naviCopied d-none">Copied!</span>&gt; then enter the portal &gt; <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_os" data-x="253" data-y="359">(sp_os 253, 359)</span><span className="naviCopied d-none">Copied!</span>). Hand over the picture and you'll be rewarded with some experience.<br /><i>You now have access to the Cor area.</i><br /><i>You have unlocked the <a href="/wiki/Illusion#Mercenary_vs_Mercenary" title="Illusion">Mercenary vs Mercenary</a> daily quest.</i><br /><i>You have unlocked the <a href="/wiki/Illusion#OS_Mission" title="Illusion">OS Mission</a> quest.</i></li>
                <li>You can continue the quest with <a href="/wiki/Illusion#Helping_the_Workers" title="Illusion">Helping the Workers</a>.</li>
            </ol>
            <p><br clear="all" /></p>

            <h2><span className="mw-headline" id="Securing_Regenschirm">Helping the Workers</span></h2>
            <ol>
                <li>Speak with the <b>Advanced Party</b> near the entrance of Cor <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_cor" data-x="168" data-y="81">(sp_cor 168, 81)</span><span className="naviCopied d-none">Copied!</span>. The workers think you've invaded the area and do not want you here.
                <ImagePreview src="illusion/n23.png" width="400" height="233"/>
                </li>
                <li>Talk to <b>Kaya Tos</b> to let him give his speech. The workers aren't convinced he's really the Vice President of Rekenber.
                <ImagePreview src="illusion/n24.png" width="400" height="233"/>
                </li>
                <li>Speak with <b>Tes</b> and see if he can perhaps convince them. Elyumina will make an appearance and attack the workers. Some of them are injured and need assistance.</li>
                <li>Speak with <b>Tes</b> at the safe place <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_cor" data-x="122" data-y="141">(sp_cor 122, 141)</span><span className="naviCopied d-none">Copied!</span>.</li>
                <li>Speak with <b>Aas</b> nearby. She tells you many of the workers are very sick. You will be rewarded with some experience.<br /><i>You have unlocked the <a href="/wiki/Illusion#Finding_Patrick" title="Illusion">Finding Patrick</a> quest.</i></li>
                <li>You can continue the quest with <a href="/wiki/Illusion#Capturing_Elyumina" title="Illusion">Capturing Elyumina</a>.</li>
            </ol>
            <p><br clear="all" /></p>

            <h2><span className="mw-headline" id="Securing_Regenschirm">Capturing Elyumina</span></h2>
            <ol>
                <li>Speak with the <b>Rebellion</b> at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_cor" data-x="108" data-y="130">(sp_cor 108, 130)</span><span className="naviCopied d-none">Copied!</span>. Elena Volkova will appear next to you.</li>
                <li>Speak with <b>Elena Volkova</b>. Elyumina is causing more trouble.</li>
                <li>Meet with <b>Elena Volkova</b> to the next area to prepare for the operation, near <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_cor" data-x="180" data-y="169">(sp_cor 180, 169)</span><span className="naviCopied d-none">Copied!</span>.</li>
                <li>While in a party, speak with Elena Bolkova and choose <b>Create Cor Operation</b> to create the instance. Talk with her again to enter.
<ol><li>Speak with Elena Bolkova at the entrance.</li>
                        <li>Investigate the Box device on the right <span className="naviText" onClick={(e) => copyNavi(e)} data-map="1@cor" data-x="220" data-y="170">(1@cor 220, 170)</span><span className="naviCopied d-none">Copied!</span>.</li>
                        <li>Kill the mobs that spawned and then talk to the Rebellion next to the Box.</li>
                        <li>Investigate the next Box device north of you <span className="naviText" onClick={(e) => copyNavi(e)} data-map="1@cor" data-x="222" data-y="236">(1@cor 222, 236)</span><span className="naviCopied d-none">Copied!</span>.</li>
                        <li>Kill the mobs that spawned and then talk to the Rebellion next to the Box.</li>
                        <li>The next area will be marked on your minimap <span className="naviText" onClick={(e) => copyNavi(e)} data-map="1@cor" data-x="172" data-y="223">(1@cor 172, 223)</span><span className="naviCopied d-none">Copied!</span>.</li>
                        <li>Talk to Elena Bolkova and choose <b>Give signal</b>.</li>
                        <li>Enter the portal on the left to start the fight.</li>
                        <li>Kill EL1-A17T. In the story version, the mob is very easy and has low HP.</li>
                        <li>Elena will appear, talk with her and end the operation.</li></ol></li>
                <li>Talk with her again outside of the instance. She will reward you with 1 <img src="https://novaragnarok.com/data/items/icons2/25668.png" /> <span className="plainlinks"><a rel="nofollow" className="external text" href="https://www.novaragnarok.com/?module=vending&amp;action=view&amp;id=25668">Broken Weapon</a></span>, 5 <img src="https://novaragnarok.com/data/items/icons2/25723.png" /> <span className="plainlinks"><a rel="nofollow" className="external text" href="https://www.novaragnarok.com/?module=vending&amp;action=view&amp;id=25723">Cor Cores</a></span> and some experience.</li>
                <li>Speak with <b>Goni</b> at the Barrack <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_cor" data-x="136" data-y="210">(sp_cor 136, 210)</span><span className="naviCopied d-none">Copied!</span>. Rookie said he will do the interrogation.</li>
                <li>Talk to <b>Rookie</b>. You learn about how to enter Varmundt's Mansion.</li>
                <li>Go the specified coordinates <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_cor" data-x="255" data-y="285">(sp_cor 255, 285)</span><span className="naviCopied d-none">Copied!</span> and speak with Rookie. You will be rewarded with some experience.<br /><i>You have completed the Illusion episode quest.</i><br /><i>You have unlocked the <a href="/wiki/Cor_Mission" title="Cor Mission">Cor Mission</a> instance daily quest.</i><br /><i>You have unlocked the <a href="/wiki/Illusion#Helping_Farm_Worker" title="Illusion">Helping Farm Worker</a> daily quest.</i><br /><i>You have unlocked the <a href="/wiki/Illusion_Equipments_and_Enchants_(17.1)" title="Illusion Equipments and Enchants (17.1)">Illusion Equipments and Enchants</a> with Elyumina.</i></li>
            </ol>
            <p><br clear="all" /></p>

            <h2><span className="mw-headline" id="Securing_Regenschirm">Finding Patrick</span></h2>
            <ol>
                <li>Speak with <b>Kaya Tos</b> inside Cor at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_cor" data-x="136" data-y="146">(sp_cor 136, 146)</span><span className="naviCopied d-none">Copied!</span>. He wants you to continue the investigation of Patrick Kaufman. Accept his request.</li>
                <li>Speak with a <b>Worker</b> nearby <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_cor" data-x="132" data-y="144">(sp_cor 132, 144)</span><span className="naviCopied d-none">Copied!</span>.</li>
                <li>Go to the farm area and speak with the <b>Researcher</b> over there <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_cor" data-x="224" data-y="77">(sp_cor 224, 77)</span><span className="naviCopied d-none">Copied!</span>.
                <ImagePreview src="illusion/n28.png" width="400" height="233"/>
                </li>
                <li>Go to the laundry area and speak with a <b>Worker</b> <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_cor" data-x="151" data-y="180">(sp_cor 151, 180)</span><span className="naviCopied d-none">Copied!</span>.
                <ImagePreview src="illusion/n29.png" width="400" height="233"/>
                </li>
                <li>Go to the incinerator and speak with another <b>Worker</b> <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_cor" data-x="70" data-y="263">(sp_cor 70, 263)</span><span className="naviCopied d-none">Copied!</span>. He says there is another disposal site at Rudus.
                <ImagePreview src="illusion/n30.png" width="400" height="233"/>
                </li>
                <li>Go back to Rudus, the entrance is at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="ein_fild05" data-x="156" data-y="288">(ein_fild05 156, 288)</span><span className="naviCopied d-none">Copied!</span>.</li>
                <li>Investigate the <b>Suspicious Trace</b> at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_rudus" data-x="227" data-y="351">(sp_rudus 227, 351)</span><span className="naviCopied d-none">Copied!</span>. You're hearing voices nearby.
                <ImagePreview src="illusion/n31.png" width="400" height="233"/>
                </li>
                <li>Go over the barrier and then walk all the way to the left at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_rudus" data-x="15" data-y="280">(sp_rudus 15, 280)</span><span className="naviCopied d-none">Copied!</span>. Speak with the <b>Discarded Person</b>. You will be rewarded with some experience.
                <ImagePreview src="illusion/n32.png" width="400" height="233"/>
                </li>
                <li>The Discarded Person tells you to look for an Identification Bracelet in the garbage. You need to investigate 4 locations from the list below:
<ul><li>Suspicious Evidence - <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_rudus" data-x="236" data-y="46">(sp_rudus 236, 46)</span><span className="naviCopied d-none">Copied!</span></li>
                        <li>Suspicious Evidence - <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_rudus" data-x="55" data-y="137">(sp_rudus 55, 137)</span><span className="naviCopied d-none">Copied!</span></li>
                        <li>Suspicious Evidence - <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_rudus" data-x="332" data-y="235">(sp_rudus 332, 235)</span><span className="naviCopied d-none">Copied!</span></li>
                        <li>Suspicious Evidence - <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_rudus" data-x="364" data-y="134">(sp_rudus 364, 134)</span><span className="naviCopied d-none">Copied!</span></li>
                        <li>Suspicious Evidence - <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_rudus" data-x="221" data-y="165">(sp_rudus 221, 165)</span><span className="naviCopied d-none">Copied!</span></li></ul></li>
                <li>After you Patrick Kaufman's Identification Bracelet, report back to <b>Kaya Tos</b>.</li>
                <li>You will be rewarded with 20 <img src="https://novaragnarok.com/data/items/icons2/25723.png" /> <span className="plainlinks"><a rel="nofollow" className="external text" href="https://www.novaragnarok.com/?module=vending&amp;action=view&amp;id=25723">Cor Cores</a></span> and some experience.<br /><i>You have unlocked the <a href="/wiki/Illusion#Retrieving_Identification_Bracelets" title="Illusion">Retrieving Identification Bracelets</a> daily quest.</i></li>
            </ol>
            <p><br clear="all" /></p>

            <h2><span className="mw-headline" id="Securing_Regenschirm">OS Mission</span></h2>
            <ol>
                <li>Speak with Erst at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="sp_cor" data-x="163" data-y="56">(sp_cor 163, 56)</span><span className="naviCopied d-none">Copied!</span>. If you do not see her, walk near her location to make her appear.</li>
                <li>While in a party, speak with her again and choose <b>Generate OS Mission</b>. Then one more time to enter the instance.</li>
                <li>Once inside, the briefing will start. Wait for the cutscene a little.<br /><i>Do not leave the area, as the poison clouds will kill you if you walk on them.</i></li>
                <li>You'll be asked to give your status report to the communication device, it will be flashing blue. Speak to it and select any option.</li>
                <li>You'll be asked again after another cutscene, and select any option again.</li>
                <li>After the strike, talk to the device to get the navi for the next location <span className="naviText" onClick={(e) => copyNavi(e)} data-map="1@os_a" data-x="52" data-y="177">(1@os_a 52, 177)</span><span className="naviCopied d-none">Copied!</span>.</li>
                <li>Talk to the other device and let the small cutscene happen.</li>
                <li>Follow the navi lines by moving north. You'll have to kill some mobs.</li>
                <li>Once the mobs are killed, walk near the blue light at <span className="naviText" onClick={(e) => copyNavi(e)} data-map="1@os_a" data-x="84" data-y="256">(1@os_a 84, 256)</span><span className="naviCopied d-none">Copied!</span>.</li>
                <li>Repeat the same thing, and then go to <span className="naviText" onClick={(e) => copyNavi(e)} data-map="1@os_a" data-x="163" data-y="266">(1@os_a 163, 266)</span><span className="naviCopied d-none">Copied!</span>.
                <ImagePreview src="illusion/n25.png" width="400" height="233"/>
                </li>
                <li>And... again, then go to <span className="naviText" onClick={(e) => copyNavi(e)} data-map="1@os_a" data-x="138" data-y="174">(1@os_a 138, 174)</span><span className="naviCopied d-none">Copied!</span>.
                <ImagePreview src="illusion/n26.png" width="400" height="233"/>
                </li>
                <li>Kill Miguel on the right side.</li>
                <li>Speak with Erst. You will get 1 <img src="https://novaragnarok.com/data/items/icons2/25668.png" /> <span className="plainlinks"><a rel="nofollow" className="external text" href="https://www.novaragnarok.com/?module=vending&amp;action=view&amp;id=25668">Broken Weapon</a></span>, 5 <img src="https://novaragnarok.com/data/items/icons2/25723.png" /> <span className="plainlinks"><a rel="nofollow" className="external text" href="https://www.novaragnarok.com/?module=vending&amp;action=view&amp;id=25723">Cor Cores</a></span> and some experiencce.<br /><i>You have now unlocked the <a href="/wiki/OS_Mission" title="OS Mission">OS Mission</a> instance daily quest.</i>
                <ImagePreview src="illusion/n27.png" width="400" height="233"/>
                </li>
            </ol>
            <p><br clear="all" /></p>
        </>
    )
}
