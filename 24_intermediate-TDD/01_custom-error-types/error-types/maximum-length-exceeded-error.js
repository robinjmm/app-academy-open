const ValidationError = require('./validation-error');

// Your code here
class MaximumLengthExceededError extends ValidationError {
    constructor(excessLength, ...params) {
        super(...params);

        this.name = "MaximumLengthExceededError";
        this.message = "Maximum length exceeded"

        if (excessLength) {
            this.message = `Maximum length exceeded by ${excessLength}`;
        }
    }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
    module.exports = MaximumLengthExceededError;
} catch {
    module.exports = null;
}