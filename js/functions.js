function dateIsValid() {
    var dateStr = document.getElementById('join_date').value
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;

    if (dateStr.match(regex) === null) {
        return false;
    }

    const [day, month, year] = dateStr.split('/');

    // 👇️ format Date string as `yyyy-mm-dd`
    const isoFormattedStr = `${year}-${month}-${day}`;

    const date = new Date(isoFormattedStr);

    const timestamp = date.getTime();

    if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
        return false;
    }

    return date.toISOString().startsWith(isoFormattedStr);
}

function checkIfEmail() {
    var str = document.getElementById('person_email').value
    // Regular expression to check if string is email
    const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

    return regexExp.test(str);
}

function submitForm() {
    var date = dateIsValid()
    var email = checkIfEmail()

    switch (date, email) {
        case (true, true):

            // Display the values
            for (var element of document.forms['getValues'].elements) {
                //check if radio or checkbox are picked so as to only print the selected ones
                if (element.type == "radio") {
                    if (element.checked) {
                        console.log(element.value);
                    }
                }
                //print all that are not checkbox or radio or submit
                else if (element.type != "submit") {
                    console.log(element.value);
                }
                }
            break;
        case (false, true):
            console.log('תאריך גיוס לא תקין');
            break;
        case (true, false):
            console.log('מייל לא תקין');
            break;
        case (false, false):
            console.log('תאריך ומייל לא תקינים');
    }
}