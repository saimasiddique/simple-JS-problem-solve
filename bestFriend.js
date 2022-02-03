
function lengthyName(nameArray) {
    let lengthyFriendName = '';
    for (const name of nameArray) {
        // console.log(name);
        if (name.length > lengthyFriendName.length) {
            lengthyFriendName = name;
        }

    }
    return lengthyFriendName;
}
friendsName = ['Swarna', 'Polin', 'Mukta', 'Nadia', 'Tashfia', 'Hunulunu', 'Jhunu'];
const nameOfFriend = lengthyName(friendsName);

console.log(nameOfFriend);