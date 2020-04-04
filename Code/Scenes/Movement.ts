export { Movement }

import * as TBX from "toybox-engine";

import { Dialog } from "./../Dialog";
import { GameScene } from "./GameScene";

const MOV_SPEED = 20;

class Movement
{
    private _GameScene:GameScene;
    private _Left:boolean = false;
    private _Right:boolean = false;
    private _Type:string;
    public constructor(GameScene:GameScene, Type:string)
    {
        this._GameScene = GameScene;
        this._Type = Type;
        if(Type == "Path") GameScene.Events.Update.push(this.Move1.bind(this));
        if(Type == "Camp") GameScene.Events.Update.push(this.Move2.bind(this));
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
                this._GameScene.Trans.Translation = new TBX.Vertex(this._GameScene.Trans.Translation.X - MOV_SPEED, this._GameScene.Trans.Translation.Y, 0);
                this._GameScene.Player.Data["ST"] = this._GameScene.Trans.Translation;
            }
            else if(this._GameScene.Player.Trans.Translation.X<=1720)
            {
                this._GameScene.Player.Trans.Translation = new TBX.Vertex(this._GameScene.Player.Trans.Translation.X + MOV_SPEED, this._GameScene.Player.Trans.Translation.Y, this._GameScene.Player.Trans.Translation.Z);
            }
            this._GameScene.Player.UpdateSpriteSet(2);
        }
        if(this._Right && !this._Left)
        {
            if(this._GameScene.Trans.Translation.X<=0)
            {
                this._GameScene.Trans.Translation = new TBX.Vertex(this._GameScene.Trans.Translation.X + MOV_SPEED, this._GameScene.Trans.Translation.Y, 0);
                this._GameScene.Player.Data["ST"] = this._GameScene.Trans.Translation;
            }
            else if(this._GameScene.Player.Trans.Translation.X>=200)
            {
                this._GameScene.Player.Trans.Translation = new TBX.Vertex(this._GameScene.Player.Trans.Translation.X - MOV_SPEED, this._GameScene.Player.Trans.Translation.Y, this._GameScene.Player.Trans.Translation.Z);
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
                this._GameScene.Player.Trans.Translation = new TBX.Vertex(this._GameScene.Player.Trans.Translation.X + MOV_SPEED, this._GameScene.Player.Trans.Translation.Y, this._GameScene.Player.Trans.Translation.Z);
            }
            this._GameScene.Player.UpdateSpriteSet(2);
        }
        if(this._Right && !this._Left)
        {
            if(this._GameScene.Player.Trans.Translation.X>=400)
            {
                this._GameScene.Player.Trans.Translation = new TBX.Vertex(this._GameScene.Player.Trans.Translation.X - MOV_SPEED, this._GameScene.Player.Trans.Translation.Y, this._GameScene.Player.Trans.Translation.Z);
            }
            this._GameScene.Player.UpdateSpriteSet(3);
        }
    }
    private KeyDown(Game:TBX.Game, Args:any) : void
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

    private KeyUp(Game:TBX.Game, Args:any) : void
    {
        if(Args.KeyCode == 68)
        {
            if(this._Left)
            {
                this._Left = false;
                if(this._Type != "Arena") this._GameScene.Player.UpdateSpriteSet(0);
            }            
        }
        else if(Args.KeyCode == 65)
        {
            if(this._Right)
            {
                this._Right = false;
                if(this._Type != "Arena") this._GameScene.Player.UpdateSpriteSet(1);
            }            
        }
    }
}