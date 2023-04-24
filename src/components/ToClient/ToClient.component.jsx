import {ClientTitle, ClientContent,ClientContentStrong,ClientCount, ClientTotal, ClientDiv} from "./ToClient.styles"




const ClientDatas = [
  {iconClass: "fa-regular fa-face-smile", iconColor:"#20b38e", count:5, contentTitle:"Happy Clients:", content:"The current satisfaction rate of all clients is 100%."},
  {iconClass: "fa-solid fa-list-check", iconColor:"#8a1ac2", count:10, contentTitle:"Projects:", content:"Total number of projects undertaken in my main and side careers."},
  {iconClass: "fa-regular fa-clock", iconColor:"#2cbdee", count:2, contentTitle:"Years of experience:", content:"Although I have limited experience, I am able to adapt to any project."},
  {iconClass: "fa-solid fa-award", iconColor:"#ffb459", count:4, contentTitle:"Advantage:", content:"I am proficient in programming for both front-end and back-end development using languages such as Flutter, Python, React, and Node."}
];



const ToClient = ()=>{
    return (<ClientTotal className="row">

{ClientDatas.map((element, index)=>
  <ClientDiv className="col-lg-6 col-md-12" key={index} ContentTitle={element.contentTitle}>
  <ClientTitle IconColorHandle={element.iconColor}>
  <i class={element.iconClass} />
  <ClientCount>{element.count}</ClientCount>
  </ClientTitle>
  <ClientContent><ClientContentStrong>{element.contentTitle}
  </ClientContentStrong> {element.content}</ClientContent>
  </ClientDiv>
  )}
</ClientTotal>)
}

export default ToClient;

