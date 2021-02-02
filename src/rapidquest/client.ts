import axios from 'axios'
import { Graph, Fact, Factoid, Callbacks, KnowledgeBase, KnowledgeGraph, Brain, Rule } from 'inferencegraph'


export class RapidQuest extends Object {

    private _apikey : string;
    private _userid : string;
    private _serverurl : string;

    constructor(server: string, userid: string, apikey: string) {
        super();
        this._apikey = apikey
        this._userid = userid
        this._serverurl = server
    }

    public async getQuest(questid: string):Promise<Quest> {
        try {
            const res = await axios.get(this._serverurl + '/client/quest/' + questid, {
                headers: {
                    apikey: this._apikey,
                    userid: this._userid
                }
            })

            console.log(res.status)
            if (res.status === 200) {
                console.log(res)
                return new Quest(res.data);
            } else {
                throw Error(res.data)
            }
        } catch (err) {
            return err
        }
    }
}

export class Quest extends Object {

    private _quest : unknown;
    public isAxiosError : boolean;
    public stack : string;

    constructor(quest: string) {
        super();
        this._quest = quest
    }

    public getData(): unknown {
        return this._quest;
    }

    /**
     * Does the entry/exit point of playing a quest occur through this object?
     */
}

/**
 * Manages state for server side quest playing
 */
export class QuestSession extends Object {

}

/**
 * Stores all the input/outputs passed to a Quest object to play the quest
 */
export class QuestContext extends Object {

}

export class Player extends Object {


}

export class Class extends Object {


}

export class Race extends Object {


}

export class Location extends Object {


}

export class Story extends Object {


}

export class Map extends Object {


}

export class Speaker extends Object {


}

export class NPC extends Object {


}

export class Item extends Object {


}

export class Skill extends Object {


}

export class Property extends Object {


}

export class Feat extends Object {


}

export class Ability extends Object {


}

export class Behavior extends Object {


}

export class Note extends Object {


}

export class Speech extends Object {


}

export class Decision extends Object {


}

export class Journal extends Object {


}

export class Input extends Object {


}

