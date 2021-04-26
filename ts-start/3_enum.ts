enum Membership {
    Simple,//0
    Standard,//1
    Premium//2
}

const membership: Membership = Membership.Standard
console.log(membership)
const membershipReverse = Membership[2]
console.log(membershipReverse)
const membershipSimpleName = Membership[Membership.Simple]
console.log(membershipSimpleName)


enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}
const social = SocialMedia.INSTAGRAM
console.log(social)
