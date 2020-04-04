export { Character }

import * as TBX from "toybox-engine";

import { Dialog } from "./../Dialog";
import { GameScene } from "./../Scenes/GameScene";

class Character extends TBX.Sprite
{
    private _Scene:GameScene;
    protected _IdleLength:number;
    protected _CharacterSeed:number;
    protected _CharacterString:string;
    public get CharID():string { return this._CharacterString; }
    public constructor(Old?:Character)
    {
        super(Old);
        if(Old)
        {
            this._IdleLength = Old._IdleLength;
            this._CharacterSeed = Old._CharacterSeed;
            this._CharacterString = Old._CharacterString;
        }
        else
        {
            
        }
        this.Events.MouseDown.push(this.ActivateDialog.bind(this));
    }
    public SetScene(Scene:GameScene) : void
    {
        this._Scene = Scene;
    }
    public Flip() : void
    {
        this.FlipX = !this.FlipX;
    }
    public Init(Position:TBX.Vertex, Size:TBX.Vertex) : void
    {
        this.Trans.Translation = Position;
        this.Trans.Scale = Size;
        //
        if(!this._IdleLength) this._IdleLength = 3;
        if(!this._CharacterSeed) this._CharacterSeed = 20;
        if(!this._CharacterString)
        {
            TBX.Log.Error("CharacterString not set!");
        }
        else this.LoadSpriteSets();
        this.Data["Pickable"] = true;
        this.Data["Tooltip"] = this.Name;
    }
    private LoadSpriteSets() : void
    {
        let Idle = new TBX.SpriteSet(null, [], "IdleRight");
        Idle.Seed = this._CharacterSeed;
        let ArtPath:string = "Resources/Textures/Characters/" + this._CharacterString + "/" + this._CharacterString;
        for (let i = 0; i < this._IdleLength; i++) Idle.Images.push(ArtPath + i + ".png");
        this.SpriteSets.push(Idle);
        this.UpdateSpriteSet(0);
    }
    private ActivateDialog() : void
    {
        if(Dialog.Single && Dialog.Single._Shown) return;
        if(!this._Scene.Player.CheckProximity(this.Trans.Translation, this.Trans.Scale.X / 2)) return;
        let Dial = null;
        if(Dialog.Single) Dial = Dialog.Single;
        else Dial = new Dialog();
        Dial.SetScene(this._Scene);
        Dial.ShowDialog(this._CharacterString, this.Data["Chat"]);
    }
}