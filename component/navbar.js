function navbar(Parent){
    const header = document.createElement("header");
    header.setAttribute("class","navbar");
    header.innerHTML = 
    `
    <nav class="h-screen">
    <div class="flex items-center justify-center gap-4 mb-16 text-2xl"><img class="w-7 md:w-10" src="./icons/favicon.ico" alt=""><p class="icon_font">Friend Zone</p></div>


    <ul class="flex flex-col nav-link">
        <a href="#topside"><li class="nav-item activePage homeID"><img class="w-5 md:w-7" src="./icons/home.svg" alt=""><p>Home</p></li></a>
        <li class="nav-item peopleID md:hidden"><img class="w-5 md:w-7" src="./icons/people.svg" alt=""><p>People</p></li>
        <li class="nav-item createID"><img class="w-5 md:w-7" src="./icons/gallery-add.svg" alt=""><p>Create</p></li>
        <li class="nav-item saveID"><img class="w-5 md:w-7" src="./icons/save.svg" alt=""><p>Saved</p></li>
    </ul>

    <div onclick="window.location.href = 'index.html'" class="nav-item logoutID  mt-72"><img class="w-5 md:w-7" src="./icons/logout.svg" alt=""><p>logout</p></div>
</nav>
    `
    Parent.prepend(header);
}



export {navbar}