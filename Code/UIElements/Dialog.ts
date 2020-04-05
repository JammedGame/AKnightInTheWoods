export { Dialog }

import * as TBX from "toybox-engine";

import { GameScene } from "./../Scenes/GameScene";
import { Character } from "../Characters/Character";

class Dialog extends TBX.UI.Panel
{
    private _Scene: GameScene;
    private _Character: Character;
    private _Object: TBX.UI.Label;
    private _Title: TBX.UI.Label;
    private _Options: TBX.UI.Panel;
    private _OptionLabels: TBX.UI.Label[];
    public constructor() 
    {
        super();
        this.InitElements();
    }
    private InitElements() : void
    {   
        this.BackColor = TBX.Color.FromRGBA(255,228,176,255);
        this.Size = new TBX.Vertex(430, 1, 1);
        this.Position = new TBX.Vertex(150, 0, 1);
        this.Dock = TBX.UI.DockType.Right;
        this.Style.Border.Width = 3;
        this.Style.Border.Color = TBX.Color.Black;
        this.Style.Values.transition = "all 0.8s";

        let BoundTop: TBX.UI.Panel = new TBX.UI.Panel();
        BoundTop.Style.Border.Radius = 10;
        BoundTop.Position = new TBX.Vertex(0, -30, 0);
        BoundTop.Size = new TBX.Vertex(620, 70, 0);
        BoundTop.Dock = TBX.UI.DockType.Top;
        BoundTop.Style.Values.backgroundColor = "transparent";
        BoundTop.Style.Values.backgroundImage = "url('/Resources/Textures/ScrollTop.png')";
        BoundTop.Style.Values.backgroundRepeat = "no-repeat";
        BoundTop.Style.Values.backgroundSize = "cover";
        this.Attach(BoundTop);

        let BoundBottom: TBX.UI.Panel = new TBX.UI.Panel();
        BoundBottom.Style.Border.Radius = 10;
        BoundBottom.BackColor = TBX.Color.FromRGBA(255,178,126,255);
        BoundBottom.Position = new TBX.Vertex(0, -30, 0);
        BoundBottom.Size = new TBX.Vertex(620, 70, 0);
        BoundBottom.Dock = TBX.UI.DockType.Bottom;
        BoundBottom.Style.Values.backgroundColor = "transparent";
        BoundBottom.Style.Values.backgroundImage = "url('/Resources/Textures/ScrollBottom.png')";
        BoundBottom.Style.Values.backgroundRepeat = "no-repeat";
        BoundBottom.Style.Values.backgroundSize = "cover";
        this.Attach(BoundBottom);

        this._Object = new TBX.UI.Label();
        this._Object.Dock = TBX.UI.DockType.Top;
        this._Object.Style.Text.Size = 32;
        this._Object.Position = new TBX.Vertex(0, 30, 0);
        this._Object.ForeColor = TBX.Color.FromString("#555555");
        this.Attach(this._Object);

        this._Options = new TBX.UI.Panel();
        this._Options.Dock = TBX.UI.DockType.Top;
        this._Options.Size = new TBX.Vertex(320, 420, 1);
        this._Options.Position = new TBX.Vertex(0, 80, 0);
        //this._Options.Style.Values.overflow = "auto";
        this._Options.Style.Values.backgroundColor = "transparent";
        this._Options.Style.Content.Align = TBX.UI.ContentAlign.Start;
        this._Options.Style.Values.flexDirection = "column";
        this.Attach(this._Options);

        this._OptionLabels = [];

        this._Title = new TBX.UI.Label();
        this._Title.Style.Text.Size = 22;
        this._Title.Style.Content.Align = TBX.UI.ContentAlign.End;
        this._Title.Style.Values.flexDirection = "column";
        this._Title.Size = new TBX.Vertex(320, 100, 1);
        this._Title.Style.Values.height = "auto";
        this._Title.Dock = TBX.UI.DockType.None;
        this._Title.Position = new TBX.Vertex(0, 0, 0);
        this._Title.Style.Padding.Bottom = 30;
        this._Title.Style.Margin.Bottom = 30;
        this._Title.Style.Padding.Top = 30;
        this._Title.ForeColor = TBX.Color.Black;
        this._Title.Style.Border.Color = TBX.Color.Black;
        this._Title.Style.Values.borderWidth = "0 0 3px 0";
        this._Options.Attach(this._Title);

        this.Hide();
    }
    public OnAttach(Args) : void
    {
        this._Scene = Args.Scene;
    }
    public Show() : void
    {
        this.Active = true;
        setTimeout(() =>
        {
            this.Style.Values.opacity = "1";
            this.Size.Y = 700
            this.Update();
        },
        100);
    }
    public Hide() : void
    {
        this.Size.Y = 1;
        this.Style.Values.opacity = "0";
        this.Update();
        setTimeout(() =>
        {
            this.Active = false;
        },
        800);
    }
    public SetDialog(Character: Character, ChatNo:number) : void
    {
        this._Character = Character;
        this._Object.Text = Character.Name;
        let Chat = this.FindCharacter(Character.CharID).Chats[ChatNo];
        this.SetChat(Chat);
    }
    private FindCharacter(Character:string) : any
    {
        let GameObject = TBX.Runner.Current.Game.Data["GO"];
        for(let i in GameObject.Characters)
        {
            if(GameObject.Characters[i].Name == Character)
            {
                return GameObject.Characters[i];
            }
        }
        return null;
    }
    private SetChat(Chat: any) : void
    {
        this._Title.Text = Chat.Text;
        this._OptionLabels.forEach(Option =>
        {
            this._Options.Remove(Option);
        });
        this._OptionLabels = [];
        Chat.Options.forEach(Option =>
        {
            if(!this.CheckReqs(Option.Requires))
            {
                return;
            }
            let OL: TBX.UI.Label = new TBX.UI.Label();
            OL.Text = "- " + Option.Text;
            OL.Style.Text.Size = 18;
            OL.Style.Values.height = "auto";
            OL.Style.Margin.Bottom = 16;
            OL.Style.Content.Align = TBX.UI.ContentAlign.Start;
            OL.Style.Layout.Dock = TBX.UI.DockType.None;
            OL.ForeColor = TBX.Color.FromString("#555555");
            OL.Style.Values.cursor = "pointer";
            OL.Events.Click.push(() =>
            {
                if(Option.Link == -1) 
                {
                    this.HandleOption(Option);
                    this.Hide();
                }
                else
                {
                    this.HandleOption(Option);
                    this.SetDialog(this._Character, Option.Link);
                }
            });
            OL.Events.MouseEnter.push(() =>
            {
                OL.ForeColor = TBX.Color.FromString("#5555FF");
                OL.Update();
            });
            OL.Events.MouseLeave.push(() =>
            {
                OL.ForeColor = TBX.Color.FromString("#555555");
                OL.Update();
            });
            this._OptionLabels.push(OL);
            this._Options.Attach(OL);
            OL.Update();
        });
        this._Options.Update();
    }
    private HandleOption(Option) : void
    {
        if(Option.Sets) this.SetHints(Option.Sets);
        if(Option.Action) this._Scene.Action(Option.Action.ID, Option.Action.Params);
    }
    private GetHints() : string[]
    {
        return TBX.Runner.Current.Game.Data["GO"].Hints;
    }
    private SetHints(HintsList:string[]) : void
    {
        let Hints = this.GetHints();
        for(let i in HintsList)
        {
            if(Hints.indexOf(HintsList[i]) != -1) continue;
            Hints.push(HintsList[i]);
        }
    }
    private CheckReqs(Reqs:string[]) : boolean
    {
        if(!Reqs) return true;
        let Hints = this.GetHints();
        for(let i in Reqs)
        {
            if(Hints.indexOf(Reqs[i]) == -1) return false;
        }
        return true;
    }
}
