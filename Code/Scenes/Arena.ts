export { Arena };

import * as TBX from "toybox-engine";

import { Player } from "./../Player";
import { Movement } from "./Movement";
import { GameScene } from "./GameScene";

class Arena extends GameScene
{
    public DialogString: string;
    private _Set:number;
    public constructor(Name:string)
    {
        super();
        this.Name = Name;
    }
    public Init(): void
    {
        super.Init();
        this.GenerateBackground();

        this._Movement = new Movement(this, "Arena");

        this._Player = new Player();
        this._Player.Init({X:200,Y:950,Z:1.3},{X:279,Y:333});
        this._Player.SetSpriteSet(this._Set);
        this.Attach(this._Player);
    }
    public SetSpriteSet(Set:number)
    {
        this._Set = Set;
    }
    public OnSwitch()
    {
        super.OnSwitch();
        this._Dialog.SetDialog(this.DialogString, 0);
        this._Dialog.Show();
    }
}