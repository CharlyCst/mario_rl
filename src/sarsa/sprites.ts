const sprites = {
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

    block: new Image(),
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
sprites.block.src = "assets/block.png";
sprites.blockShadow.src = "assets/block_shadow.png";

export default sprites;
export const blockSize = 24;
