//Unsub All checkbox - if checked, uncheck all channel preferences
$('#unsubAll').change(function () {
    let unsubState = $(this).prop('checked');
    if (unsubState === true) {
        $('.channel-preference').each(function () {
            $(this).prop('checked', false)
        })
    }
})

//Channel preferences - if any selected, uncheck Unsub All
$('.channel-preference').change(function () {
    let channelState = $(this).prop('checked');
    if (channelState === true) {
        $('#unsubAll').prop('checked', false);
    }
})

// Form Validation
jQuery.validator.setDefaults({
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-block').append(error);
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
    }
});

/* validate exact length of field for DOB */
jQuery.validator.addMethod("exactlength", function (value, element, param) {
    return this.optional(element) || value.length == param;
}, $.validator.format("Please enter exactly {0} characters."));


$("#preference-center-form").validate({
    debug: false,
    rules: {
        fname: {
            required: false,
            pattern: /^([a-z]+[,.]?[ ]?|[a-z]+['-]?|[\u00E0-\u00FC])+$/i
        },
        lname: {
            required: false,
            pattern: /^([a-z]+[,.]?[ ]?|[a-z]+['-]?|[\u00E0-\u00FC])+$/i
        },
        prefname: {
            required: false,
            pattern: /^([a-z]+[,.]?[ ]?|[a-z]+['-]?|[\u00E0-\u00FC])+$/i
        },
        email: {
            required: true,
            email: true,
            pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        },
        mobile: {
            required: function () {
                return $('#contactSMS').prop('checked');
            },
            pattern: /^[0-9 ()+-]+$/,
            minlength: 10
        },
        homePhone: {
            required: false,
            pattern: /^[0-9 ()+-]+$/
        },
        workPhone: {
            required: false,
            pattern: /^[0-9 ()+-]+$/
        },
        dd: {
            required: {
                depends: function () {
                    return ($('#mm').val() !== "" || $('#yyyy').val())
                }
            },
            digits: true,
            exactlength: 2
        },
        mm: {
            required: {
                depends: function () {
                    return ($('#dd').val() !== "" || $('#yyyy').val())
                }
            },
            digits: true,
            exactlength: 2
        },
        yyyy: {
            required: {
                depends: function () {
                    return ($('#dd').val() !== "" || $('#mm').val())
                }
            },
            digits: true,
            exactlength: 4
        },
        postcode: {
            required: false,
            pattern: /^[a-zA-Z0-9 -]+$/,
            minlength: 2
        },
        suburb: {
            required: false,
            pattern: /^([a-z]+[,.]?[ ]?|[a-z]+['-]?|[\u00E0-\u00FC])+$/i
        }
    },
    messages: {
        mobile: {
            required: 'This field is required when subscribing to SMS.'
        },
        email: {
            pattern: 'Please provide a valid email address.'
        },
        dd: {
            required: 'Please complete Day field.'
        },
        mm: {
            required: 'Please complete Month field.'
        },
        yyyy: {
            required: 'Please complete Year field.'
        }
    }

});
