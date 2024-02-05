const input = document.getElementById('title')
const button = document.getElementById('create')
const spisok = document.getElementById('list')








button.onclick = function () {
    if (input.value.length === 0)
        return

    const newCity = {
        name: input.value,
        visited: false
    }
    cities.push(newCity)
    workWithCities()
    input.value = ''
} //если что-то добавить вне списка


const cities = [{
    name: 'New-York',
    visited: false
},

{
    name: 'Los Angeles',
    visited: false
},

{
    name: 'Omsk',
    visited: false
},

{
    name: 'Moscow',
    visited: false
},

{
    name: 'Kaliningrad',
    visited: false
}]

workWithCities = function () {
spisok.innerHTML = ""
    for (let i = 0; i < cities.length; i++) {
        spisok.insertAdjacentHTML('beforeend', tamplate(cities[i], i))
    }
}
workWithCities()

spisok.onclick = function (event) {
    if (event.target.dataset.index){
    const realIndexx = Number(event.target.dataset.index)
    const realTypee = event.target.dataset.type

    if (realTypee === "remove") {
        cities.splice(realIndexx, 1)
    } else if (realTypee === "leave") {
    cities[realIndexx].visited =! cities[realIndexx].visited
}
}
workWithCities()
}


function tamplate(cities, index) {
    return `<li
 class="list-group-item d-flex justify-content-between align-items-center"
>
 <span class="${cities.visited ? "text-decoration-line-through" : ""}">${cities.name}</span>
 <span>
   <span class="btn btn-small btn-${cities.visited ? "warning" : "success"}" data-index = "${index}" data-type = "leave" >&check;</span>
   <span class="btn btn-small btn-danger" data-index = "${index}" data-type = "remove">&times;</span>
 </span>
</li>`
}


