import {ClientTitle, ClientContent,ClientContentStrong,ClientCount, ClientTotal, ClientDiv} from "./ToClient.styles"
import { useState, useEffect } from "react";








const ToClient = ({ClientDatas})=>{


    return (<ClientTotal className="row">

{ClientDatas.map((element, index)=>
  <ClientDiv className="col-lg-6 col-md-12" key={index} ContentTitle={element.contentTitle}>
  <ClientTitle IconColorHandle={element.iconColor}>
  <i class={element.iconClass}/>
  <ClientCount>{element.count}</ClientCount>
  </ClientTitle>
  <ClientContent><ClientContentStrong>{element.contentTitle}
  </ClientContentStrong> {element.content}</ClientContent>
  </ClientDiv>
  )}
</ClientTotal>)
}

export default ToClient;

