class UI {
    constructor(){
        this.profile = document.querySelector('#profile');   
    }

    showProfile(user){
        this.clearAlert();
        this.profile.innerHTML = `<div class = "card card-body" mb-3 >
        <div class = "row">

        <div class = "col-md-3">
        <img class = "img-fluid mb-2" src = "${user.avatar_url}">
        <a href = "${user.html_url}" target = "_blank" class = "btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        
        <div class = "col-md-9">
        <span class = "badge badge-primary text-secondary">Public Repos: ${user.public_repos}</span>

        <span class = "text-secondary badge badge-primary">Public Gists: ${user.public_gists}</span>

        <span class = "text-secondary badge badge-primary">Follwers: ${user.followers}</span>

        <span class = "text-secondary badge badge-primary">Following: ${user.following}</span>
        <br><br>
        <ul class = "list-group">
            <li class = "list-group-item">Company: ${user.company}</li>
            <li class = "list-group-item">Blog: ${user.blog}</li>
            <li class = "list-group-item">Location: ${user.location}</li>
            <li class = "list-group-item">Member Since: ${user.created_at}</li>
        </ul>

        </div>

        </div>
        </div>`
    }
    clearProfile(){
        this.profile.innerHTML = "";
    }
    showAlert(message, className){
        this.clearProfile();
        this.clearAlert();

        let div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));

        let container = document.querySelector('.searchContainer');
        let search = document.querySelector('.search');
        container.insertBefore(div, search);
    }

    clearAlert(){
        let currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }

    }
}