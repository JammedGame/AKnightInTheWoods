export { SceneFactory }

import * as Engineer from "engineer-js";

import { GameScene } from "./GameScene";
import { Camp } from "./Camp";
import { Path } from "./Path";
import { Arena } from "./Arena";

class SceneFactory
{
    public static GenerateAll()
    {
        let G:Engineer.Game = Engineer.Runner.Current.Game;
        let GameObject:any = G.Data["GO"];
        SceneFactory.GenerateScenes(G, GameObject.Scenes);
    }
    public static GenerateScenes(Game:Engineer.Game, SceneData:any[]) : void
    {
        for(let i in SceneData)
        {
            let GS:GameScene = SceneFactory.Generate(SceneData[i]);
            GS.Init();
            Game.AddScene(GS);
        }
    }
    private static Generate(Data:any) : GameScene
    {
        let GS:GameScene = null;
        if(Data.Type == "Path") GS = new Path(Data.Name);
        else if(Data.Type == "Camp") GS = new Camp(Data.Name);
        else if(Data.Type == "Arena") GS = new Arena(Data.Name);
        for(let i in Data.Characters)
        {
            let Char = Data.Characters[i];
            GS.CreateCharacter(Char.Name, Char.Position, Char.Size, Char.Chat);
        }
        for(let i in Data.Transitions)
        {
            let Trans = Data.Transitions[i];
            GS.CreateTransition(Trans.Type, Trans.Destination, Trans.Tooltip, Trans.Position);
        }
        return GS;
    }
}