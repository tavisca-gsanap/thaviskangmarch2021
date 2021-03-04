import { AbstractControl, ValidatorFn } from "@angular/forms";
import { Logic } from "../../models/app.productinfo.logic";

// customm validator class must have static method
// this method can accept AbstractControl or premptive types
// if the validation is successfull thne method will return 'null'
// else it will return a JSON object with 'invalidation data'

export class CustomValidator {
   static checkEven(ctrl: AbstractControl):any {
      let value  = ctrl.value;

      if(parseInt(value) % 2 === 0) {
        return null; // valid
      } else {
      return {even:false};}
   }

   static mustBeNew(ctrl: AbstractControl): any {
    let value  = ctrl.value;
    let products = new Logic().getProducts();
    console.log(products);
    if(products.find(prd => prd.ProductId == value)){
        return {alreadyExist:true};
    }
    else{
      return null; // valid
    }
  }
}
//    static mustBeNew( products:Array<ProductInfo>): ValidatorFn {

//     return (ctrl: AbstractControl): any => {
//       let value  = ctrl.value;
//       console.log(products);
//       if(products.find(prd => prd.ProductId == value)){
//           return {alreadyExist:true};
//       }
//       else{
//         return null; // valid
//       }
//     }
//   }
// }


