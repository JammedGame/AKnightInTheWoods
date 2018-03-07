export { Arena };

import { Player } from "./../Player";
import { Movement } from "./Movement";
import { GameScene } from "./GameScene";

class Arena extends GameScene
{
    public constructor(Name:string)
    {
        super();
        this.Name = Name;
    }
    public Init(): void
    {
        this.GenerateBackground();

        this._Movement = new Movement(this, "Arena");

        this._Player = new Player();
        this._Player.Init({X:200,Y:950,Z:1.3},{X:279,Y:333});
        this.AddSceneObject(this._Player);
    }
}