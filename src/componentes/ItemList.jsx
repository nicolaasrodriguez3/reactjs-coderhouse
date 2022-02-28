import react, { useEffect, useState } from "react";
import Item from "./Item";
import Loader from "./Loader";
import { BrowserRouter, Switch, Route, useParams, Link} from "react-router-dom";
import { getFirestore} from "../firebase/firebase";

export default function ItemList() {

  const { categoryId } = useParams();

  const [llegoLaPromesa, setLlegoLaPromesa] = useState(false);

  const [arrayDeItems, setArrayDeItems] = useState([]);

  

  useEffect(() => {
    console.log(categoryId)
    const db = getFirestore();

    if (categoryId == 'Remeras'){
      const itemCollection = db.collection("items").where('categoria','==','Remeras');
      
      itemCollection.get()
      .then((querySnapShot)=>{
          
        setArrayDeItems(querySnapShot.docs.map((doc)=>{
              
              return {id: doc.id, ...doc.data()}
          
          }));

          setLlegoLaPromesa(true)

      })
      .catch((err)=>{
          alert(err);
      });
    }

    if (categoryId == 'Accesorios'){
      const itemCollection = db.collection("items").where('categoria','==','Accesorios');
      
      itemCollection.get()
      .then((querySnapShot)=>{
          
        setArrayDeItems(querySnapShot.docs.map((doc)=>{
              
              return {id: doc.id, ...doc.data()}
          
          }));
          
          setLlegoLaPromesa(true)


      })
      .catch((err)=>{
          alert(err);
      });
    }


    if (!categoryId ){
      const itemCollection = db.collection("items");
      
      itemCollection.get()
      .then((querySnapShot)=>{
          
        setArrayDeItems(querySnapShot.docs.map((doc)=>{
              
              return {id: doc.id, ...doc.data()}
          
          }));

          setLlegoLaPromesa(true)


      })
      .catch((err)=>{
          alert(err);
      })

      
    }

   
    
    

  }, [categoryId]);

  return (
    <>
      {llegoLaPromesa ? (
        <>
          <div className="itemList">
            {arrayDeItems.map((item) => {
              return <Item item={item} />;
            })}
          </div>
        </>
      ) : (
        <>
         
         <Loader></Loader>
         
          
        </>
      )}
    </>
  );
}
