import  "./userPageList.css";

import ProposalInfo from "../proposalInfo/proposalInfo";
const userPageListItem=(props)=>{
  const eventInfoHandler=()=>{
    props.urr[props.number]=true;
    props.setUrr([...props.urr]);
  }
 
    return(
        <>
        <article className="proposalListArticle" onClick={eventInfoHandler}>
                      <img src={props.listItemData.eventImage} alt="pic"/>
                      <ul>
                        <li>{props.listItemData.vendorName}</li>
                        <li>{props.listItemData.budget}/-</li>
                        <li>{props.listItemData.place}</li>
                      </ul>
        </article>
        {props.urr[props.number]?<ProposalInfo show={props.listItemData} close={props.urr} setClose={props.setUrr} ind={props.number} select={props.select} setSelect={props.setSelect} user={props.user}/>:null}
        </>
    )
}
export default userPageListItem;