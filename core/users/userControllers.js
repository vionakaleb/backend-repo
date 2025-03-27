import firebase from '../../config/firebase.js';
import User from './userModel.js';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const db = getFirestore(firebase);

export const createUser = async (req, res, next) => {
    try {
      const data = req.body;

      await addDoc(collection(db, 'users'), data);
      res.status(200).send('User created successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  export const getAllUsers = async (req, res, next) => {
    try {
      const users = await getDocs(collection(db, 'users'));
      const userArray = [];
  
      if (users.empty) {
        res.status(400).send('No Users found');
      } else {
        users.forEach((doc) => {
          const user = new User(
            doc.id,
            doc.data().totalAverageWeightRatings,
            doc.data().numberOfRents,
            doc.data().recentlyActive
          );
         userArray.push(user);
        });
  
        res.status(200).send(userArray);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  export const getUser = async (req, res, next) => {
    try {
      const id = req.params.id;
      const user = doc(db, 'users', id);
      
      const data = await getDoc(user);

      if (data.exists()) {
        res.status(200).send(data.data());
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  export const updateUser = async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const user = doc(db, 'users', id);
      
      await updateDoc(user, data);

      res.status(200).send('User updated successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  export const deleteUser = async (req, res, next) => {
    try {
      const id = req.params.id;

      await deleteDoc(doc(db, 'users', id));

      res.status(200).send('User deleted successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };