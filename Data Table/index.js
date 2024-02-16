const studentData = (e) =>
{
    e.preventDefault();

    let std_name = document.getElementById("name-1").value;
    let std_num = document.getElementById("num").value;
    let std_mark = document.getElementById("mark").value;

    let table = document.createElement("tr");
    let table_1 = document.createElement("td");

    table_1.innerHTML=std_name;
    
    let table_2 = document.createElement("td");
    table_2.innerHTML=std_num

    let table_3 = document.createElement("td");
    if(std_mark >=80)
    {
        table_3.innerHTML="Pass";
        table_3.style.color="green";
    }
    else
    {
        table_3.innerHTML="Fail";
        table_3.style.color="red";
    }

    let table_4 = document.createElement("td");
    table_4.innerHTML= "Delete";
    table_4.style.color="red";
    table_4.addEventListener("click",(e)=>
    {
        e.target.parentNode.remove();
    })

    table.append(table_1,table_2,table_3,table_4);

    document.getElementById("data").append(table);
}

const delete_all=()=>
{
    document.getElementById("data").innerHTML="";
}

document.getElementById("delet-all").addEventListener("click",delete_all)
document.getElementById("student-data").addEventListener("submit",studentData);