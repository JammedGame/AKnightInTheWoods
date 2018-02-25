export { Movement }

import Engineer from "./Engineer";
import { GameScene } from "./GameScene";

class Movement
{
    private _GameScene:GameScene;
    private _Left:boolean = false;
    private _Right:boolean = false;

    public constructor(GameScene:GameScene)
    {
        this._GameScene = GameScene;
        GameScene.Events.TimeTick.push(this.Move.bind(this));
        GameScene.Events.KeyDown.push(this.KeyDown.bind(this));
        GameScene.Events.KeyUp.push(this.KeyUp.bind(this));
    }

    private Move()
    {
        if(this._Left && !this._Right)
        {
            if(this._GameScene.Trans.Translation.X>=-3760)
            {
                this._GameScene.Trans.Translation = new Engineer.Vertex(this._GameScene.Trans.Translation.X - 2, this._GameScene.Trans.Translation.Y, 2);
            }
            else if(this._GameScene.Player.Trans.Translation.X<=1720)
            {
                this._GameScene.Player.Trans.Translation = new Engineer.Vertex(this._GameScene.Player.Trans.Translation.X + 2, this._GameScene.Player.Trans.Translation.Y, 2);
            }
            this._GameScene.Player.UpdateSpriteSet(2);
        }
        if(this._Right && !this._Left)
        {
            if(this._GameScene.Trans.Translation.X<=0)
            {
                this._GameScene.Trans.Translation = new Engineer.Vertex(this._GameScene.Trans.Translation.X + 2, this._GameScene.Trans.Translation.Y, 2);
            }
            else if(this._GameScene.Player.Trans.Translation.X>=200)
            {
                this._GameScene.Player.Trans.Translation = new Engineer.Vertex(this._GameScene.Player.Trans.Translation.X - 2, this._GameScene.Player.Trans.Translation.Y, 2);
            }
            this._GameScene.Player.UpdateSpriteSet(3);
        }
    }

    private KeyDown(Game:Engineer.Game, Args:any) : void
    {
        console.log(Args.KeyCode);
        if(Args.KeyCode == 68)
        {
            if(!this._Right)
            {
            this._Left = true; 
            }
        }
        else if(Args.KeyCode == 65)
        {
            if(!this._Left)
            {
            this._Right = true; 
            }                  
        }
    }

    private KeyUp(Game:Engineer.Game, Args:any) : void
    {
        if(Args.KeyCode == 68)
        {
            if(this._Left)
            {
                this._Left = false;
                this._GameScene.Player.UpdateSpriteSet(0);
            }            
        }
        else if(Args.KeyCode == 65)
        {
            if(this._Right)
            {
                this._Right = false;
                this._GameScene.Player.UpdateSpriteSet(1);
            }            
        }
    }
}