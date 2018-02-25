export { Transition }

import * as Engineer from "engineer-js";

class Transition extends Engineer.Tile
{
    private _Art:string;
    private _Tooltip:string;
    private _Destination:string;
    private _Runner:Engineer.Runner;
    public constructor(Old?:Transition, Art?:string, Destination?:string, Tooltip?:string)
    {
        super(Old);
        this._Runner = Engineer.Runner.Current;
        if(Old)
        {
            this._Art = Old._Art;
            this._Tooltip = Old._Tooltip;
            this._Destination = Old._Destination;
        }
        else
        {
            if(Art) this._Art = Art;
            else this._Art = "Signpost";
            this._Tooltip = Tooltip;
            this._Destination = Destination;
        }
        this.LoadCollection();
    }
    public Init(Position:Engineer.Vertex) : void
    {
        this.Trans.Translation = Position;
    }
    private LoadCollection()
    {
        if(this._Art == "Signpost")
        {
            this.Trans.Scale = new Engineer.Vertex(300,300,1);
        }
        this.Collection = new Engineer.ImageCollection(null, ["Resources/Textures/Transitions/"+this._Art+".png"]);
        this.Index = 0;
    }
}