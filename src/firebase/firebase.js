import * as firebase from 'firebase';
import moment from 'moment';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId:process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGIN_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });



// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });
//   console.log(expenses);
// })

database.ref('expenses')
.on('value', (snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  });
  console.log(expenses);
})
// database.ref('expenses').push(
//   {
//     description: 'Gum',
//     note: '',
//     amount: 1,
//     createdAt: 0
//   }
// );

// database.ref('expenses').push(
//   {
//     description: 'Rent',
//     note: '',
//     amount: 2,
//     createdAt: moment(0).subtract(4, 'days').valueOf()
//   }
// );

// database.ref('expenses').push(
//   {
//     description: 'Credit card',
//     note: '',
//     amount: 3,
//     createdAt: moment(0).add(4, 'days').valueOf()
//   }
// );
// database.ref('notes').push({
//   ititle: 'todo1',
//   body: 'this is my note1'
// });
// const notes = [
//   {
//   id: 12,
//   body: 'this is my note'
// },
// {
//   id: 13,
//   body: 'this is my note1'
// },
// {
//   id: 14,
//   body: 'this is my note2'
// }];

// database.ref('notes').set(notes);
// database.ref()
//  .on('value', (snapshot) => {
//     console.log(snapshot.val());
//  });

//  setTimeout(() => {
//     database.ref('age').set(29)
//  }, 3500);

//  setTimeout(() => {
//   database.ref().off();
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(40)
// }, 10500);

// database.ref('location/city')
// .once('value')
// .then(((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }))
// .catch(((e) => {
//   console.log('error fetching data', error);
// }));


// database.ref().set({
//   'name': 'Nisham p',
//   age: 28,
//   isSingle: false,
//   stressLevel: 6,
//   job: {
//     title: 'se',
//     company: 'google'
//   },
//   location: {
//     country: 'india',
//     city: 'trivandrum'
//   },

// }).then(() => {
//   console.log('data is saved');
// }).catch((error) => {
//   console.log('this failed', error);
// });

// database.ref('attributes').set({
//   height: 73,
//   weight: 86
// }).then(() => {
//   console.log('data is saved');
// }).catch((error) => {
//   console.log('this failed', error);
// });

// database.ref()
// .remove()
// .then(() => {
//   console.log('deleted');
// })
// .catch(() => {
//   console.log('not deleted');
// })

// database.ref().update({
//   name: 'Mike',
//   age: 29,
//   nonExisting: 'test',
//   isSingle: null,
//   stressLevel: 9,
//   'job/company': 'amazon',
//   'location/city': 'kochi'
// }).then(() => {
//     console.log('updated');
//   })
//   .catch(() => {
//     console.log('not updated');
//   })
