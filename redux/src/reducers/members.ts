import { MemberEntity } from '../model';

//状态计算 reducer 纯函数 返回当前状态
export const membersReducer = (state:MemberEntity[] = [], action) =>{
  // switch
  switch(action.type){
    case 'FETCH_MEMBER_COMPLETED' :
      return action.payload
  }
  return state
}