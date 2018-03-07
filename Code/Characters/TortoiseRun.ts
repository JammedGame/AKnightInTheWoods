export { TortoiseRun }

import { Character } from "./Character";

class TortoiseRun extends Character
{
    public constructor(Old?:TortoiseRun)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this._IdleLength = 2;
            this._CharacterString = "TortoiseRun";
            this.Name = "Sir Aristurtle";
        }
    }
}