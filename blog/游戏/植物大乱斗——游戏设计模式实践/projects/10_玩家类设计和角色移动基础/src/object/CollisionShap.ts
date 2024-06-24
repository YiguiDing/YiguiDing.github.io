import { Vector2 } from "../math/Vector2";

export interface CollisionShap {
  collisionCheck(shap: CollisionShap): boolean;
}


export class Point implements CollisionShap{
    constructor(public x:number,public y:number){}

    collisionCheck(shap: CollisionShap): boolean {
        
    }
}

export class Line implements CollisionShap {
  collisionCheck(shap: CollisionShap): boolean {

  }
}

export class 
