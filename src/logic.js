export const LANES = [-2.65, 0, 2.65];
export const POWER_SECONDS = {salt:10,sugar:10,shoes:12,rug:7};
export function collision(kind, jump, duck, shield=false){
  if(shield) return false;
  if(kind==='arch') return !duck && jump < 3.7;
  return jump < ({paste:.52,tarhana:.42,goose:.72,wall:1.05,sheep:1.2,hay:1.55,cart:1.5,trailer:2.45,roof:2.8}[kind]??1.3);
}
export function purchase(save,id,price){
  if(save.owned.includes(id)||save.wallet<price) return false;
  save.wallet-=price;save.owned.push(id);return true;
}
export function freshRun(){return {distance:0,clovers:0,lane:1,x:0,jump:0,velocity:0,duck:0,time:0,speed:13,shields:2,powers:{salt:0,sugar:0,shoes:0,rug:0},hit:0};}
export function safeSave(raw){
  try{const data=JSON.parse(raw);return {wallet:Math.max(0,Math.floor(Number(data.wallet)||0)),best:Math.max(0,Math.floor(Number(data.best)||0)),owned:Array.isArray(data.owned)?data.owned.filter(x=>['nazar','saddle','hooves'].includes(x)):[]};}catch{return {wallet:0,best:0,owned:[]};}
}
