function getUserData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json().then(data => {
        console.log(data)


        let cardContainer = document.getElementById('cardContainer');
        data.forEach(user => {
            cardContainer.innerHTML += `<div id="mainCard" style="margin-top: 4%;">
            <div id="head">
                <h4 style="margin-left: 2%; margin-top: 3%; color: rgb(210, 213, 216);">22.04.2022  <span style="margin-left: 5%; color: green; ">  Active </span> </h4>
            </div>

            <div id="body">
                <div id="pic"></div>
                <h4 style="margin-top: 10%; font-weight: bold; font-size: large;">${user.name}</h4>
                <br>
                <h4 style="font-size: small; font-weight: light;">${user.phone}</h4>
                <h4 style="font-size: small; font-weight: light;" >${user.email}</h4>
            </div>

            <div id="lower">
                <div id="lowerLeft">
                    <button>View Profile</button>
                </div>
                <div id="lowerRight"></div>
            </div>`
        })



    }))
    .then(json => json)

}

// flex wrap