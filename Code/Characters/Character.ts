export { Character }

import * as TBX from "toybox-engine";

import { Dialog } from "./../UIElements/Dialog";
import { GameScene } from "./../Scenes/GameScene";
import { Player } from "../Player";

class Character extends TBX.Sprite
{
    protected _Scene:GameScene;
    public ShowTooltip: boolean;
    protected _IdleLength:number;
    protected _CharacterSeed:number;
    protected _CharacterString:string;
    protected _CharacterTooltip:TBX.UI.Label;
    public get CharID():string { return this._CharacterString; }
    public constructor(Old?:Character)
    {
        super(Old);
        if(Old)
        {
            this._IdleLength = Old._IdleLength;
            this._CharacterSeed = Old._CharacterSeed;
            this._CharacterString = Old._CharacterString;
            this._CharacterTooltip = Old._CharacterTooltip;
        }
        else
        {
            this._CharacterTooltip = new TBX.UI.Label();
            this._CharacterTooltip.Dock = TBX.UI.DockType.TopLeft;
            this._CharacterTooltip.Size = new TBX.Vertex(300, 160, 1);
            this._CharacterTooltip.Style.Text.Size = 20;
            this._CharacterTooltip.ForeColor = TBX.Color.Black;
            this._CharacterTooltip.Style.Padding.Top = 20;
            this._CharacterTooltip.Style.Values.backgroundColor = "transparent";
            this._CharacterTooltip.Style.Values.backgroundImage = "url('Resources/Textures/Tooltip.png')";
            this._CharacterTooltip.Style.Values.backgroundRepeat = "no-repeat";
            this._CharacterTooltip.Style.Values.backgroundSize = "cover";
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
    public Update() : void
    {
        this._CharacterTooltip.Active = this.ShowTooltip && Math.abs(this._Scene.Player.Position.X - this.Position.X) < 500;
        this._CharacterTooltip.Text = this.Name;
        let VPosition: number = this.Position.Y - (this.Size.Y/2) - 200;
        this._CharacterTooltip.Position = new TBX.Vertex(this.Position.X + this._Scene.Trans.Translation.X - (this._CharacterTooltip.Size.X / 2) - 30, VPosition, 3);
    }
    public OnAttach(Args) : void
    {
        super.OnAttach(Args);
        Args.Scene.Attach(this._CharacterTooltip);
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
        if(this._Scene.Dialog.Active) return;
        if(!this._Scene.Player.CheckProximity(this.Trans.Translation, this.Trans.Scale.X / 2)) return;
        let Dial = null;
        //Dial.ShowDialog(this._CharacterString, this.Data["Chat"]);
        if(this.Data["Chat"] == -1) return;
        this._Scene.Dialog.SetDialog(this.CharID, this.Data["Chat"]);
        this._Scene.Dialog.Show();
    }
}