import {FlatList, Pressable, Text, View } from "react-native";
import "./global.css"
import { SafeAreaView } from "react-native-safe-area-context";
import { offers } from "@/constants";
import { Fragment } from "react";

 
export default function index () {
   return (
      <SafeAreaView >
        <FlatList
          data={offers}
         renderItem={({ item, index }) => {
           return (
             <View>
               <Pressable className="offer-card" style= {{ backgroundColor: item.color}}>
                 {({ pressed }) => (
                   <Fragment> 
                     
                  </Fragment>
                 )}
               </Pressable>
             </View>
      
           )

         }}
        
      /> 

      
    </SafeAreaView>
  );
}