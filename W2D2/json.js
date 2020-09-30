"use strict";
{
    let user = {
        name: "John Smith",
        age: 35
      };
      
      let user1 = JSON.parse(JSON.stringify(user));
      console.log(user1);
}
