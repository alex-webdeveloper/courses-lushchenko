class Valid2 extends Valid {
    constructor(email, password) {
        super(email, password);
        this.emaiError = '';
        this.passwordError = '';
    }

    validate() {
        super.validate();
        if (!this.isValid) {
            this.passwordError = 'min length 6';
        }

        if (this.email == '') {
            this.isValid = false;
            this.emaiError = 'email empty';
            return false;
        }
        return true;
    }
}