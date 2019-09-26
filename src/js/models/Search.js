import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults(){
        const key = 'aa6634f7387fbbe73d4722f26b2fe165';
    
        try{
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch(error){
            alert(error);
        }
        
        
        
    }
}