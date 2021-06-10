import faker from 'faker';

let data = {
	users: [
	]
};

for (let i=1; i<=100; i++) {
  data.users.push({
    id: i,
    lastname: faker.name.lastName(),
    firstname: faker.name.firstName(),
    middlename: faker.name.firstName(),
    avatar: "https://placekitten.com/150/150",
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber()
  });
}

console.log(JSON.stringify(data));
