(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"6aRn":function(e,t,a){"use strict";function r(e){return new Promise(t=>setTimeout(t,e))}a.d(t,"a",(function(){return r}))},CHqN:function(e,t){"use strict";var a={ground:new Image,borderTop:new Image,borderLeft:new Image,borderRight:new Image,borderLeftUp:new Image,borderRightUp:new Image,borderBottom:new Image,borderBottom2:new Image,borderBottomLeft:new Image,borderBottomLeft2:new Image,borderBottomRight:new Image,borderBottomRight2:new Image,goomba:new Image,goomba2:new Image,goomba3:new Image,marioFace:new Image,marioFace1:new Image,marioFace2:new Image,marioLeft:new Image,marioLeft1:new Image,marioLeft2:new Image,marioRight:new Image,marioRight1:new Image,marioRight2:new Image,marioBack:new Image,marioBack1:new Image,marioBack2:new Image,block:new Image,redBlock:new Image,blockShadow:new Image};a.ground.src="assets/ground.png",a.borderTop.src="assets/border_top.png",a.borderLeft.src="assets/border_left.png",a.borderRight.src="assets/border_right.png",a.borderLeftUp.src="assets/border_left_up.png",a.borderRightUp.src="assets/border_right_up.png",a.borderBottom.src="assets/border_bottom.png",a.borderBottom2.src="assets/border_bottom2.png",a.borderBottomLeft.src="assets/border_bottom_left.png",a.borderBottomLeft2.src="assets/border_bottom_left2.png",a.borderBottomRight.src="assets/border_bottom_right.png",a.borderBottomRight2.src="assets/border_bottom_right2.png",a.goomba.src="assets/goomba.png",a.goomba2.src="assets/goomba2.png",a.goomba3.src="assets/goomba3.png",a.marioFace.src="assets/mario_front.png",a.marioFace1.src="assets/mario_front1.png",a.marioFace2.src="assets/mario_front2.png",a.marioBack.src="assets/mario_back.png",a.marioBack1.src="assets/mario_back1.png",a.marioBack2.src="assets/mario_back2.png",a.marioRight.src="assets/mario_right.png",a.marioRight1.src="assets/mario_right1.png",a.marioRight2.src="assets/mario_right2.png",a.marioLeft.src="assets/mario_left.png",a.marioLeft1.src="assets/mario_left1.png",a.marioLeft2.src="assets/mario_left2.png",a.block.src="assets/block.png",a.redBlock.src="assets/red_block.png",a.blockShadow.src="assets/block_shadow.png",t.a=a},CpHl:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return c}));var r=a("QRet"),i=a("M/gY"),s=a("6aRn"),n=[255,0,255],o=[0,255,255],l=e=>{var t=Math.min(1,Math.max(0,1/(1+Math.exp(-3*e))));return"rgb(\n        "+Math.floor(o[0]+(n[0]-o[0])*t)+",\n        "+Math.floor(o[1]+(n[1]-o[1])*t)+",\n        "+Math.floor(o[2]+(n[2]-o[2])*t)+")"},h=(e,t,a,r)=>{e.strokeStyle="#000000",e.lineWidth=1;for(var s=0;s<a;s++)for(var n=0;n<r;n++)e.fillStyle=l(0),e.fillRect(s*i.e,n*i.e,i.e,i.e),e.strokeRect(s*i.e,n*i.e,i.e,i.e),e.fillStyle=l(t[s][n][i.d]),e.beginPath(),e.moveTo((s+.5)*i.e,(n+.5)*i.e),e.lineTo((s+1)*i.e,n*i.e),e.lineTo(s*i.e,n*i.e),e.fill(),e.fillStyle=l(t[s][n][i.c]),e.beginPath(),e.moveTo((s+.5)*i.e,(n+.5)*i.e),e.lineTo((s+1)*i.e,n*i.e),e.lineTo((s+1)*i.e,(n+1)*i.e),e.fill(),e.fillStyle=l(t[s][n][i.a]),e.beginPath(),e.moveTo((s+.5)*i.e,(n+.5)*i.e),e.lineTo((s+1)*i.e,(n+1)*i.e),e.lineTo(s*i.e,(n+1)*i.e),e.fill(),e.fillStyle=l(t[s][n][i.b]),e.beginPath(),e.moveTo((s+.5)*i.e,(n+.5)*i.e),e.lineTo(s*i.e,(n+1)*i.e),e.lineTo(s*i.e,n*i.e),e.fill()},c=t=>{var a=Object(r.j)(null),l=async()=>{if(null!=a.current){var e=a.current.getContext("2d");if(null!=e)for(e.translate(i.e,i.e),((e,t,a)=>{e.strokeStyle="#000000";var r=e.createLinearGradient(0,(.5+a)*i.e,t*i.e,(.9+a)*i.e);r.addColorStop(1,"rgb("+n[0]+","+n[1]+","+n[2]+")"),r.addColorStop(0,"rgb("+o[0]+","+o[1]+","+o[2]+")"),e.fillStyle=r,e.strokeRect(0,(.5+a)*i.e,t*i.e,.4*i.e),e.fillRect(0,(.5+a)*i.e,t*i.e,.4*i.e),e.font="14px sans-serif",e.textAlign="center",e.fillStyle="#000000",e.fillText("0",t*i.e/2,(1.5+a)*i.e),e.fillText("+∞",t*i.e,(1.5+a)*i.e),e.fillText("-∞",0,(1.5+a)*i.e)})(e,t.map.w,t.map.h);;)h(e,t.agent.Q,t.map.w,t.map.h),await Object(s.a)(200)}};return Object(r.d)(()=>{l()}),e("canvas",{width:(2+t.map.w)*i.e,height:(3+t.map.h)*i.e,ref:a})}}).call(this,a("hosL").h)},"M/gY":function(e,t,a){"use strict";a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return n})),a.d(t,"e",(function(){return o}));var r=0,i=1,s=2,n=3,o=24},VNCQ:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return o}));var i=a("CHqN"),s=a("M/gY"),n=e=>{for(var t=-1/0,a=[],r=0;r<e.length;r++)e[r]>t?(a=[r],t=e[r]):e[r]==t&&a.push(r);return 1==a.length?a[0]:a[Math.floor(Math.random()*a.length)]};class o{constructor(e,t,a,i){r(this,"Q",[[[]]]),r(this,"learningRate",.3),r(this,"gamma",.8),r(this,"epsilon",.2),r(this,"beta",3),r(this,"softmax",!1),r(this,"QLearning",!1),r(this,"nSteps",1),r(this,"x",void 0),r(this,"y",void 0),r(this,"lastX",void 0),r(this,"lastY",void 0),r(this,"lastRewards",[]),r(this,"lastActions",[]),r(this,"lastGreedyAction",void 0),r(this,"initialPositionX",0),r(this,"initialPositionY",0),this.lastActions=[s.a],this.lastGreedyAction=s.a,this.initialPositionX=a||0,this.initialPositionY=i||0,this.x=this.initialPositionX,this.y=this.initialPositionY,this.lastX=[this.initialPositionX],this.lastY=[this.initialPositionY],this.initQ(e,t)}initQ(e,t){this.Q=[];for(var a=0;a<t;a++){for(var r=[],i=0;i<e;i++)r.push(new Array(4).fill(0));this.Q.push(r)}}newRun(){for(var e,t=(null==(e=this.lastActions)?void 0:e.shift())||s.a,a=this.nSteps;a>0;a--)this.reinforce(a,t);this.x=this.initialPositionX,this.y=this.initialPositionY,this.lastX=[this.initialPositionX],this.lastY=[this.initialPositionY],this.lastRewards=[],this.lastActions=[s.a]}chooseAction(){var e,t=this.Q[this.x][this.y];return e=this.softmax?((e,t)=>{for(var a=0,r=0;r<4;r++)a+=Math.exp(e*t[r]);for(var i=Math.random(),s=0,n=0;n<4;n++)if((s+=Math.exp(e*t[n])/a)>=i)return n;return 3})(this.beta,t):((e,t)=>Math.random()<e?Math.floor(Math.random()*t.length):n(t))(this.epsilon,t),this.lastGreedyAction=n(t),this.reinforce(this.nSteps,e),this.lastActions.unshift(e),e}reinforce(e,t){if(!(this.lastRewards.length<e)){for(var a=-this.Q[this.lastX[e-1]][this.lastY[e-1]][this.lastActions[e-1]],r=1,i=e-1;i>=0;i--)a+=this.lastRewards[i]*r,r*=this.gamma;this.Q[this.lastX[e-1]][this.lastY[e-1]][this.lastActions[e-1]]+=this.learningRate*(a+=this.QLearning?r*this.Q[this.x][this.y][this.lastGreedyAction]:r*this.Q[this.x][this.y][t]),this.lastActions.pop(),this.lastRewards.pop(),this.lastX.pop(),this.lastY.pop()}}getReward(e){this.lastRewards.unshift(e)}newPosition(e,t){this.lastX.unshift(this.x),this.lastY.unshift(this.y),this.x=e,this.y=t}getSprite(e){switch(this.lastActions[0]){case s.d:switch(e%4){case 0:return i.a.marioBack;case 1:return i.a.marioBack1;case 2:return i.a.marioBack;case 3:return i.a.marioBack2}case s.c:switch(e%4){case 0:return i.a.marioRight;case 1:return i.a.marioRight1;case 2:return i.a.marioRight;case 3:return i.a.marioRight2}case s.a:switch(e%4){case 0:return i.a.marioFace;case 1:return i.a.marioFace1;case 2:return i.a.marioFace;case 3:return i.a.marioFace2}case s.b:switch(e%4){case 0:return i.a.marioLeft;case 1:return i.a.marioLeft1;case 2:return i.a.marioLeft;case 3:return i.a.marioLeft2}default:return console.log("Failed to get sprite for agent: "+this.lastActions),i.a.marioFace}}draw(e,t){var a=(this.x-this.lastX[0])*(t%4+1)/4,r=(this.y-this.lastY[0])*(t%4+1)/4;e.drawImage(this.getSprite(t),s.e*(this.lastX[0]+a),s.e*(this.lastY[0]+r)-s.e/2)}}},X7l8:function(e,t,a){"use strict";(function(e){a.d(t,"b",(function(){return _})),a.d(t,"c",(function(){return C})),a.d(t,"f",(function(){return j})),a.d(t,"d",(function(){return P})),a.d(t,"e",(function(){return A})),a.d(t,"a",(function(){return Q}));var r=a("QRet"),i=a("R82R"),s=a("ozoj"),n=a("GU4W"),o=a("wGBp"),l=a("Fk5B"),h=a("Y2Hm"),c=a("WLS8"),m=a("/ZiB"),g=a("oQEK"),d=a("7eGz"),u=a.n(d),f=a("YMGn"),b=a.n(f),p=a("wKER"),w=a.n(p),v=a("f0vW"),R=a.n(v),k=l.a,x=h.a,I=c.a,y=n.a,B=o.a,L=Object(i.a)(e=>Object(s.a)({slider:{width:100+2*e.spacing(3)},margin:{height:e.spacing(3)}})),S=t=>{var{children:a,open:r,value:i}=t;return e(B,{open:r,enterTouchDelay:0,placement:"top",title:i},a)},_=t=>{var[a,i]=Object(r.k)(t.agent.gamma),s=L();return e("div",null,e(m.a,{gutterBottom:!0},"Discount factor"),e(y,{min:0,max:1,step:.02,ValueLabelComponent:S,value:a,onChange:(e,a)=>{"number"!=typeof a&&(a=a[0]),t.agent.gamma=a,i(a)},className:s.slider}))},C=t=>{var[a,i]=Object(r.k)(t.agent.learningRate),s=L();return e("div",null,e(m.a,{gutterBottom:!0},"Learning rate"),e(y,{min:0,max:1,step:.02,ValueLabelComponent:S,value:a,onChange:(e,a)=>{"number"!=typeof a&&(a=a[0]),t.agent.learningRate=a,i(a)},className:s.slider}))},j=t=>{var[a,i]=Object(r.k)(t.agent.nSteps),s=L();return e("div",null,e(m.a,{gutterBottom:!0},"Number of steps"),e(y,{min:1,max:4,step:1,marks:!0,ValueLabelComponent:S,value:a,onChange:(e,a)=>{"number"!=typeof a&&(a=a[0]),t.agent.nSteps=a,i(a)},className:s.slider}))},P=t=>{var[a,i]=Object(r.k)(t.agent.QLearning);return e("div",null,e(x,{"aria-label":"Policy",name:"Policy",value:a,onChange:()=>{t.agent.QLearning=!a,i(!a)}},e(I,{value:!1,control:e(k,null),label:"Sarsa"}),e(I,{value:!0,control:e(k,null),label:"Q-learning"})))},A=t=>{var[a,i]=Object(r.k)(t.agent.softmax),[s,n]=Object(r.k)(t.agent.epsilon),[o,l]=Object(r.k)(t.agent.beta),h=L();return e("div",null,e(x,{"aria-label":"Policy",name:"Policy",value:a,onChange:()=>{t.agent.softmax=!a,i(!a)}},e(I,{value:!1,control:e(k,null),label:"ε-greedy"}),e(I,{value:!0,control:e(k,null),label:"Softmax"})),a?e("div",null,e(m.a,{gutterBottom:!0},"Beta"),e(y,{min:1,max:8,step:.1,ValueLabelComponent:S,value:o,onChange:(e,a)=>{t.agent.beta=a,l(a)},className:h.slider})):e("div",null,e(m.a,{gutterBottom:!0},"Epsilon"),e(y,{min:0,max:1,step:.02,ValueLabelComponent:S,value:s,onChange:(e,a)=>{t.agent.epsilon=a,n(a)},className:h.slider})))},Q=t=>{var[a,i]=Object(r.k)(t.map.run),[s,n]=Object(r.k)(t.map.refreshRate),o=a?"Pause":"Start",l=200,h="x20";switch(s){case 25:h="x8";break;case 100:h="x2";break;case 200:h="x1"}return e("div",null,e(B,{title:o},e(g.a,{"aria-label":"Play",onClick:()=>{t.map.run=!a,i(!a)}},e(a?w.a:b.a,{fontSize:"small"}))),e(B,{title:h},e(g.a,{"aria-label":"Speed up",onClick:()=>(()=>{switch(s){case 25:l=10;break;case 100:l=25;break;case 200:l=100}t.map.refreshRate=l,n(l)})()},e(R.a,{fontSize:"small"}))),e(B,{title:"Reset"},e(g.a,{"aria-label":"Restart",onClick:()=>t.map.restart()},e(u.a,{fontSize:"small"}))))}}).call(this,a("hosL").h)},o6V2:function(e,t,a){"use strict";a.r(t),function(e){var r=a("R82R"),i=a("ozoj"),s=a("x4ky"),n=a("VNCQ"),o=a("u+C2"),l=a("CpHl"),h=a("X7l8"),c=Object(r.a)(e=>Object(i.a)({root:{margin:e.spacing(3),display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"},box:{margin:e.spacing(1),marginTop:0},arena:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}));t.default=()=>{var t=c(),a=new n.a(6,4),r=Object(s.d)(6,4);return r.addAgent(a),r.addElement(new s.b,3,2),r.addElement(new s.b,1,4),r.addElement(new s.a,3,4),r.addElement(new s.a,2,0),a.nSteps=3,e("div",{className:t.root},e("div",{className:t.box},e(h.a,{map:r}),e(h.c,{agent:a}),e(h.b,{agent:a}),e(h.f,{agent:a})),e("div",{className:t.box},e(h.e,{agent:a})),e("div",{className:t.arena},e(o.a,{map:r}),e(l.a,{map:r,agent:a})))}}.call(this,a("hosL").h)},"u+C2":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return n}));var r=a("QRet"),i=a("M/gY"),s=a("6aRn"),n=t=>{var a=Object(r.j)(null);return Object(r.d)(()=>{(async()=>{if(null!=a.current){var e=a.current.getContext("2d");if(null!=e)for(e.translate(i.e,i.e);;)t.map.draw(e),await Object(s.a)(t.map.refreshRate)}})()}),e("canvas",{width:(2+t.map.w)*i.e,height:(3+t.map.h)*i.e,ref:a})}}).call(this,a("hosL").h)},x4ky:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return new o(e,t)}a.d(t,"b",(function(){return h})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return m})),a.d(t,"d",(function(){return i}));var s=a("CHqN"),n=a("M/gY");class o{constructor(e,t){r(this,"map",void 0),r(this,"agents",void 0),r(this,"w",void 0),r(this,"h",void 0),r(this,"t",void 0),r(this,"turn",void 0),r(this,"run",!1),r(this,"initialRendering",!0),r(this,"refreshRate",200),this.turn=0,this.t=0,this.w=t,this.h=e,this.agents=[],this.map=[];for(var a=0;a<t;a++){var i=new Array(e);this.map.push(i)}}addAgent(e){this.agents.push(e)}addElement(e,t,a){this.map[t][a]=e}restart(){for(var e of(this.t=0,this.turn=0,this.agents))e.initQ(this.h,this.w),e.newRun()}draw(e){if(this.run||this.initialRendering){this.initialRendering=!1,e.drawImage(s.a.borderLeftUp,-n.e,-n.e),e.drawImage(s.a.borderRightUp,n.e*this.w,-n.e);for(var t=0;t<this.w;t++)e.drawImage(s.a.borderTop,n.e*t,-n.e);for(var a=0;a<this.h;a++)for(var r=0;r<this.w;r++)e.drawImage(s.a.ground,n.e*r,n.e*a);for(var i=0;i<this.h;i++)e.drawImage(s.a.borderLeft,-n.e,n.e*i),e.drawImage(s.a.borderRight,n.e*this.w,n.e*i);for(var o=0;o<this.h;o++)for(var l=0;l<this.w;l++){var h=this.map[l][o];null!=h&&h.draw(e,l,o,this.t),this.drawAgent(e,l,o)}for(var c=0;c<this.w;c++)e.drawImage(s.a.borderBottom,n.e*c,n.e*this.h),e.drawImage(s.a.borderBottom2,n.e*c,n.e*(this.h+1));if(e.drawImage(s.a.borderBottomLeft,-n.e,n.e*this.h),e.drawImage(s.a.borderBottomLeft2,-n.e,n.e*(this.h+1)),e.drawImage(s.a.borderBottomRight,n.e*this.w,n.e*this.h),e.drawImage(s.a.borderBottomRight2,n.e*this.w,n.e*(this.h+1)),this.t++,this.t%4==0)for(var m of(this.turn++,this.agents)){var g=m.chooseAction();if(null==this.map[m.x][m.y]){var d=m.x,u=m.y;switch(g){case n.d:m.y>0&&u--;break;case n.c:m.x<this.w-1&&d++;break;case n.a:m.y<this.h-1&&u++;break;case n.b:m.x>0&&d--}var f=this.map[d][u];m.getReward(null!=f?f.reward:0),m.newPosition(d,u)}else m.newRun()}}}drawAgent(e,t,a){for(var r of this.agents)r.x==t&&r.y==a&&r.draw(e,this.t)}}class l{constructor(){r(this,"collision",void 0),r(this,"reward",void 0),r(this,"reset",void 0)}draw(e,t,a,r){}}class h extends l{constructor(){super(...arguments),r(this,"collision",!1),r(this,"reward",1),r(this,"reset",!0)}draw(e,t,a,r){e.drawImage(s.a.block,n.e*t,n.e*(a-1.6)),e.drawImage(s.a.blockShadow,n.e*t,n.e*a)}}class c extends l{constructor(){super(...arguments),r(this,"collision",!1),r(this,"reward",.5),r(this,"reset",!0)}draw(e,t,a,r){e.drawImage(s.a.redBlock,n.e*t,n.e*(a-1.6)),e.drawImage(s.a.blockShadow,n.e*t,n.e*a)}}class m extends l{constructor(){super(...arguments),r(this,"collision",!1),r(this,"reward",-1),r(this,"reset",!0)}draw(e,t,a,r){switch(r%4){case 0:e.drawImage(s.a.goomba,n.e*t,n.e*a);break;case 1:e.drawImage(s.a.goomba2,n.e*t,n.e*a);break;case 2:e.drawImage(s.a.goomba,n.e*t,n.e*a);break;case 3:e.drawImage(s.a.goomba3,n.e*t,n.e*a)}}}}}]);
//# sourceMappingURL=index.tsx.chunk.3f7d2.esm.js.map