import React from "react"
function wordlettercount()
{
    const [ text,setText] =useState("")

    wordCount =text.split(/\s+/).filter(Boolean).length
    letterCount =text.length

    const handleTextchange =(e) =>{
        setText(e.target.value)
    }
    <div>
        <textArea
        placeholder="type somthing here .."
        onchange ={handleTextchange} 
        value ={text}
        row ={5}
        columns ={50}
        />
<p>
    word count ={wordCount}
</p>
<p>
    lettercount ={letterCount}
</p>
    </div>
}
export default wordlettercounter;