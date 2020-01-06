interface UserInterface {
    id: Number,
    name: String
}

function getUser(user : UserInterface ) : UserInterface {
    return user;
}

// alert(getUser({id: 7, name: "Omar"}).id);