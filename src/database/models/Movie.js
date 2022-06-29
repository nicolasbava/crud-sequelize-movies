module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        title: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.INTEGER
        },
        length: {
            type: dataTypes.INTEGER
        },
        awards: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        }
    };
    let config = {
        tableName: 'movies',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        underscored: true
    };
    
    const Movie = sequelize.define(alias, cols, config)

    Movie.associate = function(models){
        Movie.belongsTo(models.Genre, {
            
            as:'genre', //nombre de la union, puede ser cualquier nombre, yo le puse 'genre'
            foreignKey:'genre_id'
        });

        Movie.belongsToMany(models.Actor, {
            as:'actors',
            foreignKey:'movies_id',// en tabla pivot movies_actors
            otherKey:'actor_id',
            through:'actor_movies',//aclaro el nombre de la tabla pivos
            timestamps:false
        })
    }

    

    return Movie
}