/**
 * Created by Javatech on 18.01.15.
 */
function Validate(form) {
    this.formIsValid = true;
    this.form = form;

    this.check = function (el) {
        switch (el.tagName) {
            case "SELECT":
                this.checkAndSetColor(el.selectedIndex != 0, el);
                break;
            case "TEXTAREA":
                this.checkAndSetColor(el.value && el.value != el.defaultValue, el);
                break;
            case "INPUT":
                switch (el.getAttribute('type')) {
                    case "text":
                        this.checkAndSetColor(el.value && el.value != el.defaultValue, el);
                        break;
                    case "email":
                        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
                        this.checkAndSetColor(regex.test(el.value), el);
                        break;
                }
                break;
        }
    }

    this.checkAndSetColor = function (val, el) {
        if (val) {
            $(el).next('.error').addClass('invisible')
        } else {
            $(el).next('.error').removeClass('invisible');
            this.formIsValid = false
        }
    }

    this.clear = function () {
        for (var i = 0, len = this.form.length; i < len; i++) {
            if (this.form[i].tagName == "SELECT") {
                this.form[i].selectedIndex = -1;
            } else {
                this.form[i].value = this.form[i].defaultValue;
            }
        }
    }

    for (var i = 0, len = this.form.length; i < len; i++) {
        if (this.form[i].hasAttribute('required')) {
            this.check(this.form[i]);
        }
    }

}

function validateForm() {
    var validate = new Validate(document.contactForm);
    if (validate.formIsValid) {
        $('.contact .alert-success').removeClass('hidden');
        $('.contact .alert-danger').addClass('hidden')
        validate.clear();
    } else {
        $('.contact .alert-success').addClass('hidden');
        $('.contact .alert-danger').removeClass('hidden');
    }
}