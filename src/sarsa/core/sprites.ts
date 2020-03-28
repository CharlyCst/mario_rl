const sprites: { [string]: HTMLImageElement } = {
    ground: new Image(),
    borderTop: new Image(),
    borderLeft: new Image(),
    borderRight: new Image(),
    borderLeftUp: new Image(),
    borderRightUp: new Image(),
    borderBottom: new Image(),
    borderBottom2: new Image(),
    borderBottomLeft: new Image(),
    borderBottomLeft2: new Image(),
    borderBottomRight: new Image(),
    borderBottomRight2: new Image(),

    goomba: new Image(),
    goomba2: new Image(),
    goomba3: new Image(),

    marioFace: new Image(),
    marioFace1: new Image(),
    marioFace2: new Image(),
    marioLeft: new Image(),
    marioLeft1: new Image(),
    marioLeft2: new Image(),
    marioRight: new Image(),
    marioRight1: new Image(),
    marioRight2: new Image(),
    marioBack: new Image(),
    marioBack1: new Image(),
    marioBack2: new Image(),

    block: new Image(),
    redBlock: new Image(),
    blockShadow: new Image()
};

sprites.ground.src = "assets/ground.png";
sprites.borderTop.src = "assets/border_top.png";
sprites.borderLeft.src = "assets/border_left.png";
sprites.borderRight.src = "assets/border_right.png";
sprites.borderLeftUp.src = "assets/border_left_up.png";
sprites.borderRightUp.src = "assets/border_right_up.png";
sprites.borderBottom.src = "assets/border_bottom.png";
sprites.borderBottom2.src = "assets/border_bottom2.png";
sprites.borderBottomLeft.src = "assets/border_bottom_left.png";
sprites.borderBottomLeft2.src = "assets/border_bottom_left2.png";
sprites.borderBottomRight.src = "assets/border_bottom_right.png";
sprites.borderBottomRight2.src = "assets/border_bottom_right2.png";

sprites.goomba.src = "assets/goomba.png";
sprites.goomba2.src = "assets/goomba2.png";
sprites.goomba3.src = "assets/goomba3.png";

sprites.marioFace.src = "assets/mario_front.png";
sprites.marioFace1.src = "assets/mario_front1.png";
sprites.marioFace2.src = "assets/mario_front2.png";
sprites.marioBack.src = "assets/mario_back.png";
sprites.marioBack1.src = "assets/mario_back1.png";
sprites.marioBack2.src = "assets/mario_back2.png";
sprites.marioRight.src = "assets/mario_right.png";
sprites.marioRight1.src = "assets/mario_right1.png";
sprites.marioRight2.src = "assets/mario_right2.png";
sprites.marioLeft.src = "assets/mario_left.png";
sprites.marioLeft1.src = "assets/mario_left1.png";
sprites.marioLeft2.src = "assets/mario_left2.png";

sprites.block.src = "assets/block.png";
sprites.redBlock.src = "assets/red_block.png";
sprites.blockShadow.src = "assets/block_shadow.png";

export const loaded = () => {
    let res = true;
    for (let img in sprites) {
        res = res && sprites[img].complete;
    }
    return res;
};

export default sprites;
