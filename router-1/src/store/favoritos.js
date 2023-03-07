import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useFavoritoStore = defineStore('favoritos', () =>{
    
    const favoritos = ref([])

    if(localStorage.getItem('favoritos')){
        favoritos.value = JSON.parse(localStorage.getItem('favoritos'))
    }

    const add = (gp) => {
        favoritos.value.push(gp)
        localStorage.setItem('favoritos',JSON.stringify(favoritos.value))
    }

    const remove = (round) =>{
        favoritos.value = favoritos.value.filter(item => item.round !== round)
        localStorage.setItem('favoritos',JSON.stringify(favoritos.value))
    };

    const findGp = round => favoritos.value.find(item => item.round === round )

    return{
        favoritos,
        add,
        remove,
        findGp
    }

})