document.addEventListener('DOMContentLoaded', () => {
    loadStoredData();
});

function savetolocal(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailid.value;
    const phonenumber = event.target.phonenumber.value;

    const obj = {
        name,
        email,
        phonenumber
    };

    localStorage.setItem(obj.email, JSON.stringify(obj));
    showuseronscreen(obj);
}

function showuseronscreen(obj) {
    const parentElem = document.getElementById('Listofusers');
    const childelem = document.createElement('li');
    childelem.textContent = obj.name + '-' + obj.email + '-' + obj.phonenumber;

    const deletebutton = document.createElement('input');
    deletebutton.type = "button";
    deletebutton.value = 'Delete';
    deletebutton.onclick = () => {
        localStorage.removeItem(obj.email);
        parentElem.removeChild(childelem);
    };
    childelem.appendChild(deletebutton);

    const editbutton = document.createElement('input');
    editbutton.type = "button";
    editbutton.value = 'Edit';
    editbutton.onclick = () => {
        localStorage.removeItem(obj.email);
        parentElem.removeChild(childelem);
        document.getElementById('usernameInputTag').value = obj.name;
        document.getElementById('emailInputTag').value = obj.email;
        document.getElementById('phonenumberInputTag').value = obj.phonenumber;
    };
    childelem.appendChild(editbutton);

    parentElem.appendChild(childelem);
}

function loadStoredData() {
    const keys = Object.keys(localStorage);
    for (const key of keys) {
        const obj = JSON.parse(localStorage.getItem(key));
        showuseronscreen(obj);
    }
}