export { Player };

import * as Engineer from "engineer-js";

class Player extends Engineer.Sprite
{
    public constructor()
    {
        super();
        this.Fixed = true;    
        this.LoadSets();
        this.SetSpriteSet(0);
    }
    public Init(Position:any, Size:any) : void
    {
        if(!Position.Z) Position.Z = 1;
        this.Trans.Scale = new Engineer.Vertex(Size.X, Size.Y, 1);
        this.Trans.Translation = new Engineer.Vertex(Position.X, Position.Y, Position.Z);
    }
    private LoadSets(): void 
    {
        let SpriteSetSkin0 = new Engineer.SpriteSet(null, [], "IdleRight");
        SpriteSetSkin0.Seed = 50;
        for (let i = 0; i < 3; i++) SpriteSetSkin0.Images.push("Resources/Textures/Player/IdleR" + i + ".png");
        this.SpriteSets.push(SpriteSetSkin0);

        let SpriteSetSkin1 = new Engineer.SpriteSet(null, [], "IdleLeft");
        SpriteSetSkin1.Seed = 50;
        for (let i = 0; i < 3; i++) SpriteSetSkin1.Images.push("Resources/Textures/Player/IdleL" + i + ".png");
        this.SpriteSets.push(SpriteSetSkin1);

        let SpriteSetSkin2 = new Engineer.SpriteSet(null, [], "WalkRight");
        SpriteSetSkin2.Seed = 50;
        for (let i = 0; i < 4; i++) SpriteSetSkin2.Images.push("Resources/Textures/Player/WalkR" + i + ".png");
        this.SpriteSets.push(SpriteSetSkin2);

        let SpriteSetSkin3 = new Engineer.SpriteSet(null, [], "WalkLeft");
        SpriteSetSkin3.Seed = 50;
        for (let i = 0; i < 4; i++) SpriteSetSkin3.Images.push("Resources/Textures/Player/WalkL" + i + ".png");
        this.SpriteSets.push(SpriteSetSkin3);
    }
    public CheckProximity(Position:Engineer.Vertex, Size:number) : boolean
    {
        let ST = this.Data["ST"];
        let STX = 0;
        if(ST) STX = ST.X;
        let PPX = this.Trans.Translation.X - STX;
        console.log(PPX);
        return Math.abs(PPX - Position.X) < Size;
    }
}

