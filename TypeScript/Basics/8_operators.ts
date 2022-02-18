interface Person {
    name:string
    age:number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'

console.log(key)

type User = {
    _id:number
    name: string
    email:string
    createdAt:Date
}
// in Exclude we input fields which we want remove
type UserKeysNoMeta1 = Exclude<keyof User, '_id'| 'createdAt'> // 'name' | 'email'

// in Pick we input fields which we want save
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'

let u1:UserKeysNoMeta1 = 'name'
// u1 = '_id' - error