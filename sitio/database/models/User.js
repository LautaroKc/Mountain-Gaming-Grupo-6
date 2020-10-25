module.exports = (sequelize, dataTypes) => {
    let alias = "Usuarios";
    let cols = {
        id:{
            type:dataTypes.INTEGER(11),
            allowNull:false, //permite nulo?
            autoIncrement: true,
            primaryKey:true
        },
        nombre:{
            type:dataTypes.STRING(45),
            allowNull:false
        
        },
        apellido:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        email:{
            type:dataTypes.STRING(45),
            allowNull:false,
            unique:true
        },
        password:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        avatar:{
            type:dataTypes.STRING(45)
        },
        rol:{
            type:dataTypes.STRING(45)
        },
        direccion:{
            type:dataTypes.STRING(45)
        },
        telefono:{
            type:dataTypes.STRING(45)
        }
   
    }
    let config = {
        tableName : 'users',
        timestamps: false
        }
    const User = sequelize.define(alias,cols,config);
    
    return User;
}
