export { Dialog }

import * as Engineer from "engineer-js";

import { GameScene } from "./Scenes/GameScene";

class Dialog
{
    public static Single:Dialog;
    private _Scene:GameScene;
    public _Shown:boolean = false;
    private _DivDialog:HTMLElement;
    private _Title:HTMLElement;
    private _Option1:HTMLElement;
    private _Option2:HTMLElement;
    private _Option3:HTMLElement;
    private _Character:any;
    private _Chat:any;
    private _GameObject:any;
    public static get Shown()
    {
        if(!Dialog.Single) return false;
        return Dialog.Single._Shown;
    }
    public constructor() 
    {
        Dialog.Single = this;
        this._DivDialog = document.getElementById("dialog-overlay");
        this._Title = document.getElementById("dialog-title");
        this._Option1 = document.getElementById("dialog-choice1");
        this._Option2 = document.getElementById("dialog-choice2");
        this._Option3 = document.getElementById("dialog-choice3");
        this._Option1.addEventListener("click", this.Choice1.bind(this));
        this._Option2.addEventListener("click", this.Choice2.bind(this));
        this._Option3.addEventListener("click", this.Choice3.bind(this));
    }
    public SetDialog(Text:string):void
    {
        this._Option1.innerHTML = Text;
    }
    public ShowDialog(Character:string, Chat:number)
    {
        if(Chat == -1) return;
        let Char = this.FindCharacter(Character);
        if(!Char) return;
        this._Character = Char;
        this.SetChat(Chat);
    }
    private SetChat(Chat:number) : void
    {
        let ChatO = this._Character.Chats[Chat];
        this._Chat = ChatO;
        this.SetValues(ChatO);
        this.Show();
    }
    private SetValues(Chat:any)
    {
        this._Title.innerHTML = Chat.Text;
        if(this.CheckReqs(Chat.Options[0].Requires)) this._Option1.innerHTML = Chat.Options[0].Text;
        if(Chat.Options.length > 1 && this.CheckReqs(Chat.Options[1].Requires))
        {
            this._Option2.style.display = "block";
            this._Option2.innerHTML = Chat.Options[1].Text;
        }
        else this._Option2.style.display = "none";
        if(Chat.Options.length > 2 && this.CheckReqs(Chat.Options[2].Requires))
        {
            this._Option3.style.display = "block";
            this._Option3.innerHTML = Chat.Options[2].Text;
        }
        else this._Option3.style.display = "none";
    }
    private Show()
    {
        this._Shown = true;
        this._DivDialog.style.display = "block";
    }
    private Hide()
    {
        this._Shown = false;
        this._DivDialog.style.display = "none";
    }
    
    private FindCharacter(Character:string) : any
    {
        this._GameObject = Engineer.Runner.Current.Game.Data["GO"];
        for(let i in this._GameObject.Characters)
        {
            if(this._GameObject.Characters[i].Name == Character)
            {
                return this._GameObject.Characters[i];
            }
        }
        return null;
    }
    private GetHints() : string[]
    {
        return Engineer.Runner.Current.Game.Data["GO"].Hints;
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
    private Choice1() : void
    {
        this.HandleOption(this._Chat.Options[0]);
    }
    private Choice2() : void
    {
        this.HandleOption(this._Chat.Options[1]);
    }
    private Choice3() : void
    {
        this.HandleOption(this._Chat.Options[2]);
    }
    private HandleOption(Option) : void
    {
        if(Option == null && Option.Link == null) return;
        if(Option.Sets) this.SetHints(Option.Sets);
        if(Option.Link == -1)
        {
            this.Hide();
            return;
        }
        this.SetChat(Option.Link);
    }
    public SetScene(Scene:GameScene) : void
    {
        this._Scene = Scene;
    }
}
