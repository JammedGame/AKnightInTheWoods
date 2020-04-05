export { Transition }

import * as TBX from "toybox-engine";

class Transition extends TBX.Tile
{
    private _Art:string;
    private _TooltipText:string;
    private _Destination:string;
    private _Runner:TBX.Runner;
    public constructor(Old?:Transition, Art?:string, Destination?:string, TooltipText?:string, Flip?:boolean)
    {
        super(Old);
        this._Runner = TBX.Runner.Current;
        if(Old)
        {
            this._Art = Old._Art;
            this._TooltipText = Old._TooltipText;
            this._Destination = Old._Destination;
        }
        else
        {
            if(Art) this._Art = Art;
            else this._Art = "Signpost";
            this.FlipX = Flip;
            this._TooltipText = TooltipText;
            this._Destination = Destination;
            this.Data["Pickable"] = true;
            this.Data["Tooltip"] = TooltipText;
        }
        this.LoadCollection();
    }
    public Init(Position:TBX.Vertex) : void
    {
        this.Trans.Translation = Position;
        this.Events.MouseDown.push(this.Transit.bind(this));
    }
    private LoadCollection() : void
    {
        if(this._Art == "Signpost")
        {
            
            this.Trans.Scale = new TBX.Vertex(300,300,1);
        }
        this.Collection = new TBX.ImageCollection(null, ["Resources/Textures/Transitions/"+this._Art+".png"]);
        this.Index = 0;
    }
    private Transit() : void
    {
        this._Runner.SwitchScene(this._Destination);
        console.log(this._Runner.Game);
    }
}