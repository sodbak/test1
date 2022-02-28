 let myLeads = []
 const inputEl = document.getElementById('input-el')
let saveEl = document.getElementById('save')

saveEl.addEventListener( 'click', function (){
    myLeads.push(inputEl.value)

    console.log(myLeads)
}) 

