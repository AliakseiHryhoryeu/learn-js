enum Membership {
    Standard,
    Premium
}
const membership = Membership.Standard
const membershipReverse = Membership[1]

console.log(membership)
console.log(membershipReverse)


enum UserAccess {
    Admin = 'Admin',
    Moderator = 'Moderator',
    User = 'User'
}

const user = UserAccess.User
console.log(user)