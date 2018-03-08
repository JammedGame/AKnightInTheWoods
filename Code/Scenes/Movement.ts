export { Movement }

import * as Engineer from "engineer-js";

import { Dialog } from "./../Dialog";
import { GameScene } from "./GameScene";

class Movement
{
    private _GameScene:GameScene;
    private _Left:boolean = false;
    private _Right:boolean = false;
    public constructor(GameScene:GameScene, Type:string)
    {
        this._GameScene = GameScene;
        if(Type == "Path") GameScene.Events.TimeTick.push(this.Move1.bind(this));
        if(Type == "Camp") GameScene.Events.TimeTick.push(this.Move2.bind(this));
        GameScene.Events.KeyDown.push(this.KeyDown.bind(this));
        GameScene.Events.KeyUp.push(this.KeyUp.bind(this));
    }
    private Move1()
    {
        if(Dialog.Single && Dialog.Single._Shown) return;
        if(this._Left && !this._Right)
        {
            if(this._GameScene.Trans.Translation.X>=-3760)
            {
                this._GameScene.Trans.Translation = new Engineer.Vertex(this._GameScene.Trans.Translation.X - 5, this._GameScene.Trans.Translation.Y, 0);
                this._GameScene.Player.Data["ST"] = this._GameScene.Trans.Translation;
            }
            else if(this._GameScene.Player.Trans.Translation.X<=1720)
            {
                this._GameScene.Player.Trans.Translation = new Engineer.Vertex(this._GameScene.Player.Trans.Translation.X + 5, this._GameScene.Player.Trans.Translation.Y, this._GameScene.Player.Trans.Translation.Z);
            }
            this._GameScene.Player.UpdateSpriteSet(2);
        }
        if(this._Right && !this._Left)
        {
            if(this._GameScene.Trans.Translation.X<=0)
            {
                this._GameScene.Trans.Translation = new Engineer.Vertex(this._GameScene.Trans.Translation.X + 5, this._GameScene.Trans.Translation.Y, 0);
                this._GameScene.Player.Data["ST"] = this._GameScene.Trans.Translation;
            }
            else if(this._GameScene.Player.Trans.Translation.X>=200)
            {
                this._GameScene.Player.Trans.Translation = new Engineer.Vertex(this._GameScene.Player.Trans.Translation.X - 5, this._GameScene.Player.Trans.Translation.Y, this._GameScene.Player.Trans.Translation.Z);
            }
            this._GameScene.Player.UpdateSpriteSet(3);
        }
    }
    private Move2()
    {
        if(Dialog.Single && Dialog.Single._Shown) return;
        if(this._Left && !this._Right)
        {
            if(this._GameScene.Player.Trans.Translation.X<=1200)
            {
                this._GameScene.Player.Trans.Translation = new Engineer.Vertex(this._GameScene.Player.Trans.Translation.X + 5, this._GameScene.Player.Trans.Translation.Y, this._GameScene.Player.Trans.Translation.Z);
            }
            this._GameScene.Player.UpdateSpriteSet(2);
        }
        if(this._Right && !this._Left)
        {
            if(this._GameScene.Player.Trans.Translation.X>=400)
            {
                this._GameScene.Player.Trans.Translation = new Engineer.Vertex(this._GameScene.Player.Trans.Translation.X - 5, this._GameScene.Player.Trans.Translation.Y, this._GameScene.Player.Trans.Translation.Z);
            }
            this._GameScene.Player.UpdateSpriteSet(3);
        }
    }
    private KeyDown(Game:Engineer.Game, Args:any) : void
    {
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