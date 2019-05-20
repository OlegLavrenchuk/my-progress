const dataCities = [];
const dataStates = [];
const dataCountries = [];
const dataUsers = [];

class Country {
    constructor({ id, hasc, name }) {
        this.id = id;
        this.hasc = hasc;
        this.name = name;
        dataCountries.push(this);
    }

    render() {
        let selectCountry = document.getElementById('selectCountry');
        let option = document.createElement('option');
            option.innerText = this.name;
            option.value = this.hasc;
            option.dataset.id = this.id;
            selectCountry.appendChild(option);
    }
}

const reqCountries = fetch('http://localhost:3000/countries')
    .then(response => response.json())
    .then(data => data.map(item => new Country(item).render()));


class State {
    constructor({ id, hasc, name, country_id }) {
        this.id = id;
        this.hasc = hasc;
        this.name = name;
        this.country_id = country_id;
        dataStates.push(this);
    }

    render() {
        let renderState = document.getElementById('selectState');
        let option = document.createElement('option');
            option.innerText = this.name;
            option.dataset.id = this.country_id;
            option.value = this.id;
            renderState.appendChild(option);
    }
}

const reqStates = fetch('http://localhost:3000/states')
    .then(response => response.json())
    .then(data => data.map(item => new State(item).render()));



class City {
    constructor({ id, name, state_id }) {
        this.id = id;
        this.name = name;
        this.state_id = state_id;
        dataCities.push(this);
    }

    render() {
        let renderCity = document.getElementById('selectCity');
        let option = document.createElement('option');
            option.innerText = this.name;
            option.dataset.id = this.state_id;
            renderCity.appendChild(option);
    }
}

const reqCities = fetch('http://localhost:3000/cities')
    .then(response => response.json())
    .then(data => data.map(item => new City(item).render()));


class Users {
    constructor({ id, name, email, phone_number, country_id, state_id, city_id, createdAt }) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone_number = phone_number;
        this.country_id = country_id;
        this.state_id = state_id;
        this.city_id = city_id;
        this.createdAt = createdAt;
    }

    render() {
        let users = dataUsers.some( el => el.id == this.id);

        if (!users) {
            dataUsers.push(this);

            let countries = dataCountries.find(item => {
                if (item.id == this.country_id) return item;
            });
            let cities = dataCities.find(item => {
                if (item.id === this.city_id) return item;
            });
            let states = dataStates.find(item => {
                if (item.id === this.state_id) return item;
            });

            let div = document.querySelector('.users')
            let node = document.createElement('div');
                node.classList = 'col-md-6 col-sm-12';
                node.innerHTML = `
                            <ul>
                                <li><b>Name:</b> ${this.name}</li>
                                <li><b>Email:</b> ${this.email}</li>
                                <li><b>Phone number:</b> ${this.phone_number}</li>
                                <li><b>Country:</b> ${countries.name}, <b>State:</b> ${states.name}, <b>City:</b> ${cities.name}</li>
                                <li><b>Creation date:</b> ${this.createdAt}</li>
                            </ul>
                    `
                div.appendChild(node);
        }
    }
}

const reqUsers = fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => data.map(item => new Users(item).render()));





class MyForm {
    constructor() {
        this._form = document.getElementById('form');
        this._selectCountry = document.getElementById('selectCountry');
        this._selectState = document.getElementById('selectState');
        this._form.onsubmit = this.sendRequest;
        this._selectCountry.addEventListener('change', this.openStates);
        this._selectState.addEventListener('change', this.openCity);
        this._submit = document.getElementById('submit');
        this._submit.addEventListener('click', this.getRequest);
    }

    openCity(e) {
        let label = document.getElementById('labelCity');
        let city = document.getElementById('selectCity');
        let stateId = e.target[e.target.selectedIndex].value;
            label.hidden = false;
            city.hidden = false;

        for (let element of city) {
            if (element.dataset.id === stateId) {
                element.hidden = false;
            } else {
                element.hidden = true;
            }
        }
    }

    openStates(e) {
        let label = document.getElementById('labelState');
        let state = document.getElementById('selectState');
        let countryId = e.target[e.target.selectedIndex].dataset.id;
            label.hidden = false;
            state.hidden = false;

        for (let element of state) {
            if (element.dataset.id === countryId) {
                element.hidden = false;
            } else {
                element.hidden = true;
            }
        }
    }


    async sendRequest(event) {
        event.preventDefault();
        let name = document.getElementById('inputName');
        let email = document.getElementById('inputEmail');
        let phone_number = document.getElementById('inputPhone');
        let address = document.getElementById('inputAddress');
        let about_me = document.getElementById('inputAboutMe');
        let country_id = document.getElementById('selectCountry');
        let state_id = document.getElementById('selectState');
        let city_id = document.getElementById('selectCity');

        await fetch('http://localhost:3000/users', {
            method: 'POST',
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                phone_number: phone_number.value,
                address: address.value || null,
                about_me: about_me.value || null,
                country_id: country_id[country_id.selectedIndex].dataset.id,
                state_id: state_id[state_id.selectedIndex].value,
                city_id: city_id[city_id.selectedIndex].dataset.id,
            }),
            headers: { "Content-Type": "application/json" }
        })

        await fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => data.map(item => new Users(item).render()));

            name.value = '';
            email.value = '';
            phone_number.value = '';
            address.value = '';
            about_me.value = '';
            country_id[0].selected = true
            state_id.hidden = true;
            city_id.hidden = true;
            state_id.previousElementSibling.hidden = true;
            city_id.previousElementSibling.hidden = true;
    }
}
new MyForm();














