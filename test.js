import KurdishProverbs from "./index.js";

describe('Proverbs array', function() {
    describe('#generate()', function() {
        it('should return an array of size 3', function(done) {
            let generatedProverbs = KurdishProverbs.generate(3, 'proverbs_only')
            if (generatedProverbs.length === 3){
                done()
            }else{
                done("The resulted array was not of size 3")
            }
        });
    });
});