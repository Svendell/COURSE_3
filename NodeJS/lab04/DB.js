const EventEmitter=require('events');

let db_data = [
    {id:1, name:"Имя именное", bday: "2000-01-01"},
    {id:2, name:"Имя2 именное2", bday: "2000-01-01"}
]

class DB extends  EventEmitter{

//Для генерации событий предназначена функция emit(),   
//прослушивания – функция on()
    async get() {return db_data};
    async select(param) {
        if(!isNaN(param)){
            console.log(`param : ${param}`);
            let elem = db_data.find(item => item.id == param)
                if(elem == undefined){
                    console.log("Bad ID");
                    return {id:0, name:"", bday: ""};
                }
                else{
                    console.log(`get_selected: ${elem.id} , ${elem.name}, ${elem.bday}`);
                    return elem;
                }
            }
       };

    async post(object) {
        if(object.bday != undefined && new Date(object.bday) > new Date()){
            console.log("Unreal Date")
        }
        else{
            console.log(`ObjectId: ${typeof(object.id)}`);
            if(object.id =='undefined' || object.id =='NaN' || object.id.isNaN =='NaN' || object.id.isNaN =='true' || object.id.isNaN =='undefined' || object.id.isNaN ==true || object.id.isNaN){
                console.log(`ID: ${object.id}`);
                console.log("BAD ID");
            }
            else{
                let elem = db_data.find(item => item.id == object.id)
                console.log(`POST: ${elem}`);
                if(elem != undefined){
                    console.log("ID used");
                }
                else
                    db_data.push({id : object.id, name : object.name, bday: object.bday});
            }
        }
    };


    async put(object){
        try{
            
            if(!isNaN(parseInt(object.id)) && parseInt(object.id) >= 1 && parseInt(object.id) <= 1000){
                if(object.bday != undefined && new Date(object.bday) > new Date()){
                    console.log("Unreal Date")
                }
                else{
                    let elem = db_data.find(item => item.id == object.id)
                    
                    console.log(`PUT: ${elem.id} , ${elem.name}, ${elem.bday}`);
                    if(elem == undefined){
                        console.log("Bad ID");
                    }
                    else{
                        if(object.name){
                            for (let i = 0; i < db_data.length; i++) {
                                if (db_data[i].id == parseInt(object.id)) {
                                  db_data[i].name=object.name;
                                  db_data[i].bday=object.bday;
                                  break;
                                }
                            }
                        console.log("");
                        }
                    }
                }
            }
            else{
                console.log("somethingwrong");
            }
        }
        catch{console.log("put exception")}
    }
    async delete(object){
        console.log("delete");
        let elem = db_data.find(item => item.id == object);
        if(elem != null){
            db_data = db_data.filter(item => item.id !== elem.id);
        }
        //console.log(db_data);
    }
       
}
   
exports.DB=DB;