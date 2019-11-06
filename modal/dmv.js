
const db = require("./conn");
class dmv {
    constructor(name, address,picture) {
        this.name = name;
        this.address = address;
        this.picture = picture;
    }
    static async getAll(){

            try{
                const response = await db.any(`SELECT * FROM dmv;`);
                return response;
            }catch(error){
                    return error.message;
            
            }
    } static async getById(id){
       try{
           const response = await db.one(
               `SELECT * from dmv where id =$1;`,
               [id]
           );
           return response;
       }catch(err){
           return err.message;
       }
   }
}
   

    module.exports = dmv;
