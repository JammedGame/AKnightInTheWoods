export { Tooltip }

import * as Engineer from "engineer-js";

class Tooltip
{
    private _Element:HTMLElement;
    private _DivElement:HTMLElement;
    private _Scene:Engineer.Scene2D;
    private _Runner:Engineer.Runner;
    public constructor(Scene:Engineer.Scene2D)
    {
        this._Scene = Scene;
        this._Runner = Engineer.Runner.Current;
        this._Scene.Events.MouseMove.push(this.Set.bind(this));
        this._DivElement = document.getElementById("tooltip");
        this._Element = document.getElementById("tooltip-text");
    }
    public Set(Game:Engineer.Game, Args:any) : void
    {
        let X = Args.UnscaledLocation.X;
        let Y = Args.UnscaledLocation.Y;
        let FoundObject:Engineer.ImageObject = <Engineer.ImageObject>this._Runner.PickSceneObject({X:X, Y:Y});
        if(FoundObject)
        {
            this.Show({X:X, Y:Y}, FoundObject.Data["Tooltip"]);
        }
        else this.Hide();
    }
    private Show(Position:any, Text:string) : void
    {
        this._DivElement.style.display = "block";
        this._DivElement.style.left = Position.X - 75 + "px";
        this._DivElement.style.top = Position.Y + 50 + "px";
        this._Element.innerHTML = Text;
    }
    private Hide() : void
    {
        this._DivElement.style.display = "none";
    }
}