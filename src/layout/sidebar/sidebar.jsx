import React, { Component } from "react"
import "./sidebar.css";

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            pastArticles: {},
        }
    }

    render() {
        return(
            <div>
                <h4 className="previousArticleTitle">Previous Article Snippet Title 1</h4>
                <p className="previousArticleContent">Out of all the tests over the last few months that was the one where, finally, everything came together, coalesced into a feeling of understanding that allowed me to really, truly, enjoy the game. Additionally, a guild designed from the outset for WvWvW can focus on specific perks that help in those specific situations, unlike a smaller guild which often has to also suit folks who like some PvE or crafting or whatever. Other than my lack of interest in Guild Wars 2, I suppose I'd be the kind of relatively inactive annual pass player that they might be targeting with this launch window.</p>
                <h4 className="previousArticleTitle">Previous Article Snippet Title 2</h4>
                <p className="previousArticleContent">Don’t capture the South GY unless you know exactly what you are doing. You see, I was a gamer girl before the term existed and opportunities to play female characters in video games were rare, especially in fantasy/adventure type games. Qeynos is a bit more welcoming to me lately, always optimistic, while Freeport has a lot of sinister stories. For instance, SWTOR has over 200,000 lines of spoken dialogue, as verified by Guinness World Records. First, we notice there are no petite Republic chicks. Hard Mode drops a specific tier of gear. Hard Mode flashpoints drop Tionese, Eternity Vault drops Columni, Karagga's Palace drops Rakata, and Explosive Conflict drops Black Hole.</p>
                <h4 className="previousArticleTitle">Previous Article Snippet Title 3</h4>
                <p className="previousArticleContent">As the Horde offensive progresses, Alliance casualties will be sent back to progressively higher levels – first E/W, then South, then the Courtyard. I’ve thus been scouring the various GW2 fansites for the last week, trying to match up armour types, professions, and races. I was able to mow down the zombies in Kingsmouth faster with the new, barely any points character than I could with my elder Paladin-deck character. I’ve previously talked about the true dynamic nature of WH space in EVE, and I want to use last weekends Op as a backdrop to sum that thought up and perhaps add some clarity to it as well.</p>
            </div>
        )
    }
}

export default Sidebar;