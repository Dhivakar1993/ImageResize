const elem =document.createElement("h1")
elem.innerText="Image resizer"
console.log(elem);
document.body.append(elem);

const div = document.createElement("div");
document.body.append(div);
div.innerHTML=
`\
<div>
<div>
<div><label>Enter the width:</label></div>
<div><input type="number" name="width" id="id-1" oninput="updateWidth()"/></div>
</div>\
<div>
<div><label>Enter the Height:</label></div>
<div><input type="number" name="height" id="id-2" oninput="updateHeight()"/></div>
</div>\
<button onclick="download()">Download</button>
 `;


function updateWidth()
{
    const inp1= document.getElementById("id-1");
    console.log(inp1);
    console.log(inp1.value);
    img.width=inp1.value;
}
function updateHeight()
{
    const inp1= document.getElementById("id-2");
    console.log(inp1);
    console.log(inp1.value);
    img.height=inp1.value;
}
function download()
{
    const con=document.getElementById('con');
    const b=new Blob([con], {type:'img'});
    const link = document.createElement('a');
    link.href=URL.createObjectURL(b)
    link.download="document.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)
}

const img=document.createElement("img")
img.setAttribute(
    "src",
    "https://th.bing.com/th/id/OIP.gwUjoYO8aGuy0zLAeMoJpwHaFb?w=301&h=180&c=7&r=0&o=5&pid=1.7"
);
img.alt="imgage";
console.log(img);
document.body.append(img)



