import {old_proverbs} from './old_proverbs.js'
import {proverbs_only} from "./proverbs_only.js"
import {proverbs_with_quotes} from './proverbs_with_quotes.js'


/**
 * Get a random array with a certain size from another array
 * @param no_of_proverbs the size of the required random array
 * @return the resulted array
 * */
Array.prototype.random = function (no_of_proverbs) {
    let result = []
    let i = 0
    for (i = 0; i < no_of_proverbs; i++){
        result.push((this[Math.floor((Math.random()*this.length))]).trim())
    }
    return result;
}


export default class KurdishProverbs {
    /**
     * The main and the only function to return a list of proverbs
     * @param no_of_proverbs the required number of proverbs
     * @param category the category of proverb (proverbs_only, proverbs_with_quotes, random)
     * @return a result array with provers as string items
     * */
    static generate(no_of_proverbs, category){
        if (category === 'proverbs_only'){
            return proverbs_only.random(no_of_proverbs)
        }else if(category === 'proverbs_with_quotes'){
            return proverbs_with_quotes.random(no_of_proverbs)
        }else if (category === 'old_proverbs'){
            return old_proverbs.random(no_of_proverbs)
        }
    }
}

console.log(KurdishProverbs.generate(3, 'old_proverbs'))