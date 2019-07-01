import { memberAPI } from '../../../api/member';
import { MemberEntity } from '../../../model';
import { members } from '../../../api/member/mockData';


export const fetchMembersAction = () => (dispatch) =>{
  //ajax api
  memberAPI.fetchMembers().then(members =>{
    dispatch(fetchMembersCompleted(members))
  })
}
//actions 返回的一个ype 对象， redeucer重新计算reducer = state +mutation
const fetchMembersCompleted = (members:MemberEntity[]) => ({
  type:'FETCH_MEMBER_COMPLETED',
  payload:members
})