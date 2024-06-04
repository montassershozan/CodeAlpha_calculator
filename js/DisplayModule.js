import { result, BtnsDiv } from "./VarsModule.js";

export class DisplayCAL {

    DispalyResult() {
        BtnsDiv.addEventListener('click', function (e) {
            e.preventDefault();
            let PressTar = e.target;
            if(PressTar.value != undefined){
                result.value += PressTar.value
            }
            BtnsDiv.children[14].addEventListener('click', function (e) {
                try{
                    result.value = eval(result.value);
                }catch{
                    result.value = 'Try Again!!'
                }
             })
             BtnsDiv.children[15].addEventListener('click', function (e) {
                result.value = " "
             })
        })
    }
}