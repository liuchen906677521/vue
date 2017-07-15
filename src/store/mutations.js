import * as Types from './mutation-types'
const mutations={
  [Types.ADD_COLLECT](state,obj){
    state.collect.push(obj);

    let flag= state.collect.some(item=>item.id==obj.id);
    !flag &&state.collect.push(obj);
    localStorage.setItem('collects',JSON.stringify(state.collect));

  },
  [Types.REMOVE_COLLECT](state,id){
    state.collect=state.collect.filter(item=>item.id!==id);


  }

};
export default mutations;



/*
 let a = {
 b:'c'
 }
 let obj = {
 [a.b]:1
 }
 */
