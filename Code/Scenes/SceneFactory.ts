export { SceneFactory }

import * as TBX from "toybox-engine";

import { GameScene } from "./GameScene";
import { Camp } from "./Camp";
import { Path } from "./Path";
import { Arena } from "./Arena";

class SceneFactory
{
    public static GenerateAll()
    {
        let G:TBX.Game = TBX.Runner.Current.Game;
        let GameObject:any = G.Data["GO"];
        SceneFactory.GenerateScenes(G, GameObject.Scenes);
    }
    public static GenerateScenes(Game:TBX.Game, SceneData:any[]) : void
    {
        for(let i in SceneData)
        {
            let GS:GameScene = SceneFactory.Generate(SceneData[i]);
            GS.Init();
            Game.Attach(GS);
        }
    }
    private static Generate(Data:any) : GameScene
    {
        let GS:GameScene = null;
        if(Data.Type == "Path") GS = new Path(Data.Name);
        else if(Data.Type == "Camp") GS = new Camp(Data.Name);
        else if(Data.Type == "Arena")
        {
            let AGS = new Arena(Data.Name);
            AGS.DialogString = Data.Dialog;
            AGS.SetSpriteSet(Data.Set);
            GS = AGS;
        }
        for(let i in Data.Characters)
        {
            let Char = Data.Characters[i];
            GS.CreateCharacter(Char.Name, Char.Position, Char.Size, Char.Chat, null, Char.ShowTooltip);
        }
        for(let i in Data.Transitions)
        {
            let Trans = Data.Transitions[i];
            GS.CreateTransition(Trans.Type, Trans.Destination, Trans.Tooltip, Trans.Position, Trans.Flip);
        }
        return GS;
    }
}