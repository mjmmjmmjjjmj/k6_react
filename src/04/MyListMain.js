import MyList from "./MyList"
import listData from "./MyListData.json"

export default function MyListMain() {
    console.log(listData)

    const myItems = listData.map(item => 
        <MyList title = {item.title}
                imgUrl = {item.imgUrl}
                content = {item.content}
                key={item.title}
        />
    );

  return (
    <div className="w-10/12 grid grid-cols-1 
                            md:grid-cols-2
                            lg:grid-cols-3
                            gap-4">
      {myItems}
      {/* <MyList title ='1' imgUrl='./img/html.png' content='test' />
      <MyList title ='2' imgUrl='./img/css.png' content='test' />
      <MyList title ='3' imgUrl='./img/js.png' content='test' />
      <MyList title ='4' imgUrl='./img/react.png' content='test' /> */}
    </div>
  )
}
