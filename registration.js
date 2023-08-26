let submit=document.querySelector(".submit");

function submitForm(){

    var output=document.querySelector(".output");
    console.log(output);
    let imageurl=document.querySelector("#img").value;
    var generatedurl=`${imageurl}`;
    
   
    var array = []
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    
    for (var i = 0; i < checkboxes.length; i++) {
      array.push(checkboxes[i].value)
    }

   
    const data={
        name: document.getElementById("name").value,
        img: generatedurl,
        email: document.getElementById("email").value,
        websitelink: document.getElementById("websitelink").value,
        skills: array.toString(),
        gender:document.querySelector('input[name="gender"]:checked').value

    };
    console.log(data);

    
    let newlist=document.createElement('div');
    newlist.classList.add('addData');
    newlist.innerHTML=`
      <img src="${generatedurl}" alt="image">
      <div class="NameContainer">${data.name}</div>
      <div class="GenderContainer">${data.gender}</div>
      <a href="mailto:${data.email}">${data.email}</a><br>
      <a href="${websitelink}">${data.websitelink}</a>
      <div class="SkillContainer">${data.skills}</div>
    `
    console.log(newlist);
   
    output.appendChild(newlist);
   
    
    clearAll()

}
function clearAll(){
  let input=document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
        input.checked = false
      });
}