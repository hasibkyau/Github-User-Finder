let searchBtn = document.getElementById('search-btn');
let searchUser = document.getElementById('username-input');
let ui = new UI();

searchBtn.addEventListener('click', (e)=>{
    let userText = searchUser.value;
    if(userText != ''){
        //alert(userText);
        fetch(`https://api.github.com/users/${userText}`)
        .then(result => result.json())
        .then(data => {
            //alert(data);
            console.log(data);
            if(data.message == 'Not Found'){
                ui.showAlert("user not found", "alert alert-danger");
            }
            else{
                //show profile
                ui.showProfile(data);
                console.log(data);
            }

        })
    }
    else{
        //clear profile
        ui.clearProfile();
    }
})