function navbar_translate() {
    if (!navbar.classList.contains('navbar_hide')) {
        navbar.classList.add('navbar_hide');
        navbar.classList.remove('navbar_show');
        navbar_logo_section.classList.add('half_opacity')
        navbar_logo_section.classList.remove('full_opacity')
    } else {
        navbar.classList.remove('navbar_hide');
        navbar.classList.add('navbar_show');
        navbar_logo_section.classList.remove('half_opacity')
        navbar_logo_section.classList.add('full_opacity')
    }
}


const change_login_reg = () => {
    if(user_login.classList.contains('hidden')) {
        user_login.classList.remove('hidden')
        user_register.classList.add('hidden')
    } else{
        user_login.classList.add('hidden')
        user_register.classList.remove('hidden')
    }
}

