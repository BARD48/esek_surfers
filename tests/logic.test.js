import test from 'node:test';
import assert from 'node:assert/strict';
import {collision,purchase,safeSave,freshRun} from '../src/logic.js';
test('low obstacles require jumping, arches require ducking',()=>{assert.equal(collision('paste',0,false),true);assert.equal(collision('paste',.7,false),false);assert.equal(collision('arch',0,true),false);assert.equal(collision('arch',0,false),true);assert.equal(collision('hay',1.8,false),false);assert.equal(collision('roof',2.1,false),true);assert.equal(collision('roof',3.5,false),false);});
test('rug protects across all obstacles',()=>{for(const kind of ['hay','arch','sheep','trailer','roof'])assert.equal(collision(kind,0,false,true),false);});
test('shop cannot charge twice or overspend',()=>{const save={wallet:60,owned:[]};assert.equal(purchase(save,'nazar',40),true);assert.equal(save.wallet,20);assert.equal(purchase(save,'nazar',40),false);assert.equal(purchase(save,'saddle',90),false);assert.equal(save.wallet,20);});
test('save corruption is recovered and runs reset power timers',()=>{assert.deepEqual(safeSave('bad'),{wallet:0,best:0,owned:[]});assert.equal(safeSave('{"wallet":-5}').wallet,0);const a=freshRun(),b=freshRun();a.powers.rug=7;assert.equal(b.powers.rug,0);});
