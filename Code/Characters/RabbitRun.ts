export { RabbitRun }

import { Character } from "./Character";

class RabbitRun extends Character
{
    public constructor(Old?:RabbitRun)
    {
        super(Old);
        if(Old)
        {

        }
        else
        {
            this._IdleLength = 2;
            this._CharacterString = "RabbitRun";
            this.Name = "Knight Carrot";
        }
    }
}