module.exports = (sequelize, dataTypes) => {
    let alias = 'Actor';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        }
        
    };
    let config = {
        tableName: 'actors',
        timestamps: true
    };
    
    const Actor = sequelize.define(alias, cols, config)

    Actor.associate = function(models){
        Actor.belongsToMany(models.Movie, {
            as:'movies',
            foreignKey:'actor_id',// en tabla pivot movies_actors
            otherKey:'movies_id',
            through:'actor_movies',//aclaro el nombre de la tabla pivot
            timestamps:false
        })
    }

    return Actor
}