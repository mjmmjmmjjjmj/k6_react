

export default function TailSelect({ops, opDefault, selRef, handleSel}) {
  const opTags = ops.map(item => 
    <option value = {item} key = {item}>{item}</option>)
    return (
    <div>
         <select id="sel" 
                onChange={handleSel}
                ref = {selRef}
                className="bg-gray-50 border
                border-gray-300
                text-gray-900
                text-sm rounded-lg
                focus:ring-blue-500
                focus:border-blue-500
                block w-full p-2.5">
            <option defaultValue>{opDefault}</option>
            {opTags}
        </select>      
    </div>
  )
}
