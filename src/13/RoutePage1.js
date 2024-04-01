import { useParams } from "react-router-dom"

export default function RoutePage1() {
    const item = useParams().item ;
  return (
    <div>
      page1 : {item}
    </div>
  )
}
